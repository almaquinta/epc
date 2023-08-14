// Este componente es para listar los elementos con su tipo de estilo
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ItemCard = styled(Link)`
  display: block;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 13px 1px;
  transition: all 300ms ease-in-out 0s;
  height: 100%;
  text-align:${({center})=>(center?'center':null)};
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 13px 1px;
  }
`
export const CardImg = styled.img`
  width: ${props => (props.imagenWidth ? "auto" : "100%")};
  height: ${props => (props.imagenWidth ? "auto" : "200px")};
  object-fit: cover;
  margin-top: ${props => (props.imagenWidth ? "2rem" : "auto")};
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => (props.imagenWidth ? "1rem" : "auto")};
`
export const Carditle = styled.h3`
  text-transform: uppercase;
  color: ${({ colorTitle, theme }) =>
    colorTitle ? colorTitle : theme.colors.azulOscuro};
`
export const CardText = styled.p`
  color: ${({ colorText, theme }) =>
    colorText ? colorText : theme.colors.azulOscuro};
`
export const CardLink = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ colorMore, theme }) =>
    colorMore ? colorMore : theme.colors.verde};
`
export const CardInfo = styled.div`
  padding: 1rem 3rem;
  ${Carditle}, ${CardText} {
    color: ${props => props.color};
  }
  @media (max-width:800px){

  padding: 0 1rem;
  }
`
// plantilla de estilos de una card
/**
 * props url el link hacia donde va enlazado
 * props img =la imagen de cada item
 * props color= el color de todo item menos del more
 * props colorText el color del texto solo de este
 * props colorTitle el color del titulo es
 */
export const Card = props => {
  return (
    <ItemCard to={props.url}>
      <CardImg imagenWidth={props.imagenWidth} src={props.img}></CardImg>
      <CardInfo color={props.color}>
        <Carditle colorTitle={props.colorTitle}>{props.title}</Carditle>
        <CardText colorText={props.colorText}>{props.text}</CardText>
        {props.More ? (
          <CardLink colorMore={props.colorMore}>Saber M&aacute;s</CardLink>
        ) : null}
      </CardInfo>
    </ItemCard>
  )
}
// recorrer una card
const Index = props => {
  return props.data
    ? props.data.map((dt, key) => {
        let { title, text, url, img } = dt
        text = text.substr(0, 100) + " ..."
        return (
          <Card
            imagenWidth={props.imagenWidth}
            url={url}
            key={key}
            img={img}
            title={title}
            text={text}
          ></Card>
        )
      })
    : null
}
export default Index
