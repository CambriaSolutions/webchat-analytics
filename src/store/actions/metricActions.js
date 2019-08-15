import * as actionTypes from './actionTypes'
import { storeMetricsSubscription } from './realtimeActions'
import db from '../../Firebase'
import { getUTCDate } from '../../common/helper'
import {
  format,
  getMonth,
  getYear,
  startOfMonth,
  isWithinInterval,
  subMonths,
  subDays,
  isToday,
  endOfMonth,
} from 'date-fns'

const getQuery = (startDate, endDate, type) => {
  //default type
  if (!type) {
    type = 'Last 7 days'
  }
  let months = [],
    days = []

  const currMonth = getMonth(endDate)
  const currYear = getYear(endDate)

  const includeCurrMonth = isToday(endDate)
  let tempDate = endDate
  let tempStartOfMonth = startOfMonth(tempDate)
  let isWithinIntervals = isWithinInterval(tempDate, {
    start: startDate,
    end: endDate,
  })

  while (isWithinIntervals) {
    const tempMonth = getMonth(tempDate)
    const tempYear = getYear(tempDate)
    let nextTempDate = null

    if (type.includes('days')) {
      nextTempDate = subDays(tempDate, 30)
    } else {
      nextTempDate = subMonths(tempDate, 1)
    }

    if (type === 'Today' || type === 'Yesterday' || type === 'Last 7 days') {
      days.push({ start: startDate, end: endDate })
    } else if (type === 'Last quarter') {
      months.push(startOfMonth(tempDate))
    } else if (
      includeCurrMonth &&
      currMonth === tempMonth &&
      currYear === tempYear
    ) {
      months.push(startOfMonth(tempDate))
    } else if (currMonth === tempMonth) {
      if (currYear !== tempYear) {
        days.push({ start: tempDate, end: endOfMonth(tempDate) })
      } else {
        days.push({ start: tempStartOfMonth, end: tempDate })
      }
    } else if (tempDate === tempStartOfMonth) {
      months.push(startOfMonth(tempDate))
    } else if (
      isWithinInterval(nextTempDate, {
        start: startDate,
        end: endDate,
      })
    ) {
      months.push(startOfMonth(tempDate))
    } else if (
      type === 'custom' &&
      nextTempDate > tempDate &&
      isWithinInterval(tempDate, {
        start: startDate,
        end: endDate,
      })
    ) {
      tempDate = startDate
    } else {
      if (tempDate > startDate || tempDate === startDate) {
        days.push({ start: tempDate, end: endOfMonth(tempDate) })
      } else {
        days.push({ start: tempStartOfMonth, end: tempDate })
      }
    }

    tempDate = nextTempDate

    tempStartOfMonth = startOfMonth(tempDate)
    isWithinIntervals = isWithinInterval(tempDate, {
      start: startDate,
      end: endDate,
    })
  }
  months.sort(function(a, b) {
    return a - b
  })

  let monthRanges = null
  if (months.length > 1) {
    monthRanges = {
      start: months[0],
      end: months[months.length - 1],
    }
  } else {
    monthRanges = {
      start: months[0],
      end: months[0],
    }
  }
  //console.log('results', { monthRanges, dayRanges: days })
  return { monthRanges, dayRanges: days }
}

export const fetchMetrics = (dateRange, type) => {
  return (dispatch, getState) => {
    const useRealtimeUpdates = getState().config.updateRealtime
    if (typeof dateRange === 'undefined')
      dateRange = getState().filters.dateFilters
    const timezoneOffset = getState().filters.timezoneOffset
    const metricsRef = db.collectionGroup(`metrics`)
    const startDate = new Date(dateRange.start)
    let endDate = new Date(dateRange.end)

    const queryRanges = getQuery(startDate, endDate, type)

    const sameDay = dateRange.end.startsWith(dateRange.start.slice(0, 10))

    // If metrics are updated on realtime, change the date filter to load data until yesterday, today's data will be handled via realtime snapshots
    if (useRealtimeUpdates && !sameDay) {
      endDate = subDays(endDate, 1)
    }

    dispatch(fetchMetricsStart())
    metricsRef
      .where('date', '>', startDate)
      .where('date', '<', endDate)
      .get()
      .then(querySnapshot => {
        let fetchedMetrics = []
        querySnapshot.forEach(doc => {
          fetchedMetrics.push({ ...doc.data(), id: doc.id })
        })

        dispatch(fetchMetricsSuccess(fetchedMetrics))

        if (useRealtimeUpdates) {
          const dateWithProjectTimezone = getUTCDate(new Date(), timezoneOffset)
          const dateKey = format(dateWithProjectTimezone, 'MM-dd-yyyy')

          // Load data from today and continue listening for changes
          const unsubscribeMetrics = metricsRef.doc(dateKey).onSnapshot(doc => {
            const metric = doc.data()
            if (metric) dispatch(updateMetrics(metric, sameDay))
          })

          dispatch(storeMetricsSubscription(unsubscribeMetrics))
        }
      })
      .catch(err => {
        dispatch(fetchMetricsFail(err))
      })
  }
}

