import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import styled from 'styled-components'


const Button = styled.button`
  float: right;
  background: black;
  color: white;
`
const NewFolder = () => {
 

  return (
    <>
      <IoCloseSharp style={{float: 'right'}}/>
    <Header>
      <Heading>Create New Folder</Heading>
    </Header>
    
      <p>Enter Folder Name:<input type='text' /></p>
      <Button style={{float: 'right'}}>Create New Folder</Button>
    </>
  )
}

export default NewFolder