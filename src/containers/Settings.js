import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  toggleSettings,
  updateExportDate,
  downloadExport,
  updateSubjectMatterTimezone,
  updateDefaultSubjectMatter
} from '../store/actions/configActions'
import { updateMainColor } from '../store/actions/filterActions'
import { signOut, resetPassword } from '../store/actions/authActions'
import styled from 'styled-components'
import background from '../img/grey.png'
import { SketchPicker } from 'react-color'
import timezones from '../common/timezones'

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
  overflow-x: hidden;
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

const ColorPickerButton = styled(Button)`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
`
const ColorPickerPopover = styled.div`
  position: absolute;
  z-index: 2;
`
const ColorPickerCover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`
const ColorPickerSwatch = styled.div`
  padding: 3px;
  background: #fff;
  borderradius: 1px;
  boxshadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  display: inline-block;
  cursor: pointer;
`
const PickColorLabel = styled(Typography)`
  text-transform: none;
  margin-right: 10px !important;
`

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayColorPicker: false,
      color: this.props.mainColor,
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
    if (this.state.color !== this.props.mainColor) {
      this.props.onMainColorChange(this.props.mainColor, true)
      this.setState({ color: this.props.mainColor })
    }
  }

  handleChange = color => {
    this.props.onMainColorChange(color.hex)
  }

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
    const ColorPickerColor = styled.div`
      width: 36px;
      height: 14px;
      borderradius: 2px;
      background: ${this.props.mainColor};
    `

    let downloadExportsSetting = ''
    let defaultSubjectMatterSetting = null
    let currentSubjectMatterSettings = null

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
    const settingsHeader = (
      <div>
        <TitleDiv variant='h6'>Settings</TitleDiv>
        <Divider />
      </div>
    )

    if (this.props.subjectMattersSettings.length > 1) {
      defaultSubjectMatterSetting = (
        <div>
          <List subheader={<ListHeader>Default Subject Matter</ListHeader>}>
            <ListItem>
              <Select
                value={this.props.defaultSubjectMatter}
                onChange={event =>
                  this.props.onDefaultSubjectMatterChange(event.target.value)
                }
                name='context'
              >
                {this.props.subjectMattersSettings.map(subjectMatter => (
                  <MenuItem value={subjectMatter.name} key={subjectMatter.name}>
                    {subjectMatter.name}
                  </MenuItem>
                ))}
              </Select>
            </ListItem>
          </List>
          <Divider />
        </div>
      )
    }

    if (this.props.user.isAdmin) {
      currentSubjectMatterSettings = (
        <div>
          <List subheader={<ListHeader>Primary Color</ListHeader>}>
            <ListItem>
              <ColorPickerButton onClick={this.handleClick}>
                <PickColorLabel variant='subtitle1'>Pick color</PickColorLabel>
                <ColorPickerSwatch>
                  <ColorPickerColor />
                </ColorPickerSwatch>
              </ColorPickerButton>
              {this.state.displayColorPicker ? (
                <ColorPickerPopover>
                  <ColorPickerCover onClick={this.handleClose} />
                  <SketchPicker
                    color={this.props.mainColor}
                    onChange={this.handleChange}
                  />
                </ColorPickerPopover>
              ) : null}
            </ListItem>
          </List>
          <Divider />
          <List subheader={<ListHeader>Timezone</ListHeader>}>
            <ListItem>
              <Select
                value={this.props.timezone}
                onChange={event =>
                  this.props.onTimezoneChange(event.target.value)
                }
                name='timezone'
              >
                {timezones.map(timezone => (
                  <MenuItem value={timezone.text} key={timezone.text}>
                    {timezone.text}
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
        {currentSubjectMatterSettings !== '' || defaultSubjectMatterSetting !== ''
          ? settingsHeader
          : ''}
        {currentSubjectMatterSettings}
        {defaultSubjectMatterSetting}
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
            Change Password
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
  const subjectMattersSettings = state.config.subjectMattersSettings
  const subjectMatterName = state.filters.context.replace('subjectMatters/', '')
  let currSubjectMatter = subjectMattersSettings.filter(p => p.name === subjectMatterName)[0]

  return {
    filterLabel: state.filters.filterLabel,
    mainColor: state.filters.mainColor,
    subjectMattersSettings: subjectMattersSettings,
    defaultSubjectMatter: state.config.defaultSubjectMatter,
    downloadDate: state.config.downloadExportDate,
    user: state.auth.user,
    loadingDownload: state.config.loading,
    timezone: currSubjectMatter.timezone.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSettingsToggle: showSettings => dispatch(toggleSettings(showSettings)),
    onDownloadDateChange: newDate => dispatch(updateExportDate(newDate)),
    onExportDownload: () => dispatch(downloadExport()),
    onDefaultSubjectMatterChange: defaultSubjectMatter =>
      dispatch(updateDefaultSubjectMatter(defaultSubjectMatter)),
    onMainColorChange: (newColor, updateDB) =>
      dispatch(updateMainColor(newColor, updateDB)),
    onTimezoneChange: newTimezone =>
      dispatch(updateSubjectMatterTimezone(newTimezone)),
    onPwdReset: () => dispatch(resetPassword()),
    onSignOut: () => dispatch(signOut()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
