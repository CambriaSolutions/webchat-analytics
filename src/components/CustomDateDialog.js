import React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { format, isValid } from 'date-fns'
import styled from 'styled-components'

import {
  updateFiltersWithRange,
  toggleDateDialog,
} from '../store/actions/filterActions'

const StyledButton = styled(Button)`
  && {
    color: #fff;
  }
`
const PickerContainer = styled.div`
  display: flex;
  justify-content: center;
`
const Picker = styled(KeyboardDatePicker)`
  && {
    margin-left: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.42) !important;
  }
`

function CustomDateDialog(props) {
  const {
    filterStartDate,
    filterEndDate,
    updateFiltersWithRange,
    filterLabel,
    openDateDialog,
    toggleDateDialog,
  } = props

  const [buttonText, setButtomText] = React.useState('')
  const [startDate, setStartDate] = React.useState(null)
  const [endDate, setEndDate] = React.useState(null)

  function handleClickOpen() {
    toggleDateDialog(true)
  }
  function handleClose() {
    toggleDateDialog(false)
  }

  function handleUpdate() {
    if (isValid(startDate) && isValid(endDate)) {
      updateFiltersWithRange(startDate, endDate)
      toggleDateDialog(false)
      setButtomText(
        `${format(startDate, 'M/d/yy')} - ${format(endDate, 'M/d/yy')}`
      )
    }
  }

  return (
    <>
      {filterLabel === 'Custom' && (
        <StyledButton onClick={handleClickOpen}>{buttonText}</StyledButton>
      )}
      <Dialog
        open={openDateDialog}
        onClose={handleClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>Custom Time Range</DialogTitle>
        <DialogContent>
          <PickerContainer>
            <Picker
              disableFuture
              autoOk
              variant='inline'
              inputVariant='outlined'
              label='Start Date'
              initialFocusedDate={filterStartDate}
              format='MM/dd/yyyy'
              value={startDate}
              maxDate={endDate ? endDate : false}
              onChange={date => setStartDate(date)}
            />
            <Picker
              disableFuture
              autoOk
              variant='inline'
              inputVariant='outlined'
              label='End Date'
              initialFocusedDate={filterEndDate}
              format='MM/dd/yyyy'
              value={endDate}
              minDate={startDate ? startDate : false}
              onChange={date => setEndDate(date)}
            />
          </PickerContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleUpdate} color='primary'>
            Update Date Filter
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.filterLabel,
    filterStartDate: state.filters.dateFilters.start,
    filterEndDate: state.filters.dateFilters.end,
    openDateDialog: state.filters.openDateDialog,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateFiltersWithRange: (startDate, endDate) =>
      dispatch(updateFiltersWithRange(startDate, endDate)),
    toggleDateDialog: shouldOpen => dispatch(toggleDateDialog(shouldOpen)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDateDialog)
