import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    font-family: 'Open Sans', sans-serif;
    font-size:62.5%;
  }

  a {
    text-decoration:none;
  }

  li {
    list-style: none;
  }

`
export default GlobalStyle