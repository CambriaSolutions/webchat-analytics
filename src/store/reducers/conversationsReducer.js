import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  conversationsTotal: 0,
  durationTotal: 0,
  exitIntents: [], // { id: '1234', name: 'welcome', exits: 2 }
  supportRequests: 0,
  allConversations: [],
  loading: false,
}

const fetchConversationsStart = (state, action) => {
  return updateObject(state, { loading: true })
}

const fetchConversationsSuccess = (state, action) => {
  return updateObject(state, {
    allConversations: action.conversations,
    conversationsTotal: action.conversationsTotal,
    durationTotal: action.durationTotal,
    supportRequests: action.supportRequests,
    exitIntents: action.exitIntents,
    loading: false,
  })
}

const fetchConversationsFail = (state, action) => {
  return updateObject(state, { loading: false })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONVERSATIONS_START:
      return fetchConversationsStart(state, action)
    case actionTypes.FETCH_CONVERSATIONS_SUCCESS:
      return fetchConversationsSuccess(state, action)
    case actionTypes.FETCH_CONVERSATIONS_FAIL:
      return fetchConversationsFail(state, action)
    default:
      return state
  }
}

export default reducer
