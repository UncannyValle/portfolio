import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle, theme } from "./globalstyle"
import { ThemeProvider } from "styled-components"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
)
