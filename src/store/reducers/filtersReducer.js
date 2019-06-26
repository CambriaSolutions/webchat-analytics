import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  // Set Today filter by default
  filterLabel: 'Last 7 days',
  dateFilters: {
    start: null,
    end: null,
  },
  colors: [],
  mainColor: '#8681A6',
  context: '',
  timezoneOffset: -7,
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
        timezoneOffset: action.timezoneOffset,
        dateFilters: action.dateFilters,
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
