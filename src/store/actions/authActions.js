import * as actionTypes from '../actions/actionTypes'
import { authRef } from '../../Firebase'
import { toggleSettings } from './filterActions'
import { fetchProjects, showSnackbar } from './configActions'

export const fetchUser = () => dispatch => {
  authRef.onAuthStateChanged(user => {
    if (user) {
      // Retrieve projects & permissions attached to this user
      dispatch(fetchProjects(user))
      /*dispatch({
        type: actionTypes.FETCH_USER,
        user: user,
        isLoggedIn: true,
      })*/
    }
  })
}

export const signIn = (username, pwd) => {
  return dispatch => {
    dispatch({
      type: actionTypes.SIGNIN_START,
    })
    authRef
      .signInWithEmailAndPassword(username, pwd)
      .then(result => {
        // Retrieve projects & permissions attached to this user
        dispatch(fetchProjects(result.user))
      })
      .catch(error => {
        dispatch({
          type: actionTypes.SIGNIN_FAIL,
        })
        dispatch(showSnackbar(error.message))
      })
  }
}

export const completeSignIn = user => {
  return {
    type: actionTypes.SIGNIN_SUCCESS,
    user: user,
  }
}

export const signOut = () => dispatch => {
  authRef
    .signOut()
    .then(() => {
      dispatch(toggleSettings(false))
      dispatch({
        type: actionTypes.SIGNOUT_USER,
      })
    })
    .catch(error => {
      console.log(error)
    })
}
