import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return updateObject(state, {
        user: action.user,
        isLoggedIn: action.isLoggedIn,
      })
    case actionTypes.SIGNIN_START:
      return updateObject(state, {
        loading: true,
      })
    case actionTypes.SIGNIN_FAIL:
      return updateObject(state, {
        loading: false,
      })
    case actionTypes.SIGNIN_SUCCESS:
      return updateObject(state, {
        isLoggedIn: true,
        user: action.user,
        loading: false,
      })
    case actionTypes.SIGNOUT_USER:
      return updateObject(state, {
        isLoggedIn: false,
        user: null,
      })
    default:
      return state
  }
}

export default reducer
