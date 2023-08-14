import React from "react"
import styled from "styled-components"
export const WrapperPolitica = styled.div`
  max-width: 65rem;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontsize.medium};
`
export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.azulOscuro};
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  margin: 0;
  text-transform: uppercase;
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.azulOscuro};
`
const Lista = styled.ul`
  margin-left: 2rem;
`
const Item = styled.li`
  color: ${({ theme }) => theme.colors.azulOscuro};
  margin-bottom: 0.7rem;
`
const Politica = () => {
  return (
    <div className="container wrapper">
      <WrapperPolitica>
        <Title>Politica Integrada</Title>
        <Text>
          En EPC INGENIERÍA, el enfoque de la Política del Sistema Integrado de
          Gestión es brindar a nuestros clientes servicios de diseño,
          ingeniería, fabricación, soldadura especial, pintado, montaje de
          estructuras metalmecánicas, y recuperación de componentes de equipos
          pesados, cumpliendo compromisos legales y requisitos en cuanto a
          costo, plazo, calidad, seguridad y salud en el trabajo y Medio
          Ambiente.
        </Text>
        <Text>Para lo cual nos comprometemos a:</Text>
        <Lista>
          <Item>	Cumplir con la normativa legal vigente y requisitos aplicables a la organización en materia de Calidad, Seguridad y Salud en el trabajo y Medio Ambiente.</Item>
          <Item>	Planificar y desarrollar todas las actividades proporcionando condiciones de trabajo seguras y saludables para la prevención de lesiones y deterioros de la salud a fin de eliminar los peligros y reducir los riesgos significativos.</Item>
          <Item>	Garantizar la participación, consulta de los trabajadores y sus representantes.</Item>
          <Item>	Proveer la capacitación, sensibilización y competencia adecuada para todo el personal que labora en la organización, a fin de contar con personal competente, así como promover y motivar la conciencia en materia de Calidad, Seguridad y Salud en el trabajo y medio ambiente.</Item>
          <Item>	Garantizar la protección del medio ambiente, a través de la prevención de la contaminación y reduciendo la generación de residuos sólidos.</Item>
          <Item>	Mejorar continuamente el desempeño de nuestro Sistema Integrado de Gestión. </Item>
        </Lista>
        {/* <Text>
        Edwin Palacios - Gerente General.
        </Text> */}
      </WrapperPolitica>
    </div>
  )
}

export default Politica
