import React from "react"
import { GlobalStyle, theme } from "./src/theme/globalstyle"
import { ThemeProvider } from "styled-components"

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)
