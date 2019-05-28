import * as actionTypes from '../actions/actionTypes'
import { fetchConversations } from './conversationActions'
import { fetchMetrics } from './metricActions'
import db from '../../Firebase'
import randomColor from 'randomcolor'
import { format, startOfDay, endOfDay, subDays } from 'date-fns'

const formatDate = date => format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")

const getDateRange = date => {
  const startOfToday = formatDate(startOfDay(date))
  const endOfToday = formatDate(endOfDay(date))
  return { start: startOfToday, end: endOfToday }
}

// Set date range based on filter selected
const getDateFilters = newFilter => {
  let dateRange = {}
  const today = new Date()
  switch (newFilter) {
    case 'Yesterday':
      dateRange = getDateRange(subDays(today, 1))
      break
    case 'Last 7 days':
      dateRange = {
        start: formatDate(subDays(today, 7)),
        end: formatDate(endOfDay(today)),
      }
      break
    case 'Last 30 days':
      dateRange = {
        start: formatDate(subDays(today, 30)),
        end: formatDate(endOfDay(today)),
      }
      break
    case 'Today':
    default:
      dateRange = getDateRange(today)
  }
  return dateRange
}

export const updateFilters = event => {
  const dateFilters = getDateFilters(event.target.value)

  return dispatch => {
    dispatch(fetchConversations(dateFilters))
    dispatch(fetchMetrics(dateFilters))

    dispatch({
      type: actionTypes.UPDATE_FILTERS,
      filterLabel: event.target.value,
      dateFilters: dateFilters,
    })
  }
}

// Change project/context and retrieve new metrics & conversations
export const updateContext = (projectName, projects = []) => {
  const context = `projects/${projectName}`

  return (dispatch, getState) => {
    // Get projects settings based on the given context
    if (projects.length === 0) {
      projects = getState().filters.projects
    }

    const currProject = projects.filter(p => p.name === projectName)[0]
    if (currProject) {
      const dateFilters = getState().filters.dateFilters
      dispatch(fetchConversations(dateFilters, context))
      dispatch(fetchMetrics(dateFilters, context))

      const COLORS = randomColor({
        count: 10,
        hue: currProject.primaryColor,
      })

      dispatch({
        type: actionTypes.UPDATE_CONTEXT,
        context: context,
        mainColor: currProject.primaryColor,
        colors: COLORS,
      })
    } else {
      dispatch({
        type: actionTypes.UPDATE_CONTEXT,
        context: context,
        mainColor: '',
        colors: [],
      })
    }
  }
}

export const fetchProjects = () => {
  return (dispatch, getState) => {
    const settingsRef = db.collection(`settings`)

    dispatch(fetchProjectsStart())
    settingsRef
      .get()
      .then(querySnapshot => {
        let fetchedProjects = []
        querySnapshot.forEach(doc => {
          fetchedProjects.push(doc.data())
        })

        // Update project settings
        if (fetchedProjects.length > 0) {
          dispatch(updateContext(fetchedProjects[0].name, fetchedProjects))
        }

        dispatch(fetchProjectsSuccess(fetchedProjects))
      })
      .catch(err => {
        dispatch(fetchProjectsFail(err))
      })
  }
}

export const fetchProjectsSuccess = projects => {
  return {
    type: actionTypes.FETCH_PROJECTS_SUCCESS,
    projects: projects,
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

export const updateExportDate = newDate => {
  return {
    type: actionTypes.UPDATE_EXPORT_DATE,
    downloadExportDate: newDate,
  }
}

export const downloadExport = () => {
  return (dispatch, getState) => {
    const exportDate = getState().filters.downloadExportDate

    const exportFileName = `${format(exportDate, 'MM-dd-yyyy')}.json`

    // Download export file
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
        if (response.status === 200) return response.blob()
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
        }
      })
  }
}
