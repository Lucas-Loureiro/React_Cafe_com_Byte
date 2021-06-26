import styled from 'styled-components'
import { Link } from 'react-router-dom'





export const HamburguerContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: #511281;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px){
        width: 100%;
    }
`;

export const CloseIcon = styled.div`
    color: #fff;
    transition: 0.2s ease-in-out;
   
    &:hover{
        transform:rotate(90deg);
        transition: 0.2s ease-in-out;
    }
    
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    
    
`;

export const HamburguerMenu = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(auto, 30px);
    grid-row-gap: 20px;
    text-align: center;
    padding: 30px;
    overflow: scroll;
    border-top: 1px solid white;
    margin-top: 82px;
    &::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }
    max-height: 90%;
    


    @media screen and (max-width: 480px){
        grid-template-rows: repeat(auto, 20px);
    }
`;

export const HamburguerLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    padding: 10px;
   
    

    &:hover{
        color: #BC6FF1;
        transform: scale(1.25);
        transition: 0.2 ease-in-out;
    }
`;
export const ButtonEdit = styled(Link)`
    background-color: #BC6FF1;
    margin: auto;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    border-radius: 20px;
    border: 1px solid transparent;
    transition: 0.2 ease-in-out;
    color: #511281;
    &:hover{
        background-color: #511281;
        color: #BC6FF1;
        border-color: #BC6FF1;
        transition: 0.2 ease-in-out;
    }
`;


