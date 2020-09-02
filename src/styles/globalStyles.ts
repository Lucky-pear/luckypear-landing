import { createGlobalStyle } from "styled-components";
import Axis from '../assets/fonts/Axis_Extrabold.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Axis';
    src:url(${Axis}) format('opentype');
  }
  * {
    font-family: 'Roboto';
    font-size:16px;
    font-weight: 400;
    
    box-sizing: border-box;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  textarea, input { 
    border: none;
    outline: none; 
    resize: none;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active  {
    /* box-shadow: 0 0 0 30px white inset; */
    transition: background-color 5000s ease-in-out 0s;
  }

  a {
    text-decoration: none;
  }
`