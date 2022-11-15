import React, { useContext } from "react";
import { Header, Heading } from "../Modal";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { ModalArea } from "./NewFolder";
import { ModalContext } from "../../context/ModelContext";

const ModalInputs = styled.div`
  
  input {
    margin: 1rem;
    width: 15rem;
    height: 2rem;
    float: right;
  }
`;
const InnerModal = styled.div`
  display: flex;
  align-items: center;
`

const Button = styled.button`
float: right;
background: black;
color: white;
height: 2rem;
margin-right: 1rem;
padding: 0.5rem 2rem;
border-radius: 2px;
`;

const NewCodeAreaAndFolder = () => {

const {setIsOpenModal} = useContext(ModalContext);

  return (
    <ModalArea>
      <IoCloseSharp style={{ float: "right" }} onClick={()=> setIsOpenModal(false)} />
      <Header>
        <Heading>Create New Folder & CodeArea</Heading>
      </Header>

      <ModalInputs>
        <InnerModal>
          <label id="codearea">Enter CodeArea Name </label>
          <input type="text" id="codearea" />
        </InnerModal>
        <InnerModal>
          <label id="folder">Enter CodeArea Name </label>
          <input type="text" id="folder" />
        </InnerModal>
      </ModalInputs>
      <select style={{height: '2.5rem', width: '8rem'}}>
        <option value="c++">C++</option>
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
      </select>
      <Button>Create New Playground</Button>
    </ModalArea>
  );
};

export default NewCodeAreaAndFolder;
