import React from "react"
import styled from "styled-components"
const Wrapper=styled.div` 
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(200px,  1fr));
  gap:2rem;
`
const Item=styled.div`
  color:${({theme})=>theme.colors.azulOscuro};
  text-align:center;
`
const Title=styled.h2`
  margin-bottom:2rem;
`
const Text=styled.p``
const Hero = props => {
  return (
    <div className="container wrapper">
      <Wrapper>
        <Item>
          <Title>MISI&Oacute;N</Title>
          <Text>Ser una empresa distinguida por su ética profesional, por su capacidad e innovación, respetando siempre los estándares de seguridad y protección del medio ambiente, manteniendo la calidad de nuestro trabajo, con una constante vocación de servicio al cliente.</Text>
        </Item>
        <Item>
          <Title>VISI&Oacute;N</Title>
          <Text>Ser reconocidos como una empresa líder en la Ejecución de Servicios y Proyectos; dedicada a brin-dar soluciones Integrales en la construcción y mantenimiento, con el objetivo de satisfacer las nece-sidades de nuestros clientes.</Text>
        </Item>
      </Wrapper>
    </div>
  )
}

export default Hero
