import * as actionTypes from '../actions/actionTypes'

import { subDays } from 'date-fns'

const initialState = {
  subjectMatters: [],
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

const fetchSubjectMattersStart = (state) => {
  return { ...state, loading: true }
}

const fetchSubjectMattersSuccess = (state, action) => {
  return {
    ...state,
    subjectMatters: action.subjectMatters,
    loading: false,
  }
}

const fetchSubjectMattersFail = (state) => {
  return { ...state, loading: false }
}

const fetchIntentDetailsStart = (state) => {
  return { ...state, loadingIntentDetails: true }
}

const fetchIntentDetailsSuccess = (state, action) => {
  return {
    ...state,
    intentDetails: action.intentDetails,
    loadingIntentDetails: false,
  }
}

const fetchIntentDetailsFail = (state) => {
  return { ...state, loadingIntentDetails: false }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Metrics
    case actionTypes.FETCH_SUBJECT_MATTERS_START:
      return fetchSubjectMattersStart(state)
    case actionTypes.FETCH_SUBJECT_MATTERS_SUCCESS:
      return fetchSubjectMattersSuccess(state, action)
    case actionTypes.FETCH_SUBJECT_MATTERS_FAIL:
      return fetchSubjectMattersFail(state)
    // Intent Details
    case actionTypes.FETCH_INTENT_DETAILS_START:
      return fetchIntentDetailsStart(state)
    case actionTypes.FETCH_INTENT_DETAILS_SUCCESS:
      return fetchIntentDetailsSuccess(state, action)
    case actionTypes.FETCH_INTENT_DETAILS_FAIL:
      return fetchIntentDetailsFail(state)
    // Config settings
    case actionTypes.UPDATE_EXPORT_DATE:
      return {
        ...state,
        downloadExportDate: action.downloadExportDate,
      }
    case actionTypes.TOGGLE_SETTINGS:
      return {
        ...state,
        showSettings: action.showSettings,
      }
    case actionTypes.TOGGLE_INTENT_MODAL:
      return {
        ...state,
        showIntentModal: action.showIntentModal,
      }
    case actionTypes.TOGGLE_CONFIG_LOADING:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpen: false,
      }
    case actionTypes.SHOW_SNACKBAR:
      return {
        ...state,
        snackbarOpen: true,
        snackbarMessage: action.message,
      }
    default:
      return state
  }
}

export default reducer
