import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

import { subDays } from 'date-fns'

const initialState = {
  projects: [],
  defaultProject: '',
  loading: false,
  downloadExportDate: subDays(new Date(), 1),
  showSettings: false,
  snackbarOpen: false,
  snackbarMessage: '',
  intentDetails: [],
  loadingIntentDetails: false,
  showIntentModal: false,
  updateRealtime: true,
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

const fetchIntentDetailsStart = (state, action) => {
  return updateObject(state, { loadingIntentDetails: true })
}

const fetchIntentDetailsSuccess = (state, action) => {
  return updateObject(state, {
    intentDetails: action.intentDetails,
    loadingIntentDetails: false,
  })
}

const fetchIntentDetailsFail = (state, action) => {
  return updateObject(state, { loadingIntentDetails: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Projects
    case actionTypes.FETCH_PROJECTS_START:
      return fetchProjectsStart(state, action)
    case actionTypes.FETCH_PROJECTS_SUCCESS:
      return fetchProjectsSuccess(state, action)
    case actionTypes.FETCH_PROJECTS_FAIL:
      return fetchProjectsFail(state, action)
    // Intent Details
    case actionTypes.FETCH_INTENT_DETAILS_START:
      return fetchIntentDetailsStart(state, action)
    case actionTypes.FETCH_INTENT_DETAILS_SUCCESS:
      return fetchIntentDetailsSuccess(state, action)
    case actionTypes.FETCH_INTENT_DETAILS_FAIL:
      return fetchIntentDetailsFail(state, action)
    // Config settings
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
    case actionTypes.TOGGLE_INTENT_MODAL:
      return updateObject(state, {
        showIntentModal: action.showIntentModal,
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
