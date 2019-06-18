import * as actionTypes from '../actions/actionTypes'
import db from '../../Firebase'
import { updateContext } from './filterActions'
import { completeSignIn } from './authActions'
import { format } from 'date-fns'
import timezones from '../../common/timezones'

export const fetchProjects = user => {
  return (dispatch, getState) => {
    const userRef = db.collection(`users`).doc(user.uid)

    dispatch(fetchProjectsStart())
    userRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const userData = doc.data()
          user.isAdmin = userData.admin && userData.admin === true
          user.defaultProject = userData.defaultProject
          user.dataExport = user.isAdmin
            ? true
            : userData.dataExport
            ? userData.dataExport
            : false

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
                  user.isAdmin ||
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

                dispatch({
                  type: actionTypes.UPDATE_DEFAULT_PROJECT,
                  defaultProject: defaultProject.name,
                })
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

export const toggleSettings = showSettings => {
  return {
    type: actionTypes.TOGGLE_SETTINGS,
    showSettings: showSettings,
  }
}

export const toggleConfigLoading = loading => {
  return {
    type: actionTypes.TOGGLE_CONFIG_LOADING,
    loading: loading,
  }
}

export const updateExportDate = newDate => {
  return {
    type: actionTypes.UPDATE_EXPORT_DATE,
    downloadExportDate: newDate,
  }
}

export const updateDefaultProject = projectName => {
  return (dispatch, getState) => {
    // Get projects settings based on the given context
    const user = getState().auth.user
    if (user) {
      const userRef = db.collection(`users`).doc(user.uid)
      userRef.update({ defaultProject: projectName }).then(() => {
        dispatch({
          type: actionTypes.UPDATE_DEFAULT_PROJECT,
          defaultProject: projectName,
        })
        dispatch(showSnackbar(`Default project updated successfully`))
      })
    }
  }
}

export const updateProjectColor = newColor => {
  return (dispatch, getState) => {
    let projectName = getState().filters.context
    let projects = getState().config.projects

    if (projectName.length > 0) {
      projectName = projectName.replace('projects/', '')
      const settingsRef = db.collection(`settings`).doc(projectName)
      settingsRef.update({ primaryColor: newColor }).then(() => {
        dispatch(showSnackbar(`Project primary color updated successfully`))
      })

      // Update projects object with new primary color
      let currProject = projects.filter(p => p.name === projectName)[0]
      currProject.primaryColor = newColor
      dispatch({
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects: projects,
      })
    }
  }
}

export const updateProjectTimezone = newTimezone => {
  return (dispatch, getState) => {
    let projectName = getState().filters.context
    let projects = getState().config.projects

    console.log(newTimezone)
    const selectedTimezone = timezones.filter(
      timezone => timezone.text === newTimezone
    )[0]
    console.log(selectedTimezone)
    if (projectName.length > 0 && selectedTimezone) {
      // Setup timezone value as DB expects it
      newTimezone = {
        name: selectedTimezone.text,
        offset: selectedTimezone.offset,
      }

      projectName = projectName.replace('projects/', '')
      const settingsRef = db.collection(`settings`).doc(projectName)
      settingsRef.update({ timezone: newTimezone }).then(() => {
        dispatch(showSnackbar(`Project timezone updated successfully`))
      })

      // Update projects object with new timezone
      let currProject = projects.filter(p => p.name === projectName)[0]
      currProject.timezone = newTimezone
      dispatch({
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        projects: projects,
      })
    }
  }
}

export const showIntentDetails = intent => {
  console.log(intent)

  return (dispatch, getState) => {
    const context = getState().filters.context
    const dateRange = getState().filters.dateFilters

    const aggregateRef = db.collection(`${context}/requests`)

    //dispatch(fetchMetricsStart())
    aggregateRef
      .where('createdAt', '>', new Date(dateRange.start))
      .where('createdAt', '<', new Date(dateRange.end))
      .get()
      .then(querySnapshot => {
        let fetchedAggregate = []
        querySnapshot.forEach(doc => {
          fetchedAggregate.push({ ...doc.data() })
        })

        console.log(fetchedAggregate)
        //dispatch(fetchMetricsSuccess(fetchedMetrics))
      })
      .catch(err => {
        //dispatch(fetchMetricsFail(err))
      })

    dispatch({
      type: actionTypes.TOGGLE_INTENT_MODAL,
      showIntentModal: true,
    })
  }
}

export const downloadExport = () => {
  return (dispatch, getState) => {
    const exportDate = getState().config.downloadExportDate

    const exportFileName = `${format(exportDate, 'MM-dd-yyyy')}.json`

    // Download export file
    dispatch(toggleConfigLoading(true))
    fetch(process.env.REACT_APP_DOWNLOAD_EXPORT_FUNCTION_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename: exportFileName,
      }),
    })
      .then(response => {
        // Convert the ReadableStream reponse into a Blob
        if (response.status === 200) {
          return response.blob()
        } else if (response.status === 204 || response.status === 404) {
          dispatch(
            showSnackbar(
              `No data is available for ${format(exportDate, 'MMM do, yyyy')}`
            )
          )
          dispatch(toggleConfigLoading(false))
        } else {
          dispatch(toggleConfigLoading(false))
        }
      })
      .then(blob => {
        // Create object URL based on blob
        if (blob) return URL.createObjectURL(blob)
      })
      .then(url => {
        if (url) {
          // Create temporary tag to download objectURL on the client side
          const a = document.createElement('a')
          a.setAttribute('hidden', '')
          a.setAttribute('href', url)
          a.setAttribute('download', exportFileName)
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          setTimeout(() => {
            dispatch(toggleConfigLoading(false))
          }, 1000)
        }
      })
  }
}

export function closeSnackbar() {
  return { type: actionTypes.CLOSE_SNACKBAR }
}

export function showSnackbar(message) {
  return { type: actionTypes.SHOW_SNACKBAR, message }
}
