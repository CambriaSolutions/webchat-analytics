import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './containers/Header'
import Dashboard from './containers/Dashboard'

import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { createGlobalStyle } from 'styled-components'
import background from './img/grey.png'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
  }
`

class App extends Component {
  render() {
    const theme = {
      palette: {
        primary: { main: this.props.mainColor },
      },
      typography: {
        useNextVariants: true,
      },
    }
    return (
      <React.Fragment>
        <MuiThemeProvider theme={createMuiTheme(theme)}>
          <div className='App'>
            <Header />
            <Dashboard />
          </div>
          <GlobalStyle />
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.filterLabel,
    mainColor: state.filters.mainColor,
  }
}

export default connect(mapStateToProps)(App)
