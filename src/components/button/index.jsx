import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const Button = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blanco};
  text-align: center;
  font-weight: bold;
  justify-content:${props=>props.as?null:'center'};
  border: 2px solid
    ${({ theme, primary }) =>
      primary ? theme.colors.azulOscuro : theme.colors.verde};
  border-radius: 5px;
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.azulOscuro : theme.colors.verde};
  :hover {
    color: ${({ theme, primary }) =>
      primary ? theme.colors.azulOscuro : theme.colors.verde};
    background-color: ${({ theme }) => theme.colors.blanco};
  }
`
// primary por default siendo true es azulOscuro
// primary siendo false es verde
const Index = props => {
  return (
    <Button
      target={props.target ? "_blanck" : null}
      as={props.type}
      href={props.url}
      primary={props.primary}
      to={props.url}
    >
      {props.children}
      {props.text}
    </Button>
  )
}
export default Index
