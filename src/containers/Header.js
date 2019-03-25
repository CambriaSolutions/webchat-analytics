import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateFilters } from '../store/actions/filterActions'
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
  margin-left: 10px;
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

class Header extends Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <InsertChartOutlined />
          <ToolbarTitle variant="h6" color="inherit">
            Analytics
          </ToolbarTitle>

          <Typography variant="subtitle1" color="inherit">
            Filter
          </Typography>
          <Dropdown
            value={this.props.filterLabel}
            onChange={event => this.props.onFilterChange(event)}
            name="filter"
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: newFilter => dispatch(updateFilters(newFilter)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
