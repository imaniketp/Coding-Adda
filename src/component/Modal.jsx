import React,{useContext} from 'react'
import styled from 'styled-components'
import { NewFolder, NewCodeArea, NewCodeAreaAndFolder, EditFolder, EditCodeAreaTitle, Loading } from './ModalType'
import { ModalContext } from '../context/ModelContext'


const ModalContainer = styled.div`
    position: fixed;
    top:0;
    left:0;

    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const ModalContent = styled.div`
    background-color: #fff;
    padding: 1rem;
    width: 35%;
    border-radius: 5px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;
  input {
    flex-grow: 1;
    height: 2rem;
  }
  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0.1rem 2rem;
  }
`;

const Modal = () => {

  const { isOpenModal } = useContext(ModalContext);
  const {modalType} = isOpenModal;

  return (
    <ModalContainer>
        <ModalContent>
          {modalType === 1 && <NewFolder />}
          {modalType === 2 && <NewCodeArea />}
          {modalType === 3 && <NewCodeAreaAndFolder />}
          {modalType === 4 && <EditFolder />}
          {modalType === 5 && <EditCodeAreaTitle />}
          {modalType === 6 && <Loading />}

        </ModalContent>

    </ModalContainer>
  )
}

export default Modal