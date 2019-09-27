import React, { useState } from 'react'
import styled from 'styled-components'

// Material ui
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

import './App.css'

import CreateUser from './CreateUser'
const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  height: 60px;
  width: 100vw;
  background-color: #455a64;
`

const InnerContainer = styled(Card)`
  & {
    width: 70vw;
    height: 400px;
    margin-top: 50px;
  }
`

const InnerHeader = styled.div`
  height: 40px;
  display: flex;
  padding: 10px;
  justify-content: space-between;

  border: 1px solid;
`
const InnerContent = styled.div`
  padding: 50px;
`

function App() {
  const [shouldDisplayUsers, setshouldDisplayUsers] = useState(true)
  return (
    <OuterContainer>
      <Header color='inherit'>Webchat Analytics Admin</Header>
      <InnerContainer>
        <InnerHeader>
          <div>This</div>
          <Button
            variant='contained'
            onClick={() => setshouldDisplayUsers(false)}
          >
            Add User
          </Button>
        </InnerHeader>
        <InnerContent>
          {shouldDisplayUsers ? (
            <div>Users</div>
          ) : (
            <CreateUser handleClick={setshouldDisplayUsers} />
          )}
        </InnerContent>
      </InnerContainer>
    </OuterContainer>
  )
}

export default App
