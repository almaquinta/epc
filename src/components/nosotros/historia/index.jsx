import React from "react";
import Title from "../../title";
import styled from "styled-components";
import img from "../../../assets/images/grua.webp";
// import img from "../../../assets/images/historia.jpg";
import { AiOutlineRight } from "react-icons/ai";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  align-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Info = styled.div``;
const Text = styled.p``;
const List = styled.ul``;
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
`;
const ImgWrapper = styled.div``;
const Img = styled.img`
  width: 100%;
`;
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
          <p>
            <b>EPC INGENIERIA EN PROYECTOS SAC</b>, een adelante EPC INGENIERIA es una empresa peruana:{" "}
          </p>
          <List>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              En el 2016 iniciamos operaciones con diseño y fabricación de instalación de estructuras metálicas en el sector retail de la ciudad Arequipa.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              En el 2017 fue nuestro primer proyecto en el sector de energía, Proyecto Fotovoltaico Rubi de 140 MW, ubicado en Moquegua.
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
              En 2020 iniciamos el Proyecto Quellaveco. Uno de los yacimientos de cobre más grandes del mundo.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              El 2021 es un año de gran satisfacción de ser proveedores de la gran minería, siendo actualmente proveedor de Sociedad Minera Cerro Verde.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              El año 2022 iniciamos la construcción de la planta solar fotovoltaico Clemsi - Moquegua de 122,59 MWp.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
              En el año 2024 somos proveedores de Southern Perú Copper Corporation, importante empresa minera en el sur del Perú.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
             También en el mismo año 2024 iniciamos lazos comerciales con la Minera Zafranal.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
             Este año estamos participando en la construcción de la planta fotovoltaica Sunny - La Joya Arequipa de 204 MW.
            </Item>
            <Item>
              <AiOutlineRight
                iOutlineRight
                className="icon-right"
              ></AiOutlineRight>
             Actualmente estamos certificados por las normas ISO 9001, ISO 14001 e ISO 45001 y Homologación de Proveedores por SGS.
            </Item>
          </List>
        </Info>
        <ImgWrapper>
          <Img src={img}></Img>
        </ImgWrapper>
      </Wrapper>
    </div>
  );
};

export default Historia;
