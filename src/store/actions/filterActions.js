import * as actionTypes from '../actions/actionTypes'
import { fetchConversations } from './conversationActions'
import { fetchMetrics } from './metricActions'
import { updateProjectColor } from './configActions'
import { clearSubscriptions } from './realtimeActions'
import randomColor from 'randomcolor'
import { format, startOfDay, endOfDay, subDays } from 'date-fns'
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
    case 'Today':
    default:
      dateRange = getDateRange(today, timezoneOffset)
  }

  return dateRange
}

export const updateFilters = event => {
  return (dispatch, getState) => {
    const offset = getState().filters.timezoneOffset
    const dateFilters = getDateFilters(event.target.value, offset)

    dispatch(clearSubscriptions())
    dispatch(fetchConversations(dateFilters))
    dispatch(fetchMetrics(dateFilters))

    dispatch({
      type: actionTypes.UPDATE_FILTERS,
      filterLabel: event.target.value,
      dateFilters: dateFilters,
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
