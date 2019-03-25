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

/*
    STATE:
        filterRange: { startDate: '21-03-2019', endDate: '22-03-2019'},
        conversationsTotal: 0,
        durationTotal: 0,
        intents: [ { id: '1234', name: 'support', occurrences: 3, sessions: 9 } ],
        exitIntents: [ { id: '1234', name: 'welcome', exits: 2 } ],
        supportRequests: 0

    ACTIONS:
        - Update filter date range
        - Q1: Get all conversations in date range
            - Sum all conversation durations
            - Get list of exitIntents and counters
            - Get support requests from Q1
        - Q2: Get all intents in date range from metrics collection

    Queries: 
      - Q1: Get all conversations in date range
      - Q2: Get all conversations with hasSupportRequest == true
      - Q3: Starting on Q1 

      Metrics based on queries:
      - Users Metric (amount of conversations):
        - Q1 count
      - Conversation Duration:
        - Loop through Q1, store sum of duration / amount of conversations
      - Frequent Intents:
        - On Q1
      - Support requests:
        Loop through Q2
        - Frequency:
          - On the same Q2 loop, store a count of support requests
        - Percentage of conversations with support requests:
          - Count of conversations with hasSupportRequest(true) / amount of conversations
  */

export default App
