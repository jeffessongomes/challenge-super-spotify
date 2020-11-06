import {createGlobalStyle} from 'styled-components';

import wallpaper from '../assets/img/wallpaper.jpg';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: url(${wallpaper});
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button{
    font-family: 'Robot Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }
  button{
    cursor: pointer;
  }
`;
