import React,{useContext} from 'react'
import styled from 'styled-components'
import { NewFolder, NewCodeArea, NewCodeAreaAndFolder, EditFolder, EditCodeAreaTitle } from './ModalType'
import { ModalContext } from '../context/ModelContext'


const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left:0;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    `
    const ModalContent = styled.div`
    background-color: #fff;
    padding: 1rem;
    border-radius: 5px;
`

export const Header = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

export const Heading = styled.h3`
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

const Modal = () => {
  const { modalType } = useContext(ModalContext);

  return (
    <ModalContainer>
        <ModalContent>
          {modalType === 1 && <NewFolder />}
          {modalType === 2 && <NewCodeArea />}
          {modalType === 3 && <NewCodeAreaAndFolder />}
          {modalType === 4 && <EditFolder />}
          {modalType === 5 && <EditCodeAreaTitle />}

        </ModalContent>

    </ModalContainer>
  )
}

export default Modal