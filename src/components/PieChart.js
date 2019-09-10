import React, { Component } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

class ResponsivePieChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth,
      colors: props.colors,
    }
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  renderLegendText(value, entry) {
    //const { color } = entry
    return <span style={{ fontSize: 15 }}>{value}</span>
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.colors !== prevProps.colors) {
      this.setState({ colors: this.props.colors })
    }
  }

  render() {
    if (this.state.colors.length === 0) {
      this.setState({ width: window.innerWidth })
    }
    const isMobile = this.state.width <= 900
    const legend = !isMobile ? (
      <Legend
        layout='vertical'
        verticalAlign='middle'
        align='right'
        formatter={this.renderLegendText}
      />
    ) : (
      <Legend formatter={this.renderLegendText} />
    )
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey={this.props.dataKey}
              data={this.props.data}
              fill='#8884d8'
              label={renderCustomizedLabel}
              labelLine={false}
            >
              {this.props.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.state.colors[index]} />
              ))}
            </Pie>
            {legend}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ResponsivePieChart
