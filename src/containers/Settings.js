import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleSettings,
  updateExportDate,
  downloadExport,
} from '../store/actions/filterActions'
import styled from 'styled-components'
import background from '../img/grey.png'

// Material UI
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import Switch from '@material-ui/core/Switch'
// Icons
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

import { DatePicker } from '@material-ui/pickers'

const StyledDiv = styled.div`
  width: 250px;
  height: 100%;
  background-image: url(${background});
`

const TitleDiv = styled(Typography)`
  padding: 8px 0 8px 16px;
`

class Settings extends Component {
  render() {
    return (
      <StyledDiv>
        <TitleDiv variant='h6' color='primary'>
          Data Export
        </TitleDiv>
        <Divider />
        <List
          subheader={
            <ListSubheader>Select a day to export data from:</ListSubheader>
          }
        >
          <ListItem>
            <DatePicker
              value={this.props.downloadDate}
              onChange={this.props.onDownloadDateChange}
            />
            <ListItemSecondaryAction>
              <IconButton
                color='primary'
                edge='end'
                aria-label='Download'
                onClick={this.props.onExportDownload}
              >
                <CloudDownloadIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
        <TitleDiv variant='h6' color='primary'>
          Settings
        </TitleDiv>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>
              <AccessTimeIcon />
            </ListItemIcon>
            <ListItemText primary='Timezone' />
            <ListItemSecondaryAction>
              <Switch color='primary' edge='end' />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </StyledDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.filterLabel,
    mainColor: state.filters.mainColor,
    projects: state.filters.projects,
    downloadDate: state.filters.downloadExportDate,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSettingsToggle: showSettings => dispatch(toggleSettings(showSettings)),
    onDownloadDateChange: newDate => dispatch(updateExportDate(newDate)),
    onExportDownload: () => dispatch(downloadExport()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
