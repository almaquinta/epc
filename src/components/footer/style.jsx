import styled from "styled-components"
import { Link } from "gatsby"

export const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.azulClaro};
  color: ${({ theme }) => theme.colors.blanco};
  a {
    color: ${({ theme }) => theme.colors.blanco};
  }
`
export const FooterCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
`
export const FooterNosotros = styled.div`
  align-self: center;
  justify-self: center;
`
export const FooterServicio = styled.div`
  justify-self: center;
`
export const Title = styled.h2`
  margin: 0 0 1rem;
  @media (max-width: 640px) {
    text-align: center;
  }
`
export const ServicioLink = styled(Link)`
  color: ${({ theme }) => theme.colors.blanco};
  display: Block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  @media (max-width: 640px) {
    border: 2px solid ${({ theme }) => theme.colors.blanco};
    padding: 0.5rem 1rem;
    border-radius: 10px;
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.azulOscuro};
      transition: 0.3s;
      background-color: ${({ theme }) => theme.colors.blanco};
      color: ${({ theme }) => theme.colors.azulOscuro};
    }
  }
`
export const FooterInfo = styled.div`
  justify-self: center;
  svg {
    margin-right: 0.5rem;
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`
export const Telephono = styled.div``
export const Email = styled.div``
// foooter pie de pagina
export const FooterLink = styled.div`
  border-top: 2px solid ${({ theme }) => theme.colors.blanco};
  /* padding: 1rem 0; */
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 2rem;
  }
  @media (max-width:640px){
    text-align: center;
  .container {
      padding-bottom: .5rem;
      /* padding-top: .5rem; */
      gap:1rem
  }
    img{
      margin:0 auto;
    }
  }

`
export const LogoEpc = styled.img`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.verde};
  padding: 1rem 1.5rem;
`
export const Text = styled.span`
  align-self: center;
`
export const SocialMedia = styled.div`
  display: flex;
  /* align-items:center; */
`
export const LinkSocial = styled.div`
  padding: 0 1rem;
  height: 100%;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  border-right: 2px solid ${({ theme }) => theme.colors.blanco};
  &:first-child {
    border-left: 2px solid ${({ theme }) => theme.colors.blanco};
  }
`
export const BoxInfo = styled.div`
  margin-bottom: 0.5rem;
  &.btn {
    @media (max-width: 640px) {
      border: 2px solid ${({ theme }) => theme.colors.blanco};
      padding: 0.5rem 1rem;
      border-radius: 10px;
      &:hover {
        border: 2px solid ${({ theme }) => theme.colors.azulOscuro};
        transition: 0.3s;
        background-color: ${({ theme }) => theme.colors.blanco};
        color: ${({ theme }) => theme.colors.azulOscuro};
        a {
          color: ${({ theme }) => theme.colors.azulOscuro};
        }
      }
    }
  }
  /* display:flex; */
  /* align-items:center; */
`
