import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleSettings,
  updateExportDate,
  downloadExport,
  updateDefaultProject,
} from '../store/actions/configActions'
import { signOut, resetPassword } from '../store/actions/authActions'
import styled from 'styled-components'
import background from '../img/grey.png'

// Material UI
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListSubheader from '@material-ui/core/ListSubheader'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import CircularProgress from '@material-ui/core/CircularProgress'
// Icons
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import SecurityIcon from '@material-ui/icons/Security'
import CloudOffIcon from '@material-ui/icons/CloudOff'

import { DatePicker } from '@material-ui/pickers'

const StyledDiv = styled.div`
  width: 250px;
  height: 100%;
  background-image: url(${background});
`

const BottomDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
`

const AuthButton = styled(Button)`
  border-radius: 0 !important;
  margin-bottom: 10px !important;
`

const AuthIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 5px;
`

class Settings extends Component {
  render() {
    const TitleDiv = styled(Typography)`
      padding: 8px 0 8px 16px;
      color: #fff;
      background-color: ${this.props.mainColor};
    `
    const ListHeader = styled(ListSubheader)`
      line-height: inherit !important;
      margin-top: 15px;
      color: ${this.props.mainColor} !important;
    `

    let downloadExportsSetting = '',
      defaultProjectSetting = ''
    if (this.props.user.dataExport) {
      let downloadBtnToggle = (
        <IconButton
          color='primary'
          edge='end'
          aria-label='Download'
          onClick={this.props.onExportDownload}
        >
          <CloudDownloadIcon />
        </IconButton>
      )
      if (this.props.loadingDownload) {
        downloadBtnToggle = <CircularProgress color='primary' />
      }
      downloadExportsSetting = (
        <div>
          <TitleDiv variant='h6'>Data Export</TitleDiv>
          <Divider />
          <List subheader={<ListHeader>Download Export Date</ListHeader>}>
            <ListItem>
              <DatePicker
                value={this.props.downloadDate}
                onChange={this.props.onDownloadDateChange}
              />
              <ListItemSecondaryAction>
                {downloadBtnToggle}
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Divider />
        </div>
      )
    }
    if (this.props.projects.length > 1) {
      defaultProjectSetting = (
        <div>
          <List subheader={<ListHeader>Default Project</ListHeader>}>
            <ListItem>
              <Select
                value={this.props.defaultProject}
                onChange={event =>
                  this.props.onProjectChange(event.target.value)
                }
                name='context'
              >
                {this.props.projects.map(project => (
                  <MenuItem value={project.name} key={project.name}>
                    {project.name}
                  </MenuItem>
                ))}
              </Select>
            </ListItem>
          </List>
          <Divider />
        </div>
      )
    }

    return (
      <StyledDiv>
        {downloadExportsSetting}
        <TitleDiv variant='h6'>Settings</TitleDiv>
        <Divider />
        {defaultProjectSetting}
        <BottomDiv>
          <AuthButton
            color='primary'
            edge='end'
            aria-label='PasswordReset'
            variant='contained'
            fullWidth={true}
            onClick={this.props.onPwdReset}
          >
            <AuthIcon>
              <SecurityIcon />
            </AuthIcon>
            Reset Password
          </AuthButton>
          <AuthButton
            color='primary'
            edge='end'
            aria-label='SignOut'
            variant='contained'
            fullWidth={true}
            onClick={this.props.onSignOut}
          >
            <AuthIcon>
              <CloudOffIcon />
            </AuthIcon>
            Logout
          </AuthButton>
        </BottomDiv>
      </StyledDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    filterLabel: state.filters.filterLabel,
    mainColor: state.filters.mainColor,
    projects: state.config.projects,
    defaultProject: state.config.defaultProject,
    downloadDate: state.config.downloadExportDate,
    user: state.auth.user,
    loadingDownload: state.config.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSettingsToggle: showSettings => dispatch(toggleSettings(showSettings)),
    onDownloadDateChange: newDate => dispatch(updateExportDate(newDate)),
    onExportDownload: () => dispatch(downloadExport()),
    onProjectChange: defaultProject =>
      dispatch(updateDefaultProject(defaultProject)),
    onPwdReset: () => dispatch(resetPassword()),
    onSignOut: () => dispatch(signOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
