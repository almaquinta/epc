import React from "react"
import styled from "styled-components"
// import {AiOutlineRight} from 'react-icons/ai'
const CalidadWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.azulOscuro};
  color: ${({ theme }) => theme.colors.blanco};
  .container {
    max-width: 65rem;
    /* padding:0; */
    text-align: center;
    p {
      font-size: ${({ theme }) => theme.fontsize.medium};
    }
  }
  @media (min-width: 1440px) {
    .container {
      padding: 2rem 0;
    }
  }
`
const Title = styled.h2`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  margin: 0 0 1rem;
`
const Lista = styled.ul`
  margin-left: 1rem;
`
const Item = styled.li`
  font-size: ${({ theme }) => theme.fontsize.medium};
  list-style: none;
  margin-bottom: 0.5rem;
`
const Calidad = () => {
  return (
    <CalidadWrapper>
      <div className="container wrapper">
        <Title>OBJETIVOS DEL SISTEMA INTEGRADO DE GESTIÓN</Title>
        <p>
          En EPC, somos una empresa que brinda a nuestros clientes servicios de
          metalmecánica cumpliendo compromisos legales y requisitos en cuanto a
          costo, plazo, calidad, seguridad y salud en el trabajo. A fin de
          satisfacer las necesidades de nuestros clientes hemos definido los
          objetivos del Sistema Integrado de Gestión:
        </p>
        <Lista>
          <Item>Incrementar la satisfacción de nuestros clientes</Item>	
          <Item>Identificar el cumplimiento de los requisitos legales y aplicables</Item>	
          <Item>Lograr mantener en 0 el récord de accidentes e incidentes </Item>	
          <Item>Mejorar la eficacia y la eficiencia de la gestión de Seguridad y Salud Ocupacional de la Organización y Medio Ambiente</Item>	
          <Item>Atender a la consultas y sugerencias de los trabajadores y sus representantes</Item>	
          <Item>Aumentar las competencias del personal, generando participación y consultas, sensibilizando y motivando en la conciencia en materia de calidad, seguridad y salud en el trabajo y medio Ambiente. Cerrar oportunamente las acciones correctivas presentadas.</Item>	
          <Item>Minimizar las salidas no conformes</Item>	
          <Item>Asegurar la operatividad de los equipos</Item>	
          <Item>Minimizar los posibles impactos ambientales generados en el desarrollo de nuestras actividades</Item>	

        </Lista>
      </div>
    </CalidadWrapper>
  )
}
export default Calidad
