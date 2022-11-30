import React,{useContext} from "react";
import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { BiEditAlt } from "react-icons/bi";
import { ModalContext } from "../../context/ModelContext";
import {CodeAreaContext} from "../../context/CodeAreaContext";
import { useNavigate } from 'react-router-dom'

const StyledRightComponent = styled.div`
  width: 60%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

const Heading = styled.h3`
  font-size: ${(props) => (props.size === "small" ? "1.25rem" : "1.75rem")};
  font-weight: 400;

  span {
    font-weight: 700;
  }
`;

const AddButton = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: black;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }
    &:hover{
        cursor: pointer;
    }
`;

const FolderCard = styled.div`
  margin-bottom: 1rem;
`;

const FolderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;
`;

const CodeAreaCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const Card = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 4px 0px #989898;
  border-radius: 8px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardContent = styled.div``;

const Logo = styled.img`
  width: 70px;
  margin-right: 1rem;
`;

const RightComponent = () => {

  const navigate = useNavigate();

  const { openModal } = useContext(ModalContext);
  const { folders, deleteFolder, deleteCard } = useContext(CodeAreaContext);


  return (
    <StyledRightComponent>
    <Header>
      <Heading size="large">
        My <span>CodeArea</span>
      </Heading>
      <AddButton onClick={() => openModal({
        show: true,
        modalType: 1,
        identifiers: {
          folderId: "",
          cardId: "",
        }
      })}> <span>+</span> New Folder</AddButton>
    </Header>
    <hr />

    {
      Object.entries(folders).map(([folderId, folder]) => (
        <FolderCard key={folderId}>
          <Header>
            <Heading size="small">
              {folder.title}
            </Heading>
            <FolderIcons>
              <IoTrashOutline onClick={() => deleteFolder(folderId)} />
              <BiEditAlt onClick={() => openModal({
                show: true,
                modalType: 4,
                identifiers: {
                  folderId: folderId,
                  cardId: "",
                }
              })} />
              <AddButton onClick={() => openModal({
                show: true,
                modalType: 2,
                identifiers: {
                  folderId: folderId,
                  cardId: "",
                }
              })}><span>+</span> New CodeArea</AddButton>
            </FolderIcons>
          </Header>

          <CodeAreaCards>
            {
              Object.entries(folder['codeareas']).map(([codeareaId, codearea]) => (
                <Card key={codeareaId} onClick={() => {
                  navigate(`/codearea/${folderId}/${codeareaId}`)
                }}>
                  <CardContainer>
                    <Logo src="icon.png" />
                    <CardContent>
                      <p>{codearea.title}</p>
                      <p>Language: {codearea.language}</p>
                    </CardContent>
                  </CardContainer>
                  <FolderIcons onClick={(e) => {
                    e.stopPropagation(); //stop click propagation from child to parent
                  }}>
                    <IoTrashOutline onClick={() => deleteCard(folderId, codeareaId)} />
                    <BiEditAlt onClick={() => openModal({
                      show: true,
                      modalType: 5,
                      identifiers: {
                        folderId: folderId,
                        cardId: codeareaId,
                      }
                    })} />
                  </FolderIcons>
                </Card>
              ))
            }
          </CodeAreaCards>
        </FolderCard>
      ))
    }
  </StyledRightComponent>
  );
};

export default RightComponent;
