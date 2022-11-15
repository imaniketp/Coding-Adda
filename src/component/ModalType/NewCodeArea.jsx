import React,{useContext} from "react";
import { Header, Heading } from "../Modal";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { ModalArea } from "./NewFolder";
import { ModalContext } from "../../context/ModelContext";

const ModalInputs = styled.div`
  display: flex;
  input {
    width: 15rem;
    height: 2rem;
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  height: 2rem;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 2px;
`;

const NewCodeArea = () => {

const {setIsOpenModal} = useContext(ModalContext);

  return (
    <ModalArea>
      <IoCloseSharp style={{ float: "right" }} onClick={()=> setIsOpenModal(false)} />

      <Header>
        <Heading>Create New CodeArea</Heading>
      </Header>
      <ModalInputs>
        <input type="text" placeholder="Create New CodeArea" />
        <select>
          <option value="c++">C++</option>
          <option value="javascript">JavaScript</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </ModalInputs>
      <Button>Create New CodeArea</Button>
    </ModalArea>
  );
};

export default NewCodeArea;
