import { createGlobalStyle } from 'styled-components';
import font1 from '../assets/fonts/Aquire-Light.otf'

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        @font-face {
            font-family: 'Aquire-Light';
            src: url(${font1}) format('opentype');
        }
        font-family: 'Aquire-Light', sans-serif;
    }
    body{
        background: #ebebeb;
    }
`;