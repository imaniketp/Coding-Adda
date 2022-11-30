import React,{useContext, useState} from "react";
import { Header, CloseButton } from "../Modal";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { ModalContext } from "../../context/ModelContext";
import { CodeAreaContext } from '../../context/CodeAreaContext'
import Select from 'react-select';

const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;
  input {
    flex-grow: 1;
    height: 2rem;
  }
  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`;



const NewCodeArea = () => {

  const { isOpenModal, closeModal } = useContext(ModalContext);
  const { addCodearea } = useContext(CodeAreaContext);

  const languageOptions = [
    { value: "cpp", label: "cpp" },
    { value: "java", label: "java" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
  ];

  const {folderId} = isOpenModal.identifiers;
  const [cardTitle, setCardTitle] = useState("");
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
      <Header>
        <h2>Create New CodeArea</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <InputWithSelect>
        <input
          type='text'
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />
        <button onClick={() => {
          addCodearea(folderId, cardTitle, language.label)
          closeModal();
        }}> Create CodeArea </button>
      </InputWithSelect>
    </>
  );
};

export default NewCodeArea;
