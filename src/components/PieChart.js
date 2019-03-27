import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
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
        <PieChart>
          <Pie dataKey={props.dataKey} data={props.data} fill="#8884d8" label>
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default pieChart
