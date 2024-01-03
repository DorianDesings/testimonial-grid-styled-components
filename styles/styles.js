import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../src/constants/colors';

export const GlobalStyles = createGlobalStyle`
   *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: sans-serif;
    background-color: ${COLORS.bgColor};
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
`;
