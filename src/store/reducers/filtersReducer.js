import { UPDATE_FILTERS, UPDATE_CONTEXT } from '../actions/actionTypes'
import { updateObject } from '../utility'
//import randomColor from 'randomcolor'

// Date FNS imports
const format = require('date-fns/format')
const endOfDay = require('date-fns/end_of_day')
const subDays = require('date-fns/sub_days')

const formatDate = date => format(date, 'YYYY-MM-DDTHH:mm:ssZ')

// Shuffles array in place
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const COLORS = [
  '#C2CDFC',
  '#756BED',
  '#4158D0',
  '#387EB5',
  '#6B53DD',
  '#C6B3E6',
  '#90A0E7',
  '#7067AB',
  '#8681A6',
]
/*const COLORS = randomColor({
  count: 10,
  hue: 'blue',
})*/

const initialState = {
  // Set Today filter by default
  filterLabel: 'Last 7 days',
  dateFilters: {
    start: formatDate(subDays(new Date(), 7)),
    end: formatDate(endOfDay(new Date())),
  },
  colors: shuffle(COLORS),
  context: 'projects/gen',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTERS:
      return updateObject(state, {
        filterLabel: action.filterLabel,
        dateFilters: action.dateFilters,
        //colors: action.colors,
      })
    case UPDATE_CONTEXT:
      return updateObject(state, {
        context: action.context,
      })
    default:
      return state
  }
}

export default reducer
