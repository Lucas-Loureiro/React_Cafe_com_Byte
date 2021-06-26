import styled from 'styled-components'
import { Link } from 'react-router-dom'
import font from '../../assets/fonts/Aquire.otf'
import { GiHamburgerMenu } from 'react-icons/gi'

export const Nav = styled.nav`
    background: #52057B;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-family: 'Aquire-Light';

`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    @media screen and (max-width: 400px){
        top: 10px;
        left: 25px;
        font-size: 15px;

    }
    
    @font-face {
        font-family: 'Aquire';
        src: url(${font}) format('opentype');
    }
    font-family: 'Aquire';
`;

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

  
`;


export const Hamburguer = styled( GiHamburgerMenu )`
    font-size: 2rem;
    transform: translate(-120%, 70%);
`;






