import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Footer from "./Footer"
// import "../css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
