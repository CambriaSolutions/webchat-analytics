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
import randomColor from 'randomcolor'

const pieChart = props => {
  const COLORS = randomColor({
    count: props.data.length,
    hue: 'blue',
  })

  return (
    <div style={{ width: '100%', height: 300 }}>
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
          <Bar dataKey={props.dataKey} fill="#8884d8">
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default pieChart
