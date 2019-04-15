import { UPDATE_FILTERS } from '../actions/actionTypes'
import { updateObject } from '../utility'
//import randomColor from 'randomcolor'

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

// Shuffles array in place
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const COLORS = ['#C2CDFC', '#756BED', '#4158D0', '#387EB5', '#6B53DD']
/*const COLORS = randomColor({
  count: 10,
  hue: 'blue',
})*/

const initialState = {
  // Set Today filter by default
  filterLabel: 'Today',
  dateFilters: getDateRange(new Date()),
  colors: shuffle(COLORS),
}

const reducer = (state = initialState, action) => {
  if (action.type === UPDATE_FILTERS) {
    return updateObject(state, {
      filterLabel: action.filterLabel,
      dateFilters: action.dateFilters,
      //colors: action.colors,
    })
  }
  return state
}

export default reducer
