import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
//import randomColor from 'randomcolor'
import { format, endOfDay, subDays } from 'date-fns'

const formatDate = date => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")

// Shuffles array in place
/*const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}*/

/*const COLORS = [
  '#C2CDFC',
  '#756BED',
  '#4158D0',
  '#387EB5',
  '#6B53DD',
  '#C6B3E6',
  '#90A0E7',
  '#7067AB',
  '#8681A6',
]*/

const initialState = {
  // Set Today filter by default
  filterLabel: 'Last 7 days',
  dateFilters: {
    start: formatDate(subDays(new Date(), 7)),
    end: formatDate(endOfDay(new Date())),
  },
  downloadExportDate: new Date(),
  colors: [],
  mainColor: '#8681A6',
  context: '',
  showSettings: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTERS:
      return updateObject(state, {
        filterLabel: action.filterLabel,
        dateFilters: action.dateFilters,
      })
    case actionTypes.UPDATE_CONTEXT:
      return updateObject(state, {
        context: action.context,
        mainColor: action.mainColor,
        colors: action.colors,
      })
    case actionTypes.UPDATE_EXPORT_DATE:
      return updateObject(state, {
        downloadExportDate: action.downloadExportDate,
      })
    case actionTypes.TOGGLE_SETTINGS:
      return updateObject(state, {
        showSettings: action.showSettings,
      })
    default:
      return state
  }
}

export default reducer
