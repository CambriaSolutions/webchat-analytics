import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  projects: [],
  defaultProject: '',
  loading: false,
  downloadExportDate: new Date(),
  showSettings: false,
  snackbarOpen: false,
  snackbarMessage: '',
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
    case actionTypes.UPDATE_EXPORT_DATE:
      return updateObject(state, {
        downloadExportDate: action.downloadExportDate,
      })
    case actionTypes.UPDATE_DEFAULT_PROJECT:
      return updateObject(state, {
        defaultProject: action.defaultProject,
      })
    case actionTypes.TOGGLE_SETTINGS:
      return updateObject(state, {
        showSettings: action.showSettings,
      })
    case actionTypes.TOGGLE_CONFIG_LOADING:
      return updateObject(state, {
        loading: action.loading,
      })
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