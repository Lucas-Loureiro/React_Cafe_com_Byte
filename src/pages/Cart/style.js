import styled from 'styled-components'

export const CardCart = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(auto, 30px);
    grid-row-gap: 40px;
    text-align: center;
    padding: 20px;
    overflow: scroll;
    background: #fff;
    margin: auto;
    margin-top: 82px;
    width: 40%;
    height: 600px;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 10px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
    &::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }
    
    
`;

export const CartContainer = styled.div`
   display: flex;
`;

export const CardProdutos = styled.div`
   display: flex;
   background-color: white;
   border: 1px solid #ebebeb;
   height: 30px;
   border-radius: 40px;
   justify-content: center;
   align-items: center;
   transition: 0.2 ease-in-out;
   padding: 10px;
   &:hover{
    transform: scale(0.9);
    transition: 0.2 ease-in-out;
   }
`;
export const CardResult = styled.div`
    display: flex;
    text-align: center;
    padding: 70px;
    background: #fff;
    margin: auto;
    margin-top: 550px;
    margin-left: 0.5px;
    width: 10%;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 10px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
`;
