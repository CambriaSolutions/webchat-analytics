import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  updateFilters,
  updateContext,
  toggleSettings,
} from '../store/actions/filterActions'
import styled from 'styled-components'

// Material UI
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
// Icons
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined'
import SettingsIcon from '@material-ui/icons/Settings'

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
          <Hidden xsDown>
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
          </Hidden>
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
          <IconButton
            color='inherit'
            onClick={() => this.props.onSettingsToggle(true)}
            aria-label='Open settings'
          >
            <SettingsIcon />
          </IconButton>
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
    onProjectChange: newContext => dispatch(updateContext(newContext)),
    onSettingsToggle: showSettings => dispatch(toggleSettings(showSettings)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
