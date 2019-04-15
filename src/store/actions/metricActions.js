import * as actionTypes from './actionTypes'
import db from '../../Firebase'

export const fetchMetrics = dateRange => {
  return (dispatch, getState) => {
    if (typeof dateRange === 'undefined')
      dateRange = getState().filters.dateFilters
    const metricsRef = db.collection('metrics')

    dispatch(fetchMetricsStart())
    metricsRef
      .where('date', '>', new Date(dateRange.start))
      .where('date', '<', new Date(dateRange.end))
      .get()
      .then(querySnapshot => {
        let fetchedMetrics = []
        querySnapshot.forEach(doc => {
          fetchedMetrics.push({ ...doc.data(), id: doc.id })
        })

        dispatch(fetchMetricsSuccess(fetchedMetrics))
      })
      .catch(err => {
        dispatch(fetchMetricsFail(err))
      })
  }
}

export const fetchMetricsSuccess = metrics => {
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
        currIntent.occurrences = currIntent.occurrences + dateIntent.occurrences
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

  return {
    type: actionTypes.FETCH_METRICS_SUCCESS,
    intents: intents,
    supportRequests: supportRequests,
    feedback: feedback,
    feedbackSelected: 'positive',
    feedbackFiltered: feedbackFiltered,
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
