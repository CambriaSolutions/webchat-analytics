import React, { Component } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import EmptyChart from './EmptyChart'
import { chunkString } from '../common/helper'

class CustomizedAxisTick extends Component {
  render() {
    const {
      x,
      y,
      payload,
      width,
      maxChars,
      lineHeight,
      fontSize,
      fill,
    } = this.props

    const chunks = chunkString(payload.value, maxChars)
    const yPos = chunks.length === 1 ? 4 : chunks.length === 2 ? -2 : -9
    const tspans = chunks.map((s, i) => (
      <tspan x={0} y={yPos} dy={i * lineHeight} key={s}>
        {s}
      </tspan>
    ))
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          width={width}
          height='auto'
          textAnchor='end'
          fontSize={fontSize}
          fill={fill}
        >
          {tspans}
        </text>
      </g>
    )
  }
}

CustomizedAxisTick.defaultProps = {
  width: 50,
  maxChars: 14,
  fontSize: 12,
  lineHeight: 12,
  fill: '#333',
}

const barChart = props => {
  let chartUI
  if (props.data && props.data.length > 0) {
    chartUI = (
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={props.data}
          layout='vertical'
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis type='number' />
          <YAxis
            type='category'
            dataKey={'name'}
            tick={<CustomizedAxisTick />}
          />
          <Tooltip />
          <Bar dataKey={props.dataKey} fill='#8884d8' maxBarSize={45}>
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={props.colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    chartUI = (
      <EmptyChart icon='contact_support' message='No support requests found' />
    )
  }

  return <div style={{ width: '100%', height: 300 }}>{chartUI}</div>
}

export default barChart
