import * as actionTypes from '../actions/actionTypes'
import { fetchConversations } from './conversationActions'
import { fetchMetrics } from './metricActions'
//import randomColor from 'randomcolor'

// Date FNS imports
const format = require('date-fns/format')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')
const subDays = require('date-fns/sub_days')

const formatDate = date => format(date, 'YYYY-MM-DDTHH:mm:ssZ')

const getDateRange = date => {
  const startOfToday = formatDate(startOfDay(date))
  const endOfToday = formatDate(endOfDay(date))
  return { start: startOfToday, end: endOfToday }
}

// Set date range based on filter selected
const getDateFilters = newFilter => {
  let dateRange = {}
  const today = new Date()
  switch (newFilter) {
    case 'Yesterday':
      dateRange = getDateRange(subDays(today, 1))
      break
    case 'Last 7 days':
      dateRange = {
        start: formatDate(subDays(today, 7)),
        end: formatDate(endOfDay(today)),
      }
      break
    case 'Last 30 days':
      dateRange = {
        start: formatDate(subDays(today, 30)),
        end: formatDate(endOfDay(today)),
      }
      break
    case 'Today':
    default:
      dateRange = getDateRange(today)
  }
  return dateRange
}

export const updateFilters = event => {
  const dateFilters = getDateFilters(event.target.value)

  /*const COLORS = randomColor({
    count: 10,
    hue: 'blue',
  })*/

  return dispatch => {
    dispatch(fetchConversations(dateFilters))
    dispatch(fetchMetrics(dateFilters))

    dispatch({
      type: actionTypes.UPDATE_FILTERS,
      filterLabel: event.target.value,
      dateFilters: dateFilters,
      //colors: COLORS,
    })
  }
}

// Change project/context and retrieve new metrics & conversations
export const updateContext = event => {
  const context = `projects/${event.target.value}`

  return (dispatch, getState) => {
    const dateFilters = getState().filters.dateFilters
    dispatch(fetchConversations(dateFilters, context))
    dispatch(fetchMetrics(dateFilters, context))

    dispatch({
      type: actionTypes.UPDATE_CONTEXT,
      context: context,
    })
  }
}
