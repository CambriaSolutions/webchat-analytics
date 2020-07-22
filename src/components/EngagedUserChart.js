import React from 'react'
import ComposedChart from './ComposedChart'
import prepareDataForComposedChart from '../scripts/metricUtil'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Line, Legend, Tooltip } from 'recharts'
import {contrastingColors} from '../common/helper'

const Header = styled.h3`
  display: flex
`

const HeaderText = styled.span`
  flex: 1
`

const StyledTooltipContent = styled.p`
  background-color: black
  color: white
  padding: 10px
  border-radius: 10px
`

const CustomTooltip = ({ active, payload, label }) => {
  // payload[0].value could be zero, so can't do !!payload[0].value
  if (active && !!payload && !!payload[0] && payload[0].value !== undefined && payload[0].value !== null) {
    return (
      <div >
        <StyledTooltipContent className="label">{`${label} : ${payload[0].value}`}</StyledTooltipContent>
      </div>
    );
  } else {
    return null
  }
};

const EngagedUserChart = props => {
  const { data } = prepareDataForComposedChart(props.metrics, props.filterLabel)
  const [ darkestColor ] = contrastingColors(props.colors)

  return (
    <>
      <Header>
        <HeaderText>
          Engaged Users
        </HeaderText>
      </Header>
      <ComposedChart
        data={data}
        xKey='id'>
        <Line type="monotone" dataKey="numConversationsWithDuration" stroke={darkestColor} name="Engaged Users" />
        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </ComposedChart>
    </>
  )
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    showEngagedUser: state.filters.showEngagedUser,
    filterLabel: state.filters.filterLabel,
    metrics: state.metrics.dailyMetrics
  }
}

export default connect(
  mapStateToProps
)(EngagedUserChart)
