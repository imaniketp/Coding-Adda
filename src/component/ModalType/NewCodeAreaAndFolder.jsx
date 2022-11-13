import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'

const Button = styled.button`
  float: right;
  background: black;
  color: white;

`

const NewCodeAreaAndFolder = () => {
  return (
    <>
      <IoCloseSharp style={{float: 'right'}}/>
      <Header>
        <Heading>Create New Playground & Create new folder</Heading>
      </Header>
  
            
    <p>Create New PlayGround :<input type='text' /></p>    
    <p>Create New Folder :<input type='text' /></p>
    <select>
          <option value="c++" >C++</option>
          <option value="javascript" >JavaScript</option>
          <option value="java" >Java</option>
          <option value="python" >Python</option>
      </select>
    <Button >Create New Playground</Button>
    </>
  )
}

export default NewCodeAreaAndFolder