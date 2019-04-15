import { combineReducers } from 'redux'
import filters from './filtersReducer'
import metrics from './metricsReducer'
import conversations from './conversationsReducer'

const rootReducer = combineReducers({
  filters,
  metrics,
  conversations,
})

export default rootReducer
