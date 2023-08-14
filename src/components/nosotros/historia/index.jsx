import React from "react"
import Title from "../../title"
import styled from "styled-components"
import img from "../../../assets/images/historia.jpg"
import { AiOutlineRight } from "react-icons/ai"
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
const Info = styled.div``
const Text = styled.p``
const List = styled.ul``
const Item = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  .icon-right {
    color: ${({ theme }) => theme.colors.verde};
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`
const ImgWrapper = styled.div``
const Img = styled.img`
  width: 100%;
`
const Historia = () => {
  return (
    <div className="container wrapper">
      <Title
        backtext={`'HISTORIA'`}
        normal="true"
        title="nuestra historia"
      ></Title>
      <Wrapper>
        <Info>
          <Text></Text>
          <p><b>ARQUITECTURA E INGENIERIA EN PROYECTOS SAC</b>, en adelante EPC INGENIERIA es una empresa peruana: </p>
          <List>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              En el 2016 iniciamos operaciones con diseño y fabricación e
              instalación de estructuras metálicas en el sector retail de la
              ciudad Arequipa
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
               En el 2017 fue nuestro primer proyecto en el sector de energía, Proyecto Fotovoltaico Rubi de 140 MW, ubicada en Moquegua
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
               En el 2019 iniciamos operaciones en el sector minería e industria, participando en los proyectos de Marcobre en Ica, ampliación de Aceros Arequipa.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              En 2020 iniciamos el Proyecto Quellaveco uno de los yacimientos de cobre más grandes del mundo
            </Item>
            {/* <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              Este año es una gran satisfacción de ser proveedores de la gran minería, siendo actualmente proveedor de Sociedad Minera Cerro Verde y también hemos sido certificados por la norma ISO 9001-2015
            </Item> */}
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              Este año es una gran satisfacción de ser proveedores de la gran minería, siendo actualmente proveedor de Sociedad Minera Cerro Verde, Compañia Minera Antapaccay S.A., Las Bambas y Southern Perú,
              y también hemos sido certificados por la norma ISO 9001-2015 y Homologación de Proveedores por SGS.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
             Somos un grupo empresarial dedicado a la fabricación de
              estructuras metálicas, reparación de componentes, servicios de
              soldadura especializada, outsourcing de procesos y servicios en
              los sectores de minería, industria, energías renovables y petróleo
            </Item>
          </List>
        </Info>
        <ImgWrapper>
          <Img src={img}></Img>
        </ImgWrapper>
      </Wrapper>
    </div>
  )
}

export default Historia
