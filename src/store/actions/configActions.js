import * as actionTypes from '../actions/actionTypes'
import db from '../../Firebase'
import { updateContext } from './filterActions'
import { completeSignIn } from './authActions'

export const fetchProjects = user => {
  return (dispatch, getState) => {
    const userRef = db.collection(`users`).doc(user.uid)

    dispatch(fetchProjectsStart())
    userRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const userData = doc.data()
          user.defaultProject = userData.defaultProject

          const settingsRef = db.collection(`settings`)

          dispatch(fetchProjectsStart())
          settingsRef
            .get()
            .then(querySnapshot => {
              let fetchedProjects = []
              querySnapshot.forEach(doc => {
                // If user is admin add all the projects
                const projectData = doc.data()
                if (
                  userData.admin ||
                  userData.projects.includes(projectData.name)
                ) {
                  fetchedProjects.push(projectData)
                }
              })

              // Update project settings
              if (fetchedProjects.length > 0) {
                const defaultProject = fetchedProjects.filter(
                  p => p.name === user.defaultProject
                )[0]

                dispatch(updateContext(defaultProject.name, fetchedProjects))
              }

              dispatch(fetchProjectsSuccess(fetchedProjects, user))
            })
            .catch(err => {
              dispatch(fetchProjectsFail(err))
            })
        } else {
          dispatch(fetchProjectsFail('User not found'))
        }
      })
      .catch(err => {
        dispatch(fetchProjectsFail(err))
      })
  }
}

export const fetchProjectsSuccess = (projects, user) => {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_PROJECTS_SUCCESS,
      projects: projects,
    })
    dispatch(completeSignIn(user))
  }
}

export const fetchProjectsFail = error => {
  console.log(error)
  return {
    type: actionTypes.FETCH_PROJECTS_FAIL,
    error: error,
  }
}

export const fetchProjectsStart = () => {
  return {
    type: actionTypes.FETCH_PROJECTS_START,
  }
}

export function closeSnackbar() {
  return { type: actionTypes.CLOSE_SNACKBAR }
}

export function showSnackbar(message) {
  return { type: actionTypes.SHOW_SNACKBAR, message }
}
