import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import styled from 'styled-components'

// Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'

// Components
import Card from '../components/Card'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import EnhancedTable from '../components/EnhancedTable'
import CircularProgress from '@material-ui/core/CircularProgress'

import db from '../Firebase'

const rootStyles = {
  flexGrow: 1,
  margin: '2.5% 3%',
}

const GraphWrap = styled(Paper)`
  padding: 15px;
  background-color: rgb(250, 250, 250) !important;
  h3 {
    margin-top: 5px;
  }
`
const CenterDiv = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 300px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  .material-icons {
    font-size: 65px;
    color: #3f51b5;
  }
`

class Dashboard extends Component {
  componentDidMount() {
    this.props.onFetchConversations()
    this.props.onFetchIntents()
  }

  render() {
    let dashboardUI = (
      <CenterDiv>
        <h2>Loading Metrics...</h2>
        <CircularProgress />
      </CenterDiv>
    )
    if (!this.props.loadingConversations) {
      if (this.props.conversationsTotal > 0) {
        dashboardUI = (
          <Grid container spacing={16}>
            <Grid item xs={12} sm={4}>
              <Card
                color="#a1aade"
                value={this.props.conversationsTotal}
                label="Total Users"
                icon="account_circle"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                color="#7b88d1"
                value={`${this.props.avgDuration}`}
                label="Avg. Conv Duration"
                icon="schedule"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card
                color="#5566c3"
                value={`${this.props.supportRequestsPercentage}%`}
                label="Support Requests"
                icon="contact_support"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GraphWrap>
                <h3>Frequently used intents</h3>
                <PieChart
                  data={this.props.intents.slice(0, 5)}
                  dataKey="occurrences"
                />
              </GraphWrap>
            </Grid>
            <Grid item xs={12} sm={6}>
              <GraphWrap>
                <h3>Top exit intents on conversations</h3>
                <BarChart
                  data={this.props.exitIntents.slice(0, 5)}
                  dataKey="exits"
                />
              </GraphWrap>
            </Grid>
            <Grid item xs={12}>
              <EnhancedTable data={this.props.intents} />
            </Grid>
          </Grid>
        )
      } else {
        dashboardUI = (
          <CenterDiv>
            <Icon>speaker_notes_off</Icon>
            <h2>No conversations found</h2>
            <p>Try changing the filter</p>
          </CenterDiv>
        )
      }
    }
    return <div style={rootStyles}>{dashboardUI}</div>
  }
}

const beautifyTime = seconds => {
  if (seconds > 3600) return `${(seconds / 3600).toFixed(1)} hours`
  else if (seconds > 60) return `${(seconds / 60).toFixed(1)} mins`
  else return `${seconds.toFixed(1)} secs`
}

const beautifyIntents = intents => {
  return intents.map(intent => {
    // Replace dashes with spaces & capitalize 1st letter
    let newName = intent.name.replace(/-/g, ' ')
    newName = newName.charAt(0).toUpperCase() + newName.slice(1)
    return {
      ...intent,
      name: newName,
    }
  })
}

const mapStateToProps = state => {
  let allIntents = beautifyIntents(state.intents.intents)
  const allExitIntents = beautifyIntents(state.conversations.exitIntents)

  if (!state.intents.loading) {
    // Merge exit intents with intents array
    allIntents = allIntents.map(intent =>
      Object.assign(
        {},
        intent,
        allExitIntents.find(conv => conv.id === intent.id) || {
          exits: 0,
        }
      )
    )
  }

  return {
    loadingConversations: state.conversations.loading,
    loadingIntents: state.intents.loading,
    conversationsTotal: state.conversations.conversationsTotal,
    supportRequestsPercentage: Math.floor(
      (state.conversations.supportRequests /
        state.conversations.conversationsTotal) *
        100
    ),
    avgDuration: beautifyTime(
      state.conversations.durationTotal / state.conversations.conversationsTotal
    ),
    exitIntents: allExitIntents,
    intents: allIntents,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchConversations: () => dispatch(actions.fetchConversations()),
    onFetchIntents: () => dispatch(actions.fetchIntents()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
