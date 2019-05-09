import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFilters, updateSettings } from '../store/actions/filterActions'
import styled from 'styled-components'

// Material UI
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
// Icons
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined'

const ToolbarTitle = styled(Typography)`
  flex-grow: 1;
  margin-left: 10px !important;
`

const Dropdown = styled(Select)`
  color: #fff !important;
  margin-left: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.42) !important;
  &:after {
    border-bottom: 2px solid #fff !important;
  }
  svg {
    color: #fff;
  }
`
// Regex to retrieve text after last "/" on a context
const getNameFromContext = context => /[^/]*$/.exec(context)[0]

class Header extends Component {
  render() {
    return (
      <AppBar position='static' color='primary'>
        <Toolbar>
          <InsertChartOutlined />
          <Dropdown
            value={this.props.projectName}
            onChange={event => this.props.onProjectChange(event.target.value)}
            name='context'
          >
            {this.props.projects.map(project => (
              <MenuItem value={project.name} key={project.name}>
                {project.name}
              </MenuItem>
            ))}
          </Dropdown>
          <ToolbarTitle variant='h6' color='inherit'>
            Analytics
          </ToolbarTitle>

          <Typography variant='subtitle1' color='inherit'>
            Filter
          </Typography>
          <Dropdown
            value={this.props.filterLabel}
            onChange={event => this.props.onFilterChange(event)}
            name='filter'
          >
            <MenuItem value={'Today'}>Today</MenuItem>
            <MenuItem value={'Yesterday'}>Yesterday</MenuItem>
            <MenuItem value={'Last 7 days'}>Last 7 days</MenuItem>
            <MenuItem value={'Last 30 days'}>Last 30 days</MenuItem>
          </Dropdown>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.filterLabel,
    mainColor: state.filters.mainColor,
    projects: state.filters.projects,
    projectName: getNameFromContext(state.filters.context),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: newFilter => dispatch(updateFilters(newFilter)),
    onProjectChange: newContext => dispatch(updateSettings(newContext)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
