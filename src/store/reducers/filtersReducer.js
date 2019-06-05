import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
//import randomColor from 'randomcolor'
import { format, endOfDay, subDays } from 'date-fns'

const formatDate = date => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")

const initialState = {
  // Set Today filter by default
  filterLabel: 'Last 7 days',
  dateFilters: {
    start: formatDate(subDays(new Date(), 7)),
    end: formatDate(endOfDay(new Date())),
  },
  colors: [],
  mainColor: '#8681A6',
  context: '',
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
    case actionTypes.UPDATE_MAIN_COLOR:
      return updateObject(state, {
        mainColor: action.mainColor,
        colors: action.colors,
      })
    default:
      return state
  }
}

export default reducer
