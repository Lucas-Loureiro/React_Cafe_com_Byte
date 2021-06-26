import styled from 'styled-components';

export const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
  

    form {
        background-color: #fff;
        margin-top: 100px;
        padding: 30px;
        border-radius: 10px;
        align-items:center;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    form input {
        width: 100%;
        margin: 10px 0;
        border: 0;
        margin-bottom: 10px;
        padding: 6px;
        color: #303030;
    }

    

    form button{
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

        &:hover{
            background-color: #BC6FF1;
            color: #52057B;
        }

}

    form h1{
        color: #BC6FF1;
    }
  
`;
export const CardCategorias = styled.div`
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
    width: 70%;
    height: 600px;
    border-radius: 20px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 10px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
    &::-webkit-scrollbar{
        width: 0;
        background: transparent;
    }

    button{
        margin-left: 10px;
        background-color: transparent;
        border: transparent;
        color: red;
        &:hover{
            
            cursor: pointer;
        }
    }

    h1{
        color: #BC6FF1;
    }
    
    
`;




