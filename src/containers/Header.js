import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFilters, updateContext } from '../store/actions/filterActions'
import { toggleSettings } from '../store/actions/configActions'
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

// Date Filter
import DateFilter from '../components/DateFilter'

const ToolbarTitle = styled(Typography)`
  flex-grow: 1;
  margin-left: 10px !important;
`
const FilterTitle = styled(Typography)`
  padding-bottom: 4px;
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
    let projectDropdown = ''
    if (this.props.projects.length > 1) {
      projectDropdown = (
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
      )
    }

    return (
      <AppBar position='static' color='primary'>
        <Toolbar>
          <InsertChartOutlined />
          {projectDropdown}
          <ToolbarTitle variant='h6' color='inherit'>
            Analytics
          </ToolbarTitle>
          <Hidden xsDown>
            <FilterTitle variant='subtitle1' color='inherit'>
              Filter
            </FilterTitle>
          </Hidden>
          <DateFilter />
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
    projects: state.config.projects,
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
