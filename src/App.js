import React, { Component } from 'react'
import Header from './containers/Header'
import Dashboard from './containers/Dashboard'

import { createGlobalStyle } from 'styled-components'
import background from './img/grey.png'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${background});
  }
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header />
          <Dashboard />
        </div>
        <GlobalStyle />
      </React.Fragment>
    )
  }
}

export default App
