import React from 'react'
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

const barChart = props => {
  let chartUI
  if (props.data && props.data.length > 0) {
    chartUI = (
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={props.data}
          layout="vertical"
          margin={{
            top: 5,
            right: 20,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey={'name'} style={{ fontSize: 13 }} />
          <Tooltip />
          <Bar dataKey={props.dataKey} fill="#8884d8" maxBarSize={45}>
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={props.colors[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  } else {
    chartUI = (
      <EmptyChart icon="contact_support" message="No support requests found" />
    )
  }

  return <div style={{ width: '100%', height: 300 }}>{chartUI}</div>
}

export default barChart
