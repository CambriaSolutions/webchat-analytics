import React from 'react'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Icon from '@material-ui/core/Icon'

const StyledCard = styled(Card)`
  color: #fff;
  width: '100%';
  display: flex;
  padding: 5px;
  height: 90%;
`

const Details = styled(CardContent)`
  display: inline-block;
  flex: 70%;
  color: #fff;
  text-align: left;
  h5 {
    font-size: 1.6em;
    display: inline;
  }
  p {
    margin: 0 5px 5px 0;
  }
`

const Image = styled.div`
  display: inline-block;
  flex: 70%;
  text-align: right;
  .material-icons {
    margin-top: 10px;
    font-size: 60px;
    color: #fff;
    opacity: 0.4;
    padding-right: 10px;
  }
`

const card = props => {
  const cardStyle = {
    backgroundColor: `${props.color}`,
  }

  return (
    <StyledCard style={cardStyle}>
      <Details>
        <h5>{props.value}</h5>
        <p>{props.label}</p>
      </Details>
      <Image>
        <Icon>{props.icon}</Icon>
      </Image>
    </StyledCard>
  )
}

export default card
