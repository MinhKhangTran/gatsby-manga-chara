import React from "react"
import { GatsbyProvider } from "./src/context"
import "./src/css/main.css"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
