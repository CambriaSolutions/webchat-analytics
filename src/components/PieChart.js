import React, { Component } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from 'recharts'

class ResponsivePieChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      width: window.innerWidth,
      colors: props.colors,
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  render() {
    if (this.state.colors.length === 0) {
      this.setState({ width: window.innerWidth })
    }
    const isMobile = this.state.width <= 900
    const legend = !isMobile ? (
      <Legend layout="vertical" verticalAlign="middle" align="right" />
    ) : (
      <Legend />
    )
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              dataKey={this.props.dataKey}
              data={this.props.data}
              fill="#8884d8"
              label
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
