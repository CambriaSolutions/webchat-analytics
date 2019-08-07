import * as actionTypes from '../actions/actionTypes'
import { fetchConversations } from './conversationActions'
import { fetchMetrics } from './metricActions'
import { updateProjectColor } from './configActions'
import { clearSubscriptions } from './realtimeActions'
import randomColor from 'randomcolor'
import { format, startOfDay, endOfDay, subDays, subMonths } from 'date-fns'
import { getUTCDate } from '../../common/helper'

const formatDate = (date, timezoneOffset = null) => {
  if (timezoneOffset) {
    const offset =
      (timezoneOffset >= 0 ? '+' : '-') +
      ('0' + Math.abs(timezoneOffset)).slice(-2)
    return format(date, `yyyy-MM-dd'T'HH:mm:ss.SSS'${offset}:00'`)
  } else return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")
}

const getDateRange = (date, timezoneOffset = null) => {
  const startOfToday = formatDate(startOfDay(date), timezoneOffset)
  const endOfToday = formatDate(endOfDay(date), timezoneOffset)
  return { start: startOfToday, end: endOfToday }
}

// Set date range based on filter selected
const getDateFilters = (newFilter, timezoneOffset = -7) => {
  let dateRange = {}
  const today = getUTCDate(new Date(), timezoneOffset)

  switch (newFilter) {
    case 'Yesterday':
      dateRange = getDateRange(subDays(today, 1), timezoneOffset)
      break
    case 'Last 7 days':
      dateRange = {
        start: formatDate(startOfDay(subDays(today, 7)), timezoneOffset),
        end: formatDate(endOfDay(today), timezoneOffset),
      }
      break
    case 'Last 30 days':
      dateRange = {
        start: formatDate(startOfDay(subDays(today, 30)), timezoneOffset),
        end: formatDate(endOfDay(today), timezoneOffset),
      }
      break
    case 'Last 60 days':
      dateRange = {
        start: formatDate(startOfDay(subDays(today, 60)), timezoneOffset),
        end: formatDate(endOfDay(today), timezoneOffset),
      }
      break
    case 'Last 90 days':
      dateRange = {
        start: formatDate(startOfDay(subDays(today, 90)), timezoneOffset),
        end: formatDate(endOfDay(today), timezoneOffset),
      }
      break
    case 'Last 12 months':
      dateRange = {
        start: formatDate(startOfDay(subMonths(today, 12)), timezoneOffset),
        end: formatDate(endOfDay(today), timezoneOffset),
      }
      break

    case 'Today':
    default:
      dateRange = getDateRange(today, timezoneOffset)
  }

  return dateRange
}

// Waiting on client to determine if they want to either simply include
// last month, last quarter, YTD, or custom ranges
export const updateFilters = event => {
  return (dispatch, getState) => {
    const offset = getState().filters.timezoneOffset

    // If the selected filter doesn't require a date picker,
    // format the date filter and dispatch data retrieval actions
    if (event.target.value.toLowerCase() !== 'custom') {
      const dateFilters = getDateFilters(event.target.value, offset)
      dispatch(clearSubscriptions())
      dispatch(fetchConversations(dateFilters))
      dispatch(fetchMetrics(dateFilters))

      dispatch({
        type: actionTypes.UPDATE_FILTERS,
        filterLabel: event.target.value,
        dateFilters: dateFilters,
      })
      dispatch({
        type: actionTypes.SET_IS_CUSTOM_DATE_RANGE,
        isCustomDateRange: false,
      })
    } else {
      // The user has specified that they would like to select a custom
      // date range, so we enable the to and from date pickers
      dispatch({
        type: actionTypes.SET_IS_CUSTOM_DATE_RANGE,
        isCustomDateRange: true,
      })
      dispatch({
        type: actionTypes.UPDATE_FILTER_LABEL,
        filterLabel: 'Custom',
      })
      dispatch(toggleDateDialog(true))
    }
  }
}

export const updateFiltersWithRange = (startDate, endDate) => {
  return (dispatch, getState) => {
    const offset = getState().filters.timezoneOffset
    const utcStart = getUTCDate(startDate, offset)
    const utcEnd = getUTCDate(endDate, offset)

    const newDateFilters = {
      start: formatDate(endOfDay(utcStart), offset),
      end: formatDate(endOfDay(utcEnd), offset),
    }

    dispatch(fetchConversations(newDateFilters))
    dispatch(fetchMetrics(newDateFilters))

    dispatch({
      type: actionTypes.UPDATE_FILTERS,
      filterLabel: 'Custom',
      dateFilters: newDateFilters,
    })
    dispatch({
      type: actionTypes.SET_IS_CUSTOM_DATE_RANGE,
      isCustomDateRange: true,
    })
  }
}

export const setIsCustomDateRange = (isCustomDateRange = false) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SET_IS_CUSTOM_DATE_RANGE,
      isCustomDateRange,
    })
  }
}

export const toggleDateDialog = shouldOpen => {
  return dispatch => {
    dispatch({
      type: actionTypes.TOGGLE_DATE_DIALOG,
      shouldOpen,
    })
  }
}

export const updateMainColor = (newColor, updateDB = false) => {
  return (dispatch, getState) => {
    const COLORS = randomColor({
      count: 10,
      hue: newColor,
    })

    dispatch({
      type: actionTypes.UPDATE_MAIN_COLOR,
      mainColor: newColor,
      colors: COLORS,
    })
    if (updateDB) {
      dispatch(updateProjectColor(newColor))
    }
  }
}

// Change project/context and retrieve new metrics & conversations
export const updateContext = (projectName, projects = []) => {
  const context = `projects/${projectName}`

  return (dispatch, getState) => {
    dispatch(clearSubscriptions())
    // Get projects settings based on the given context
    if (projects.length === 0) {
      projects = getState().config.projects
    }

    const currProject = projects.filter(p => p.name === projectName)[0]
    if (currProject) {
      const dateFilters = getDateFilters(
        getState().filters.filterLabel,
        currProject.timezone.offset
      )

      dispatch(fetchConversations(dateFilters, context))
      dispatch(fetchMetrics(dateFilters, context))

      const COLORS = randomColor({
        count: 10,
        hue: currProject.primaryColor,
      })

      dispatch({
        type: actionTypes.UPDATE_CONTEXT,
        context: context,
        mainColor: currProject.primaryColor,
        colors: COLORS,
        timezoneOffset: currProject.timezone.offset,
        dateFilters: dateFilters,
      })
    } else {
      dispatch({
        type: actionTypes.UPDATE_CONTEXT,
        context: context,
        mainColor: '',
        colors: [],
        timezoneOffset: -7,
        dateFilters: getState().filters.dateFilters,
      })
    }
  }
}
