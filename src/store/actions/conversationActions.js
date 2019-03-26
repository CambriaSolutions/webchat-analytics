import * as actionTypes from '../actions/actionTypes'
import db from '../../Firebase'

export const fetchConversations = dateRange => {
  return (dispatch, getState) => {
    if (typeof dateRange === 'undefined')
      dateRange = getState().filters.dateFilters
    const conversationsRef = db.collection('conversations')

    dispatch(fetchConversationsStart())
    conversationsRef
      .where('createdAt', '>', new Date(dateRange.start))
      .where('createdAt', '<', new Date(dateRange.end))
      .get()
      .then(querySnapshot => {
        let fetchedConversations = []
        querySnapshot.forEach(doc => {
          fetchedConversations.push({ ...doc.data(), id: doc.id })
        })

        dispatch(fetchConversationsSuccess(fetchedConversations))
      })
      .catch(err => {
        dispatch(fetchCoversationsFail(err))
      })
  }
}

export const fetchConversationsSuccess = conversations => {
  // Retrieve metrics from conversations

  // Get sum of all conversations duration
  const durationTotal = conversations.reduce((accumulator, conversation) => {
    return conversation.duration
      ? accumulator + conversation.duration
      : accumulator
  }, 0)

  // Get amount of conversations that have a support request
  const supportRequests = conversations.reduce((accumulator, conversation) => {
    return conversation.hasSupportRequest ? accumulator + 1 : accumulator
  }, 0)

  // Create dictionary with exit intents counters
  let exitIntents = {}
  for (let conversation of conversations) {
    const lastIntent = conversation.lastIntent
    let currExitIntent = exitIntents[`${lastIntent.id}`]
    if (currExitIntent) currExitIntent.exits = currExitIntent.exits + 1
    else
      exitIntents[`${lastIntent.id}`] = {
        name: `${lastIntent.name}`,
        exits: 1,
      }
  }
  // Convert dictionary to array of objects
  exitIntents = Object.keys(exitIntents).map(key => ({
    ...exitIntents[key],
    id: key,
  }))

  return {
    type: actionTypes.FETCH_CONVERSATIONS_SUCCESS,
    conversations: conversations,
    conversationsTotal: conversations.length,
    durationTotal: durationTotal,
    supportRequests: supportRequests,
    exitIntents: exitIntents,
  }
}

export const fetchCoversationsFail = error => {
  console.log(error)
  return {
    type: actionTypes.FETCH_CONVERSATIONS_FAIL,
    error: error,
  }
}

export const fetchConversationsStart = () => {
  return {
    type: actionTypes.FETCH_CONVERSATIONS_START,
  }
}
