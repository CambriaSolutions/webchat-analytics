import React, { useState } from 'react'

function CreateUser(props) {
  return <div onClick={() => props.handleClick(true)}>CreateUser</div>
}

export default CreateUser
