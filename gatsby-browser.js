import React from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle, theme } from "./src/theme/globalstyle"

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
