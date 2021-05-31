import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  font: {
    title: "Titillium Web, sans-serif",
    text: "Roboto, sans-serif",
    display: "Audiowide, sans",
    display2: "Audiowide, sans",
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
  mobile: "520px",
  tablet: "768px",
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
    --purple:#711c91;
    --pink:	#ea00d9;
    --cyan:#0abdc6;
    --blue: #133e7c;
    --black:#091833; 
  }
  
  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.text};
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: var(--blue);
    min-height:100vh;
    position: relative;
    padding-bottom: 7rem;
    
  }

  h1{
    font-family: ${({ theme }) => theme.font.display2};
    font-size: 5rem;
    color: var(--pink);

  }
  h2{
    font-family: ${({ theme }) => theme.font.display2};
    font-size: 3rem;
    color: cyan;
    margin:.5rem 0;
  }
  h3{
    text-align:center;
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

 }
`
