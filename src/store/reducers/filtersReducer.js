import { UPDATE_FILTERS } from '../actions/actionTypes'
import { updateObject } from '../utility'

// Date FNS imports
const format = require('date-fns/format')
const startOfDay = require('date-fns/start_of_day')
const endOfDay = require('date-fns/end_of_day')

const formatDate = date => format(date, 'YYYY-MM-DDTHH:mm:ssZ')

const getDateRange = date => {
  const startOfToday = formatDate(startOfDay(date))
  const endOfToday = formatDate(endOfDay(date))
  return { start: startOfToday, end: endOfToday }
}

const initialState = {
  // Set Today filter by default
  filterLabel: 'Today',
  dateFilters: getDateRange(new Date()),
}

const reducer = (state = initialState, action) => {
  if (action.type === UPDATE_FILTERS) {
    return updateObject(state, {
      filterLabel: action.filterLabel,
      dateFilters: action.dateFilters,
    })
  }
  return state
}

export default reducer
