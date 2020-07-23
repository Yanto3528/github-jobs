import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  } 
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.2rem;
    font-family: "Roboto", sans-serif;
    line-height: 1.5;
    color: ${({ theme }) => theme.body};
    background-color: #F6F7FB;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }

  ul {
    list-style: none;
  }
`;
