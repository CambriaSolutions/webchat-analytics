import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar'
import ThemedApp from './containers/ThemedApp'
import PrivateRoute from './PrivateRoute'
import SignIn from './components/SignIn'
import { fetchUser, closeSnackbar } from './store/actions'

import { createGlobalStyle } from 'styled-components'
import background from './img/grey.png'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
  }
`

class App extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    const {
      snackbarOpen,
      closeSnackbar,
      snackbarMessage,
      isLoggedIn,
    } = this.props

    return (
      <Router>
        <div className='container'>
          <Route path='/login' component={SignIn} />

          <PrivateRoute
            exact
            path='/'
            loggedIn={isLoggedIn}
            component={ThemedApp}
          />

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={snackbarOpen}
            autoHideDuration={3500}
            onClose={closeSnackbar}
            message={<span id='message-id'>{snackbarMessage}</span>}
          />
        </div>
        <GlobalStyle />
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    snackbarOpen: state.config.snackbarOpen,
    snackbarMessage: state.config.snackbarMessage,
  }
}

export default connect(
  mapStateToProps,
  { fetchUser, closeSnackbar }
)(App)
