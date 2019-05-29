import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  snackbarOpen: false,
  snackbarMessage: '',
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
    case actionTypes.FETCH_PROJECTS_START:
      return fetchProjectsStart(state, action)
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return fetchProjectsSuccess(state, action)
    case actionTypes.FETCH_PROJECTS_FAIL:
      return fetchProjectsFail(state, action)
    case actionTypes.CLOSE_SNACKBAR:
      return updateObject(state, {
        snackbarOpen: false,
      })
    case actionTypes.SHOW_SNACKBAR:
      return updateObject(state, {
        snackbarOpen: true,
        snackbarMessage: action.message,
      })
    default:
      return state
  }
}

export default reducer
