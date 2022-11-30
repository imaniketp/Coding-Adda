import React, { useContext, useState } from "react";
import { Header, CloseButton } from "../Modal";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { ModalContext } from "../../context/ModelContext";
import { CodeAreaContext } from "../../context/CodeAreaContext";
import Select from 'react-select';


const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
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

const NewCodeAreaAndFolder = () => {

  const { closeModal } = useContext(ModalContext);
  const { addCodeareaAndFolder } = useContext(CodeAreaContext);

  const languageOptions = [
    { value: "cpp", label: "cpp" },
    { value: "java", label: "java" },
    { value: "javascript", label: "javascript" },
    { value: "python", label: "python" },
  ];

  const [codeareaName, setCodeareaName] = useState("")
  const [folderName, setFolderName] = useState("")
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };

  return (
    <>
       <Header>
        <h2>Create New CodeArea & Create New Folder</h2>
        <CloseButton onClick={() => closeModal()}>
          <IoCloseSharp />
        </CloseButton>
      </Header>
      <InputWithSelect>
        <label>Enter Folder Name</label>
        <input type='text' onChange={(e) => setFolderName(e.target.value)} />

        <label>Enter Card Name</label>
        <input type='text' onChange={(e) => setCodeareaName(e.target.value)} />

        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />

        <button onClick={() => {
          addCodeareaAndFolder(folderName, codeareaName, language.label)
          closeModal();
        }}> Create Codearea </button>
      </InputWithSelect>
    </>
  );
};

export default NewCodeAreaAndFolder;
