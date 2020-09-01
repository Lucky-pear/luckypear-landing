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
`