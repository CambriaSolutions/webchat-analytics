import React from 'react'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
} from 'recharts'
import randomColor from 'randomcolor'

const radarChart = props => {
  const COLOR = randomColor({ hue: 'blue' })

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <RadarChart outerRadius={90} width={500} height={300} data={props.data}>
          <PolarGrid />
          <PolarAngleAxis dataKey={'name'} style={{ fontSize: 13 }} />
          <Tooltip />
          <Radar
            name="category"
            dataKey={props.dataKey}
            stroke={COLOR}
            fill={COLOR}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default radarChart
