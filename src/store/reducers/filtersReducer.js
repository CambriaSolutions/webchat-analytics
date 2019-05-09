import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
//import randomColor from 'randomcolor'

// Date FNS imports
const format = require('date-fns/format')
const endOfDay = require('date-fns/end_of_day')
const subDays = require('date-fns/sub_days')

const formatDate = date => format(date, 'YYYY-MM-DDTHH:mm:ssZ')

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
  colors: [],
  mainColor: '#8681A6',
  context: '',
  projects: [],
  loading: false,
}

const fetchProjectsStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchProjectsSuccess = (state, action) => {
  return updateObject(state, {
    projects: action.projects,
    loading: false,
  })
}

const fetchProjectsFail = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FILTERS:
      return updateObject(state, {
        filterLabel: action.filterLabel,
        dateFilters: action.dateFilters,
      })
    case actionTypes.UPDATE_SETTINGS:
      return updateObject(state, {
        context: action.context,
        mainColor: action.mainColor,
        colors: action.colors,
      })
    case actionTypes.FETCH_PROJECTS_START:
      return fetchProjectsStart(state, action)
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return fetchProjectsSuccess(state, action)
    case actionTypes.FETCH_PROJECTS_FAIL:
      return fetchProjectsFail(state, action)
    default:
      return state
  }
}

export default reducer
