import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const FooterContainer = styled.footer`

  margin-top: 2rem;
  padding: 1rem;
  background-color: #52057B;
  position: relative;
  padding: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Icon = styled(Link)`
    color: #fff;
    margin-left: 20px;
    transform: scale(2.0);

 
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;


export const Copy = styled.div`
    display: flex;
    justify-content: center;
    color: white;
   
 
`;