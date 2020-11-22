import React from "react"

export const GatsbyContext = React.createContext()

export const GatsbyProvider = ({ children }) => {
  return <GatsbyContext.Provider>{children}</GatsbyContext.Provider>
}

export const useGlobalContext = () => {
  return React.useContext(GatsbyContext)
}
