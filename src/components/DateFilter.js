import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import {
  updateFilters,
  updateFiltersWithRange,
} from '../store/actions/filterActions'
import styled from 'styled-components'
// Material UI
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

// Date range picker
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'

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

class DateFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    }
  }

  handlePickerClose = ({ startDate, endDate }) => {
    if (startDate && endDate) {
      this.props.updateFiltersWithRange(startDate, endDate)
    }
  }
  render() {
    const { isCustomDateRange, filterLabel } = this.props
    const valuePresets = [
      'Today',
      'Yesterday',
      'Last 7 days',
      'Last 30 days',
      'Custom',
    ]

    return (
      <>
        {isCustomDateRange ? (
          <DateRangePicker
            startDate={this.state.startDate}
            startDateId='start-date'
            endDate={this.state.endDate}
            endDateId='end-date'
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            small
            noBorder
            isOutsideRange={day => moment().diff(day) < 0}
            onClose={({ startDate, endDate }) =>
              this.handlePickerClose({ startDate, endDate })
            }
          />
        ) : (
          <Dropdown
            value={filterLabel}
            onChange={event => this.props.onFilterChange(event)}
            name='filter'
          >
            <MenuItem value={'Today'}>Today</MenuItem>
            <MenuItem value={'Yesterday'}>Yesterday</MenuItem>
            <MenuItem value={'Last 7 days'}>Last 7 days</MenuItem>
            <MenuItem value={'Last 30 days'}>Last 30 days</MenuItem>
            <MenuItem value={'Custom'}>Custom</MenuItem>
            {!valuePresets.includes(filterLabel) && (
              <MenuItem value={filterLabel}>{filterLabel}</MenuItem>
            )}
          </Dropdown>
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.filterLabel,
    isCustomDateRange: state.filters.isCustomDateRange,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: newFilter => dispatch(updateFilters(newFilter)),
    updateFiltersWithRange: (startDate, endDate) =>
      dispatch(updateFiltersWithRange(startDate, endDate)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateFilter)
