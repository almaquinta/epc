import React from "react"
import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"
const Wrapper = styled.a`
  position: fixed;
  top: 300px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.verde};
  z-index: 999;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.verde};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: ${({ theme }) => theme.colors.blanco};
  :hover {
    background-color: ${({ theme }) => theme.colors.blanco};
    color: ${({ theme }) => theme.colors.verde};
    transition: 0.3s;
  }
  .icon__Whatsapp {
    font-size: ${({ theme }) => theme.fontsize.large};
  }
`
const Whatsapp = () => {
  return (
    <Wrapper
      href="https://api.whatsapp.com/send?phone=51996050489&amp;text=Hola EPC me gustaria saber sobre sus servicios"
      target="_blanck"
    >
      <FaWhatsapp className="icon__Whatsapp"></FaWhatsapp>
    </Wrapper>
  )
}

export default Whatsapp