export const fetchMetricsSuccess = metrics => {
  return dispatch => {
    // Retrieve intents & support requests from daily metrics

    // Create intents & support requests dictionary with counters for occurrences & sessions
    let intents = {},
      supportRequests = {},
      feedback = { helpful: {}, notHelpful: {}, positive: 0, negative: 0 }
    // Loop through metrics per day
    for (let metric of metrics) {
      // Intents
      const dateIntents = metric.intents
      for (let dateIntent of dateIntents) {
        let currIntent = intents[`${dateIntent.id}`]
        if (currIntent) {
          currIntent.occurrences =
            currIntent.occurrences + dateIntent.occurrences
          currIntent.sessions = currIntent.sessions + dateIntent.sessions
        } else
          intents[`${dateIntent.id}`] = {
            name: `${dateIntent.name}`,
            occurrences: dateIntent.occurrences,
            sessions: dateIntent.sessions,
          }
      }
      // Support requests
      const dateSupportRequests = metric.supportRequests
      if (dateSupportRequests) {
        for (let dateRequest of dateSupportRequests) {
          const supportId = dateRequest.name.replace(/\s+/g, '-')
          let currRequest = supportRequests[`${supportId}`]
          if (currRequest) {
            currRequest.occurrences =
              currRequest.occurrences + dateRequest.occurrences
          } else
            supportRequests[`${supportId}`] = {
              name: `${dateRequest.name}`,
              occurrences: dateRequest.occurrences,
            }
        }
      }
      // Feedback
      const feedbackEntry = metric.feedback
      if (feedbackEntry) {
        // Add up totals
        feedback.positive = feedback.positive + feedbackEntry.positive
        feedback.negative = feedback.negative + feedbackEntry.negative
        // Count through helpful feedback
        for (let helpfulFeedback of feedbackEntry.helpful) {
          const helpfulFeedbackId = helpfulFeedback.name.replace(/\s+/g, '-')
          let currFeedback = feedback.helpful[`${helpfulFeedbackId}`]
          if (currFeedback) {
            currFeedback.occurrences =
              currFeedback.occurrences + helpfulFeedback.occurrences
          } else
            feedback.helpful[`${helpfulFeedbackId}`] = {
              name: `${helpfulFeedback.name}`,
              occurrences: helpfulFeedback.occurrences,
            }
        }
        // Count through not-helpful feedback
        for (let notHelpfulFeedback of feedbackEntry.notHelpful) {
          const notHelpfulFeedbackId = notHelpfulFeedback.name.replace(
            /\s+/g,
            '-'
          )
          let currFeedback = feedback.notHelpful[`${notHelpfulFeedbackId}`]
          if (currFeedback) {
            currFeedback.occurrences =
              currFeedback.occurrences + notHelpfulFeedback.occurrences
          } else
            feedback.notHelpful[`${notHelpfulFeedbackId}`] = {
              name: `${notHelpfulFeedback.name}`,
              occurrences: notHelpfulFeedback.occurrences,
            }
        }
      }
    }
    // Feedback contains helpful & non helpful data, send only positive feedback
    const feedbackFiltered = filterFeedback('positive', feedback)

    // Convert dictionary to array of objects (add ids)
    intents = Object.keys(intents).map(key => ({
      ...intents[key],
      id: key,
    }))
    supportRequests = Object.keys(supportRequests).map(key => ({
      ...supportRequests[key],
    }))

    dispatch({
      type: actionTypes.FETCH_METRICS_SUCCESS,
      intents: intents,
      supportRequests: supportRequests,
      feedback: feedback,
      feedbackSelected: 'positive',
      feedbackFiltered: feedbackFiltered,
      pastIntents: intents,
      pastSupportRequests: [...supportRequests],
      pastFeedback: { ...feedback },
    })
  }
}

export const fetchMetricsFail = error => {
  console.log(error)
  return {
    type: actionTypes.FETCH_METRICS_FAIL,
    error: error,
  }
}

export const fetchMetricsStart = () => {
  return {
    type: actionTypes.FETCH_METRICS_START,
  }
}

const filterFeedback = (type, feedback) => {
  if (type === 'positive') {
    feedback = {
      details: Object.keys(feedback.helpful).map(key => ({
        ...feedback.helpful[key],
      })),
      total: feedback.positive,
    }
  } else {
    feedback = {
      details: Object.keys(feedback.notHelpful).map(key => ({
        ...feedback.notHelpful[key],
      })),
      total: feedback.negative,
    }
  }
  return feedback
}

