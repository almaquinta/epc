import React, { useState } from "react"
import { Header } from "./style"
import Hamburguer from "./burguer"
import { Link } from "gatsby"
import Logo from "../../assets/images/logoHeader.png"
import NavBar from "./nav"
const Index = () => {
  const [open, setOpen] = useState(false)
  return (
    <Header>
      <div className="inside container">
        <Link className='LinkLogo' to="/">
          <img src={Logo} alt="EPC ingenieria" />
        </Link>
        <NavBar open={open} />
        <Hamburguer open={open} setOpen={setOpen} />
      </div>
    </Header>
  )
}

export default Index
