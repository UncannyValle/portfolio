import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    title: "Titillium Web, sans-serif",
    text: "Roboto, sans-serif",
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text}
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    height:auto;
  }
  h1{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 5rem;
     color: #2c26ff;

  }h2{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 2rem;
    color: #2c26ff;
  }
  a {
    text-decoration: none ;
    color:black;
    font-family: ${({ theme }) => theme.font.title};
 }  
`
