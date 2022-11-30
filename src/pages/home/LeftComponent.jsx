import React,{useContext} from 'react'
import styled from 'styled-components'
import icon from '../../assest/icon.png'
import { ModalContext } from '../../context/ModelContext'


const StyledLeftComponent = styled.div`
    position: fixed;
    width: 40%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: #241f21;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContentContainer = styled.div`
    text-align: center;
`
const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;

`
const MainHeading = styled.h1`
    font-size: 2.5rem;
    font-weight: 200;
    color: #fff;
    margin-bottom: 0.75rem;

    span{
    font-weight: 700;
    }
`
const SubHeading = styled.p`
    font-size: 1.75rem;
    color: #fff;
    opacity: 0.7;
    margin-bottom: 1.5rem;
`

const AddPlayground = styled.button`
    padding: 0.25rem 1.5rem;
    border-radius: 30px;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 2rem;
        font-weight: 700;
    }
`

const LeftComponent = () => {

const {openModal} = useContext(ModalContext);

  return (
    <StyledLeftComponent>
        <ContentContainer>
            <Logo src={icon} alt='logo' />
            <MainHeading> <span>Coding</span> Adda</MainHeading>
            <SubHeading>Code.Compile..Debug...</SubHeading>
            <AddPlayground onClick={() => openModal({
                show : true,
                modalType : 3,
                identifiers : {
                    folderId : "",
                    cardId : "",
                }
            })} ><span>+</span> Create New CodeArea</AddPlayground>
        </ContentContainer>
    </StyledLeftComponent>
  )
}

export default LeftComponent