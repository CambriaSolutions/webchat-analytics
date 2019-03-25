import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  intents: [], // { id: '1234', name: 'support', occurrences: 3, sessions: 9 }
  loading: false,
}

const fetchIntentsStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchIntentsSuccess = (state, action) => {
  return updateObject(state, {
    intents: action.intents,
    loading: false,
  })
}

const fetchIntentsFail = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INTENTS_START:
      return fetchIntentsStart(state, action)
    case actionTypes.FETCH_INTENTS_SUCCESS:
      return fetchIntentsSuccess(state, action)
    case actionTypes.FETCH_INTENTS_FAIL:
      return fetchIntentsFail(state, action)
    default:
      return state
  }
}

export default reducer
