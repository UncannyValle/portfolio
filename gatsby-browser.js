import React from "react"
import { GlobalStyle } from "./globalstyle"
import Layout from "./src/components/layout"
export const wrapRootElement = ({element}) => (
  <>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </>
)
