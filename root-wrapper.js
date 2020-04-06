import React from "react"
import Index from "./src/pages/index"
import { GlobalStyle, theme } from "./globalstyle"
import { ThemeProvider } from "styled-components"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Index>{element}</Index>
  </ThemeProvider>
)
