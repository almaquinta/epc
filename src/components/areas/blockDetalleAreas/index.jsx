import React from "react"
import styled from "styled-components"
import {ItemCard,CardInfo,Carditle,CardText,CardImg} from "../../card"
import Title from "../../title"
export const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width:640px){
    grid-template-columns: 1fr ;
  }
`
const blockDetalleAreas = props => {
  return (
    <div className="container wrapper">
      <Title center={props.center} title={props.title}></Title>
      <Wrapper>
        {props.data
          ? props.data.map((dt, key) => {
              let { title, text, url, img } = dt
              text = text.substr(0, 100) + " ..."
              return (
                <ItemCard center='true' key={key} to={url}>
                  <CardInfo color={props.color}>
                  <CardImg imagenWidth={props.imagenWidth} src={img}></CardImg>
                    <Carditle colorTitle={props.colorTitle}>
                      {title}
                    </Carditle>
                    <CardText colorText={props.colorText}>
                      {text}
                    </CardText>
                    {/* <CardLink colorMore={props.colorMore}>
                      Leer M&aacute;s
                    </CardLink> */}
                  </CardInfo>
                  
                </ItemCard>
              )
            })
          : null}
      </Wrapper>
    </div>
  )
}

export default blockDetalleAreas
