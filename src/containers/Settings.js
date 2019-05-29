import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleSettings,
  updateExportDate,
  downloadExport,
} from '../store/actions/filterActions'
import { signOut } from '../store/actions/authActions'
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
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Switch from '@material-ui/core/Switch'
// Icons
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import CloudOffIcon from '@material-ui/icons/CloudOff'
import AccessTimeIcon from '@material-ui/icons/AccessTime'

import { DatePicker } from '@material-ui/pickers'

const StyledDiv = styled.div`
  width: 250px;
  height: 100%;
  background-image: url(${background});
`

const BottomDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`

const SignOutButton = styled(Button)`
  border-radius: 0 !important;
`

const SignOutIcon = styled(CloudOffIcon)`
  margin-right: 10px;
`

class Settings extends Component {
  render() {
    const TitleDiv = styled(Typography)`
      padding: 8px 0 8px 16px;
      color: #fff;
      background-color: ${this.props.mainColor};
    `
    return (
      <StyledDiv>
        <TitleDiv variant='h6'>Data Export</TitleDiv>
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
        <TitleDiv variant='h6'>Settings</TitleDiv>
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
        <BottomDiv>
          <SignOutButton
            color='primary'
            edge='end'
            aria-label='SignOut'
            variant='contained'
            fullWidth={true}
            onClick={this.props.onSignOut}
          >
            <SignOutIcon />
            Logout
          </SignOutButton>
        </BottomDiv>
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
    onSignOut: () => dispatch(signOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
