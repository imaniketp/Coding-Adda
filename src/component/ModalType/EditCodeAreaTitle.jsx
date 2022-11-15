import React, {useContext} from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModelContext'
const EditCodeAreaTitle = () => {
  const {setIsOpenModal} = useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Edit CodeArea</Heading>
        <IoCloseSharp onClick={() => setIsOpenModal(false)}/>
      </Header>
      <p>Enter New Name: <input type="text" /></p>
      <button>Edit CodeArea</button>
    </>
  )
}

export default EditCodeAreaTitle;