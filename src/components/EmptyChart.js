import React from 'react'
import styled from 'styled-components'
import Icon from '@material-ui/core/Icon'

const CenterDiv = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 300px;
  height: 100px;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  .material-icons {
    font-size: 50px;
    color: #3f51b5;
    opacity: 0.6;
  }
  h4 {
    color: #999;
    margin-top: 2px;
  }
`

const emptyChart = props => {
  return (
    <CenterDiv>
      <Icon>{props.icon ? props.icon : 'speaker_notes_off'}</Icon>
      <h4>{props.message}</h4>
    </CenterDiv>
  )
}

export default emptyChart
