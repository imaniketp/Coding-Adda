import React, {useContext, useState} from 'react'
import { Header,  CloseButton, Input } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../context/ModelContext'
import { CodeAreaContext } from '../../context/CodeAreaContext'

const EditCodeAreaTitle = () => {
  const { isOpenModal, closeModal } = useContext(ModalContext);
  const { editCodeareaTitle, folders } = useContext(CodeAreaContext);

  const { folderId, cardId } = isOpenModal.identifiers;
  const [codeareaTitle, setCodeareaTitle] = useState(folders[folderId].codeareas[cardId].title);

  return (
    <>
      <Header>
        <h2>Edit Card Title</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <Input>
        <input type="text" onChange={(e) => setCodeareaTitle(e.target.value)} />
        <button onClick={() => {
          editCodeareaTitle(folderId, cardId, codeareaTitle)
          closeModal()
        }}>Update Title</button>
      </Input>
    </>
  )
}

export default EditCodeAreaTitle;