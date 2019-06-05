import * as actionTypes from '../actions/actionTypes'
import { fetchConversations } from './conversationActions'
import { fetchMetrics } from './metricActions'
import { updateProjectColor } from './configActions'
import randomColor from 'randomcolor'
import { format, startOfDay, endOfDay, subDays } from 'date-fns'

const formatDate = date => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")

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

  return dispatch => {
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
    // Get projects settings based on the given context
    if (projects.length === 0) {
      projects = getState().config.projects
    }

    const currProject = projects.filter(p => p.name === projectName)[0]
    if (currProject) {
      const dateFilters = getState().filters.dateFilters
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
      })
    } else {
      dispatch({
        type: actionTypes.UPDATE_CONTEXT,
        context: context,
        mainColor: '',
        colors: [],
      })
    }
  }
}
