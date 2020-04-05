import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    title: "Montserrat Subrayada, sans-serif",
    text: "Montserrat, sans-serif",
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
    background-color: '#f7fafc';
  }
  h1{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 4rem;
  }h2{
    font-family: ${({ theme }) => theme.font.title};
    font-size: 2rem;
  }
  a {
    text-decoration: none ;
    color:black;
 }  
`
