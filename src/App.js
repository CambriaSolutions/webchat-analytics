import React, { Component } from 'react'
import Header from './containers/Header'
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    )
  }
}

export default App
