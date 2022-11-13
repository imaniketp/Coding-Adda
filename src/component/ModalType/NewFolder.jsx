import React from "react";
import { Header, Heading } from "../Modal";
import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";

export const ModalArea = styled.div`
  padding: 0 1rem;
`

const ModalInputs = styled.div`
  display: flex;
  input {
    width: 15rem;
    height: 2rem;
  }
`;

const Button = styled.button`
  background: black;
  color: white;
  height: 2rem;
  margin: 0 0 0 2rem;
  padding: 0.5rem 2rem;
  border-radius: 2px;
`;
const NewFolder = () => {
  return (
    <ModalArea>
      <IoCloseSharp style={{ float: "right" }} />
      <Header>
        <Heading>Create New Folder</Heading>
      </Header>

      <ModalInputs>
        <input type="text" placeholder="Enter folder name" />
        <Button>Create Folder</Button>
      </ModalInputs>
    </ModalArea>
  );
};

export default NewFolder;
