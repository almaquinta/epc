import React from "react"
import styled from "styled-components"
import DataValores from "../../../data/valores"
import Title from "../../title"
const ItemCuadrado = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.azulOscuro};
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`
// const Title = styled.h2`
//   color: ${({ theme }) => theme.colors.azulOscuro};
//   font-size: ${({ theme }) => theme.fontsize.extralarge};
//   margin: 0 0 2rem 0;
//   text-transform:uppercase;
// `
// const Text = styled.p`
//   max-width: 50rem;
//   color: ${({ theme }) => theme.colors.azulOscuro};
//   margin-bottom: 3rem;
// `
const WrapperProceso = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  /* grid-gap: 2rem; */
  .active {
    background-color: ${({ theme }) => theme.colors.verde};
  }
`
const ItemProceso = styled.div`
  text-align: center;
  position: relative;
  margin-bottom:1rem;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-top: 3px solid ${({ theme }) => theme.colors.verde};
    border-top-style: dashed;
    z-index: -1;
    position: absolute;
    bottom: 9.5px;
  }
  :first-child ${ItemCuadrado} {
    background-color: ${({ theme }) => theme.colors.verde};
  }
`
const ItemTitle = styled.h3`
  text-transform: uppercase;
  padding-bottom: 1.5rem;
`
const Img = styled.img``

const Wrapper = styled.div`
  position: relative;
  /* &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    border-top: 3px solid ${({ theme }) => theme.colors.verde};
    border-top-style: dashed;
    z-index: -1;
    position: absolute;
    bottom: 9.5px;
  } */
`
const Proceso = (props) => {
  return (
    <div className="container wrapper">
      <Wrapper>
      <Title backtext={props.backtext}  title={props.title}></Title>
        {/* <Text>
          Nuestro proceso de trabajo implica varios pasos para llevar la
          excelencia y calidad que nuestros clientes merecen. Nos preocupamos
          por que nuestros proyectos se ejecuten en tiempo, con calidad y de
          forma costo eficiente.
        </Text> */}
        <WrapperProceso>
          {DataValores.map((valor, key) => {
            let { img, title } = valor
            return (
              <ItemProceso key={key}>
                <Img src={img}></Img>
                <ItemTitle>{title}</ItemTitle>
                <ItemCuadrado></ItemCuadrado>
              </ItemProceso>
            )
          })}
          {/* <ItemProceso>
            <Img src={Img01}></Img>
            <ItemTitle>Costo Eficiencia</ItemTitle>
            <ItemCuadrado className="active"></ItemCuadrado>
          </ItemProceso>
          <ItemProceso>
            <Img src={Img01}></Img>
            <ItemTitle>Calidad</ItemTitle>
            <ItemCuadrado></ItemCuadrado>
          </ItemProceso>
          <ItemProceso>
            <Img src={Img01}></Img>
            <ItemTitle>Tiempo Exacto</ItemTitle>
            <ItemCuadrado></ItemCuadrado>
          </ItemProceso>
          <ItemProceso>
            <Img src={Img01}></Img>
            <ItemTitle>Diseño Visual</ItemTitle>
            <ItemCuadrado></ItemCuadrado>
          </ItemProceso> */}
        </WrapperProceso>
      </Wrapper>
    </div>
  )
}
export default Proceso
