import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import styled from 'styled-components'

// Material UI
import Grid from '@material-ui/core/Grid'

// Components
import Card from '../components/Card'

class Dashboard extends Component {
  componentDidMount() {
    this.props.onFetchConversations()
    this.props.onFetchIntents()
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Card
                color="#e6f5ff"
                value={this.props.conversationsTotal}
                label="Visits"
                icon="account_circle"
              />
            </Grid>
            {this.props.filterLabel.start}
            <Grid item xs={12}>
              <Card
                color="#99d6ff"
                value={`${this.props.avgDuration} sec`}
                label="Avg. Conv Duration"
                icon="schedule"
              />
            </Grid>
            <Grid item xs={12}>
              <Card
                color="#66c2ff"
                value="58%"
                label="Exit rate"
                icon="help_outline"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} />
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.dateFilters,
    loadingConversations: state.conversations.loading,
    loadingIntents: state.intents.loading,
    conversationsTotal: state.conversations.conversationsTotal,
    supportRequestsPercentage:
      (state.conversations.supportRequests /
        state.conversations.conversationsTotal) *
      100,
    avgDuration:
      state.conversations.durationTotal /
      state.conversations.conversationsTotal,
    exitIntents: state.conversations.exitIntents,
    intents: state.intents.intents,
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
