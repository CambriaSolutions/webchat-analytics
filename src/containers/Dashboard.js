import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Settings from './Settings'

// Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Drawer from '@material-ui/core/Drawer'
import Dialog from '@material-ui/core/Dialog'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

// Components
import Card from '../components/Card'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import RadarChart from '../components/RadarChart'
import EnhancedTable from '../components/EnhancedTable'
import IntentDetails from '../components/IntentDetails'
import CircularProgress from '@material-ui/core/CircularProgress'
import SupportRequestsTile from '../components/SupportRequestsTile'

// Helpers
import { colorShades } from '../common/helper'

const rootStyles = {
  flexGrow: 1,
  margin: '2.5% 3%',
}

const GraphWrap = styled(Paper)`
  padding: 15px;
  position: relative;
  background-color: rgb(250, 250, 250) !important;
  height: 93%;
  h3 {
    margin-top: 5px;
  }
`
const FeedbackButtonGroup = styled(ToggleButtonGroup)`
  position: absolute;
  top: 15px;
  right: 15px;
`

class Dashboard extends Component {
  feedbackTypeChange = (event, feedbackSelected) =>
    this.props.onFeedbackChange(feedbackSelected)

  render() {
    const FeedbackTotalsDiv = styled.div`
      position: absolute;
      bottom: 15px;
      right: 15px;
      color: #666;

      .material-icons {
        margin-bottom: -2px;
        font-size: 16px !important;
        color: ${this.props.mainColor};
        opacity: 0.7;
      }
    `

    const StyledToggleButton = withStyles(theme => ({
      selected: {
        color: `${this.props.mainColor} !important`,
        backgroundColor: 'rgba(0,0,0,0.05) !important',
      },
    }))(ToggleButton)

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
        color: ${this.props.mainColor};
      }
    `

    let dashboardUI = (
      <CenterDiv>
        <h2>Loading Metrics...</h2>
        <CircularProgress />
      </CenterDiv>
    )
    if (!this.props.loadingConversations) {
      if (this.props.conversationsTotal > 0) {
        // Remove welcome intent from frequent intents list & exit intents
        let frequentIntents = this.props.intents
          .filter(i => i.name !== 'Default Welcome Intent')
          .slice(0, 5)

        let welcomeExitIntent = this.props.exitIntents.filter(
          i => i.name === 'Default Welcome Intent'
        )[0]
        if (!welcomeExitIntent) welcomeExitIntent = { exits: 0 }

        let exitIntents = this.props.exitIntents
          .filter(i => i.name !== 'Default Welcome Intent')
          .slice(0, 5)

        dashboardUI = (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Card
                color={colorShades(this.props.mainColor, 50)}
                value={this.props.conversationsTotal}
                label='Total Users'
                notes=''
                icon='account_circle'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card
                color={colorShades(this.props.mainColor, 30)}
                value={`${this.props.avgDuration}`}
                label='Avg. Conv Duration'
                notes=''
                icon='schedule'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card
                color={colorShades(this.props.mainColor, 20)}
                value={`${this.props.supportRequestsPercentage}%`}
                label='Support Requests'
                notes={
                  this.props.totalSupportRequests > 0
                    ? `${this.props.totalSupportRequests} requests`
                    : ''
                }
                icon='contact_support'
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card
                color={colorShades(this.props.mainColor, 10)}
                value={`${this.props.conversationsTotal -
                  welcomeExitIntent.exits}`}
                label='Engaged Users'
                notes={
                  welcomeExitIntent.exits > 0
                    ? `${welcomeExitIntent.exits} immediate exits`
                    : ''
                }
                icon='speaker_notes'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GraphWrap>
                <h3>Frequently used intents</h3>
                <PieChart
                  data={frequentIntents}
                  dataKey='occurrences'
                  colors={this.props.colors}
                />
              </GraphWrap>
            </Grid>
            <Grid item xs={12} sm={6}>
              <GraphWrap>
                <h3>Top exit intents on conversations</h3>
                <BarChart
                  data={exitIntents}
                  dataKey='exits'
                  colors={this.props.colors}
                  emptyMsg='No exit intents found'
                />
              </GraphWrap>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SupportRequestsTile
                supportRequests={this.props.supportRequests}
                colors={this.props.colors}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <GraphWrap>
                <h3>Feedback</h3>
                <FeedbackButtonGroup
                  value={this.props.feedbackSelected}
                  exclusive
                  onChange={this.feedbackTypeChange}
                >
                  <StyledToggleButton value='positive'>
                    <Icon>thumb_up</Icon>
                  </StyledToggleButton>
                  <StyledToggleButton value='negative'>
                    <Icon>thumb_down</Icon>
                  </StyledToggleButton>
                </FeedbackButtonGroup>
                <RadarChart
                  data={this.props.feedback.details}
                  total={this.props.feedback.total}
                  dataKey='occurrences'
                  color={this.props.mainColor}
                />
                <FeedbackTotalsDiv>
                  <b>
                    <Icon>
                      {this.props.feedbackSelected === 'positive'
                        ? 'thumb_up'
                        : 'thumb_down'}
                    </Icon>{' '}
                    Entries:{' '}
                  </b>{' '}
                  {this.props.feedback.total}
                </FeedbackTotalsDiv>
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
    return (
      <div style={rootStyles}>
        <Drawer
          anchor='right'
          open={this.props.showSettings}
          onClose={this.props.onSettingsToggle}
        >
          <Settings />
        </Drawer>
        {dashboardUI}
        <Dialog
          open={this.props.showIntentModal}
          onClose={this.props.onIntentsModalClose}
          maxWidth={'md'}
          fullWidth={true}
          aria-labelledby='intent_details_title'
        >
          <IntentDetails
            loading={this.props.loadingIntentDetails}
            data={this.props.intentDetails}
            color={this.props.mainColor}
            timezoneOffset={this.props.timezoneOffset}
          />
        </Dialog>
      </div>
    )
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

const compareValues = (key, order = 'asc') => {
  return (a, b) => {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}

const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0)
  return Math.round(value * multiplier) / multiplier
}

const mapStateToProps = state => {
  let allIntents = beautifyIntents(state.metrics.intents)
  let allSupportRequests = beautifyIntents(state.metrics.supportRequests)
  const allExitIntents = beautifyIntents(state.conversations.exitIntents)
  // Sort arrays by exits & occurrences
  allExitIntents.sort(compareValues('exits', 'desc'))
  allSupportRequests.sort(compareValues('occurrences', 'desc'))

  if (!state.metrics.loading) {
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
    // Sort array by occurrences
    allIntents.sort(compareValues('occurrences', 'desc'))
  }

  return {
    loadingConversations: state.conversations.loading,
    loadingIntents: state.metrics.loading,
    loadingIntentDetails: state.config.loadingIntentDetails,
    conversationsTotal: state.conversations.conversationsTotal,
    supportRequestsPercentage: round(
      (state.conversations.supportRequests /
        state.conversations.conversationsTotal) *
        100,
      1
    ),
    avgDuration: beautifyTime(
      state.conversations.durationTotal / state.conversations.conversationsTotal
    ),
    exitIntents: allExitIntents,
    intents: allIntents,
    totalSupportRequests: state.conversations.supportRequests,
    supportRequests: allSupportRequests,
    feedbackSelected: state.metrics.feedbackSelected,
    feedback: state.metrics.feedbackFiltered,
    colors: state.filters.colors,
    mainColor: state.filters.mainColor,
    showSettings: state.config.showSettings,
    showIntentModal: state.config.showIntentModal,
    intentDetails: state.config.intentDetails,
    timezoneOffset: state.filters.timezoneOffset,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchConversations: () => dispatch(actions.fetchConversations()),
    onFetchMetrics: () => dispatch(actions.fetchMetrics()),
    onFeedbackChange: feedbackType =>
      dispatch(actions.updateFeedbackType(feedbackType)),
    onSettingsToggle: () => dispatch(actions.toggleSettings(false)),
    onIntentsModalClose: () => dispatch(actions.toggleIntentsModal(false)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
