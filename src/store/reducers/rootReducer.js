import { combineReducers } from 'redux'
import filters from './filtersReducer'
import intents from './intentsReducer'
import conversations from './conversationsReducer'

const rootReducer = combineReducers({
  filters,
  intents,
  conversations,
})

export default rootReducer
