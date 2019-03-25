import React from 'react'

import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

const Details = styled(Grid)`
  padding: 10px;
`
const Image = styled(Grid)`
  padding: 10px;
  text-align: center;
  .material-icons {
    font-size: 40px;
    opacity: 0.4;
  }
`

const card = props => {
  const Card = styled(Grid)`
    color: #fff;
    background-color: ${props.color};
  `

  return (
    <Card container>
      <Details item xs={8}>
        <h5>{props.value}</h5>
        <p>{props.label}</p>
      </Details>
      <Image item xs={4}>
        <Icon>{props.icon}</Icon>
      </Image>
    </Card>
  )
}

export default card
