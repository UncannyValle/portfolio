import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    title: "Archivo, sans-serif",
    text: "Roboto, sans-serif",
    display: "Archivo, sans",
    display2: "Archivo, sans",
  },
  colors: {
    uncannyBlue: "#3F51B5",
    uncannyCyan: "cyan",
    uncannyOrange: "#ED6A5A",
    uncannyPlatinum: "#E9E3E6",
    uncannyYellow: "#FFBC0A",
    uncannyTurquoise: "#50C5B7",
    uncannyPurple: "#7c4dff",
  },
  mobile: "512px",
  tablet: "768px",
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
    --purple:#711c91;
    --pink:	#ea00d9;
    --cyan:#02ffff;
    --blue: #274e87;
    --black:#360568; 
  }
  
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: black;
    min-height:100vh;
    position: relative;
    padding-bottom: 7rem;
   
  }

  h1{
    font-family: ${({ theme }) => theme.font.display2};
    font-size: 4rem;
    color: var(--cyan);
    text-transform: uppercase;

  }
  h2{
    font-family: ${({ theme }) => theme.font.display2};
    font-size: 3rem;
    color: var(--cyan);
    margin:.5rem 0;    text-transform: uppercase;

  }
  h3{
    font-family: ${({ theme }) => theme.font.display2};
    text-align:center;
    font-size: 2rem;
    color: var(--white);    text-transform: uppercase;

  }
  a {
    text-decoration: none ;
    color:black;
    font-family: ${({ theme }) => theme.font.title};
 }  
 p{
   text-align: left;
 }
 @media (max-width: 1024px){
    h1{
       font-size: 3.5rem;
    }
    h2{
      font-size: 2.5rem;
    }
 }
 
  @media (max-width: 768px) {    
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      width: 90vw;
    }
  }
  @media (max-width: 520px) {
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  `
