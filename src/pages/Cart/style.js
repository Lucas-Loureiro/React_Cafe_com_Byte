import styled from 'styled-components'

export const CardCart = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(1000, 90px);
    grid-row-gap: 50px;
    text-align: center;
    padding: 20px;
    overflow: scroll;
    background: #fff;
    margin-top: 82px;
    margin: auto;
    width: 70%;
    height: 600px;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 10px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
    &::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }
    #clear{
        width: 100%;
        height: 30px;
        background-color: #52057B;
        color: #fff;
        border: 0;
        border-radius: 6px;
        transition: 0.2s;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        text-align: center;
        margin: 10px 0;
        padding: 5px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover{
            background-color: #BC6FF1;
            color: #52057B;
        }
    }
    
    
`;

export const CartContainer = styled.div`
   display: grid;
   padding: 20px;
   
`;

export const CardProdutos = styled.div`
   display: flex;
   background-color: white;
   border: 1px solid #ebebeb;
   border-radius: 40px;
   justify-content: center;
   align-items: center;
   padding: 10px;
   width: auto;
   img{
       border-radius: 20px;
       width: 100px;
      
   }
   button{
       color: red;
       margin-left: auto;
       border: none;
       background: transparent;
       font-size: 30px;
   }
`;
export const CardResult = styled.div`
    display: flex;
    text-align: center;
    padding: 10px;
    background: #fff;
    margin: auto;
    width: 18%;
    height: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 10px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
`;
