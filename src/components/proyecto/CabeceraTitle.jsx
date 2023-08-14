import React from "react"
import Title  from "../title"
import styled from "styled-components"
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontsize.small};
  color: ${({ theme }) => theme.colors.azulOscuro}; ;
`
const CabeceraTitle = () => {
  return (
    <div className="container wrapper">
      <Title title='proyectos'></Title>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ea
        repudiandae debitis consequatur accusantium, explicabo soluta assumenda
        dolorum, nesciunt temporibus et alias enim porro aperiam voluptas saepe
        natus? Reiciendis quia obcaecati ratione tempora, expedita dolores
        praesentium cum accusantium quo, illum sunt eligendi nam sint, modi esse
        eos reprehenderit eum magnam.
      </Text>
    </div>
  )
}

export default CabeceraTitle
