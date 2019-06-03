import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  intents: [], // { id: '1234', name: 'support', occurrences: 3, sessions: 9 }
  supportRequests: [],
  loading: false,
  feedback: [],
  feedbackFiltered: [],
  feedbackSelected: 'positive',
}

const fetchMetricsStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchMetricsSuccess = (state, action) => {
  return updateObject(state, {
    intents: action.intents,
    supportRequests: action.supportRequests,
    feedback: action.feedback,
    feedbackSelected: action.feedbackSelected,
    feedbackFiltered: action.feedbackFiltered,
    loading: false,
  })
}

const fetchMetricsFail = (state, action) => {
  return updateObject(state, { loading: false })
}

const updateFeedbackType = (state, action) => {
  return updateObject(state, {
    feedbackSelected: action.feedbackType,
    feedbackFiltered: action.feedbackFiltered,
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_METRICS_START:
      return fetchMetricsStart(state, action)
    case actionTypes.FETCH_METRICS_SUCCESS:
      return fetchMetricsSuccess(state, action)
    case actionTypes.FETCH_METRICS_FAIL:
      return fetchMetricsFail(state, action)
    case actionTypes.UPDATE_FEEDBACK_TYPE:
      return updateFeedbackType(state, action)
    default:
      return state
  }
}

export default reducer