export const updateFeedbackType = feedbackType => {
  return (dispatch, getState) => {
    const feedbackFiltered = filterFeedback(
      feedbackType,
      getState().metrics.feedback
    )

    dispatch({
      type: actionTypes.UPDATE_FEEDBACK_TYPE,
      feedbackType: feedbackType,
      feedbackFiltered: feedbackFiltered,
    })
  }
}

// --------------------------------  R E A L T I M E   U P D A T E S  --------------------------------

export const updateMetrics = (metric, sameDay = false) => {
  return (dispatch, getState) => {
    const emptyFeedback = {
      helpful: {},
      notHelpful: {},
      positive: 0,
      negative: 0,
    }
    let { feedbackSelected } = getState().metrics

    let intents = getState().metrics.pastIntents.map(item => ({ ...item }))
    let supportRequests = getState().metrics.pastSupportRequests.map(item => ({
      ...item,
    }))
    // Deep clone feedback objects
    let feedback = JSON.parse(JSON.stringify(getState().metrics.pastFeedback))
    let feedbackFiltered = JSON.parse(
      JSON.stringify(getState().metrics.feedbackFiltered)
    )

    if (sameDay) {
      const metricFeedback = metric.feedback ? metric.feedback : emptyFeedback
      dispatch({
        type: actionTypes.UPDATE_METRICS,
        intents: metric.intents,
        supportRequests: metric.supportRequests,
        feedback: metricFeedback,
        feedbackSelected: feedbackSelected,
        feedbackFiltered: filterFeedback(feedbackSelected, metricFeedback),
      })
    } else {
      // Intents
      const dateIntents = metric.intents
      for (let dateIntent of dateIntents) {
        let currIntent = intents.filter(i => i.id === dateIntent.id)[0]
        if (currIntent) {
          currIntent.occurrences =
            currIntent.occurrences + dateIntent.occurrences
          currIntent.sessions = currIntent.sessions + dateIntent.sessions
        } else
          intents.push({
            id: dateIntent.id,
            name: `${dateIntent.name}`,
            occurrences: dateIntent.occurrences,
            sessions: dateIntent.sessions,
          })
      }
      // Support requests
      const dateSupportRequests = metric.supportRequests
      if (dateSupportRequests) {
        for (let dateRequest of dateSupportRequests) {
          //const supportId = dateRequest.name.replace(/\s+/g, '-')
          let currRequest = supportRequests.filter(
            i => i.name === dateRequest.name
          )[0]
          if (currRequest) {
            currRequest.occurrences =
              currRequest.occurrences + dateRequest.occurrences
          } else
            supportRequests.push({
              name: `${dateRequest.name}`,
              occurrences: dateRequest.occurrences,
            })
        }
      }
      // Feedback
      const feedbackEntry = metric.feedback
      if (feedbackEntry) {
        // Add up totals
        feedback.positive = feedback.positive + feedbackEntry.positive
        feedback.negative = feedback.negative + feedbackEntry.negative
        // Count through helpful feedback
        for (let helpfulFeedback of feedbackEntry.helpful) {
          const helpfulFeedbackId = helpfulFeedback.name.replace(/\s+/g, '-')
          let currFeedback = feedback.helpful[`${helpfulFeedbackId}`]
          if (currFeedback) {
            currFeedback.occurrences =
              currFeedback.occurrences + helpfulFeedback.occurrences
          } else
            feedback.helpful[`${helpfulFeedbackId}`] = {
              name: `${helpfulFeedback.name}`,
              occurrences: helpfulFeedback.occurrences,
            }
        }
        // Count through not-helpful feedback
        for (let notHelpfulFeedback of feedbackEntry.notHelpful) {
          const notHelpfulFeedbackId = notHelpfulFeedback.name.replace(
            /\s+/g,
            '-'
          )
          let currFeedback = feedback.notHelpful[`${notHelpfulFeedbackId}`]
          if (currFeedback) {
            currFeedback.occurrences =
              currFeedback.occurrences + notHelpfulFeedback.occurrences
          } else
            feedback.notHelpful[`${notHelpfulFeedbackId}`] = {
              name: `${notHelpfulFeedback.name}`,
              occurrences: notHelpfulFeedback.occurrences,
            }
        }
        // Feedback contains helpful & non helpful data, send only positive feedback
        feedbackFiltered = filterFeedback(feedbackSelected, feedback)
      }

      dispatch({
        type: actionTypes.UPDATE_METRICS,
        intents: intents,
        supportRequests: supportRequests,
        feedback: feedback,
        feedbackSelected: feedbackSelected,
        feedbackFiltered: feedbackFiltered,
      })
    }
  }
}
