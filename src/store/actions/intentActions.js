import * as actionTypes from '../actions/actionTypes'
import db from '../../Firebase'

export const fetchIntents = dateRange => {
  return (dispatch, getState) => {
    if (typeof dateRange === 'undefined')
      dateRange = getState().filters.dateFilters
    const metricsRef = db.collection('metrics')

    dispatch(fetchIntentsStart())
    metricsRef
      .where('date', '>', new Date(dateRange.start))
      .where('date', '<', new Date(dateRange.end))
      .get()
      .then(querySnapshot => {
        let fetchedMetrics = []
        querySnapshot.forEach(doc => {
          fetchedMetrics.push({ ...doc.data(), id: doc.id })
        })

        dispatch(fetchIntentsSuccess(fetchedMetrics))
      })
      .catch(err => {
        dispatch(fetchIntentsFail(err))
      })
  }
}

export const fetchIntentsSuccess = metrics => {
  // Retrieve intents from daily metrics

  // Create intents dictionary with counters for occurrences & sessions
  let intents = {}
  // Loop through metrics per day
  for (let metric of metrics) {
    const dateIntents = metric.intents
    for (let dateIntent of dateIntents) {
      let currIntent = intents[`${dateIntent.id}`]
      if (currIntent) {
        currIntent.occurrences = currIntent.occurrences + dateIntent.occurrences
        currIntent.sessions = currIntent.sessions + dateIntent.sessions
      } else
        intents[`${dateIntent.id}`] = {
          name: `${dateIntent.name}`,
          occurrences: dateIntent.occurrences,
          sessions: dateIntent.sessions,
        }
    }
  }
  // Convert dictionary to array of objects
  intents = Object.keys(intents).map(i => intents[i])

  return {
    type: actionTypes.FETCH_INTENTS_SUCCESS,
    intents: intents,
  }
}

export const fetchIntentsFail = error => {
  console.log(error)
  return {
    type: actionTypes.FETCH_INTENTS_FAIL,
    error: error,
  }
}

export const fetchIntentsStart = () => {
  return {
    type: actionTypes.FETCH_INTENTS_START,
  }
}
