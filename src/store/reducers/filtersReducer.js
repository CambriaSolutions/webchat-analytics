import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  // Set Today filter by default
  filterLabel: 'Last 7 days',
  dateFilters: {
    start: null,
    end: null,
  },
  isCustomDateRange: false,
  colors: [],
  mainColor: '#8681A6',
  context: '',
  timezoneOffset: -7, // Offset Firebase
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTERS:
      return updateObject(state, {
        filterLabel: action.filterLabel,
        dateFilters: action.dateFilters,
        isCustomDateRange: action.isCustomDateRange,
      })

    case actionTypes.UPDATE_CONTEXT:
      return updateObject(state, {
        context: action.context,
        mainColor: action.mainColor,
        colors: action.colors,
        timezoneOffset: action.timezoneOffset,
        dateFilters: action.dateFilters,
      })

    case actionTypes.UPDATE_FILTER_LABEL:
      return updateObject(state, {
        filterLabel: action.filterLabel,
      })

    case actionTypes.UPDATE_MAIN_COLOR:
      return updateObject(state, {
        mainColor: action.mainColor,
        colors: action.colors,
      })
    // case actionTypes.SET_IS_CUSTOM_DATE_RANGE:
    //   return updateObject(state, {
    //     isCustomDateRange: action.isCustomDateRange,
    //   })
    case actionTypes.SET_IS_CUSTOM_DATE_RANGE:
      return { ...state, isCustomDateRange: action.isCustomDateRange }
    default:
      return state
  }
}

export default reducer
