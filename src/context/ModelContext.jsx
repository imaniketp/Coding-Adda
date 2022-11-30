import { createContext, useState } from "react";

export const ModalContext = createContext();

function ModalProvider({children}){
const initialModalFields = {
    show : false,
    modalType : "",
    identifiers : {
        folderId : "",
        cardId : "",
    }
}
const [isOpenModal, setIsOpenModal] = useState({...initialModalFields});


const openModal = (value) => {
    setIsOpenModal(value)
}

const closeModal = (value) =>{
    setIsOpenModal({...initialModalFields})
}

const modalFeatures = {
    isOpenModal: isOpenModal,
    openModal: openModal,
    closeModal: closeModal,
}

    return(
        <ModalContext.Provider value={modalFeatures}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;