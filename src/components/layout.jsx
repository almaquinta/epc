import React, { useEffect } from "react"
// animaciones
// import AOS from "aos"
// import "aos/dist/aos.css"
import { Normalize } from "../styles/normalize"
import { GlobalStyle } from "../styles/layoutcss"
import { ThemeProvider } from "styled-components"
import { Theme } from "../styles/layoutcss"
import Header from "./header"
import Footer from "./footer"
import Ancla from "./anchorScroll"
import Whatsapp from "./whatsapp"
// console.log(GlobalStyle)
const Layout = props => {
  useEffect(() => {
    // AOS.init()
  })
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Normalize />
        <GlobalStyle />
        <Header />
        <div  className="page">
          {props.children}
        </div>
         <Footer />
      </>
      <Ancla></Ancla>
      <Whatsapp></Whatsapp>
    </ThemeProvider>
  )
}
export default Layout
