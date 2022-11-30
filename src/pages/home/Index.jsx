import React,{useContext} from 'react'
import styled from 'styled-components'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import Modal from '../../component/Modal'
import { ModalContext } from '../../context/ModelContext'


const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
`

const Home = () => {
  
const {isOpenModal} = useContext(ModalContext);

  return (
    <StyledHome>
      <LeftComponent />
      <RightComponent />
      { isOpenModal.show  && <Modal  />}
    </StyledHome>
  )
}

export default Home