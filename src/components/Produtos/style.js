import styled from 'styled-components';

export const ProdutosContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #ebebeb;
  color: #000;
  
`;

export const ProdutoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
 
`;

export const ProdutoCard = styled.div`
  margin: 1rem 2rem;
  line-height: 2;
  width: 350px;
  background: #fff;
  padding: 20px;
  border-radius: 20px;  
`;

export const ProdutoImg = styled.img`
  height: 200px;
  min-width: 200px;
  max-width: 100%;
  border-radius: 20px;
  
`;



export const ProdutoTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProdutoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProdutoDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProdutoPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProdutoButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #52057B;
  color: #fff;
  transition: 0.2 ease-out;
  border-radius: 40px;
  &:hover {
    background: #BC6FF1;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #52057B;
  }
`;


export const Cart = styled.button`
  border: transparent;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #52057B;
  position: fixed;
  bottom: 5%;
  right: 5%;
  font-size: 150%;
  color: white;
  transition: 0.2 ease-out;

  

  &:hover{
    background: #BC6FF1;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #52057B;
  }
  
  
`;

