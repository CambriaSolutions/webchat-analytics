import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  unsubscribeConversations: null,
  unsubscribeMetrics: null,
  currentConversations: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_REALTIME_SUBSCRIPTIONS:
      return updateObject(state, {
        unsubscribeConversations: null,
        unsubscribeMetrics: null,
        updatedConversations: [],
        updatedMetrics: [],
      })
    case actionTypes.UPDATE_REALTIME_CONVERSATIONS:
      return updateObject(state, {
        currentConversations: action.currentConversations,
      })
    case actionTypes.STORE_CONVERSATIONS_SUBSCRIPTION:
      return updateObject(state, {
        unsubscribeConversations: action.unsubscribeConversations,
      })
    case actionTypes.STORE_METRICS_SUBSCRIPTION:
      return updateObject(state, {
        unsubscribeMetrics: action.unsubscribeMetrics,
      })
    default:
      return state
  }
}

export default reducer
