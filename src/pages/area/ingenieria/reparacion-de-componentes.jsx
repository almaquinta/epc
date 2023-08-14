import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/reparacion.jpg"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import { dataIngenieria } from "../../../data/dataAreas.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Ing1 = () => {
  const indice = 3
  return (
    <>
      <SEO
        image={Image}
        title={dataIngenieria[indice].title}
        description={dataIngenieria[indice].text}
      ></SEO>
      <Layout>
        <Hero
          image={Image}
          title={dataIngenieria[indice].title}
          text={dataIngenieria[indice].text}
        ></Hero>
        <div className="container wrapper">
          <Title>{dataIngenieria[indice].title}</Title>
          <Text>
            Hemos logrado desarrollar dispositivos que nos permiten una mejora
            considerable en la eficiencia de los procesos de soldadura. Con el
            objetivo de realizar un servicio de forma segura, oportuna,
            eficiente y con calidad.
          </Text>
          <Text>Reforzamiento con planchas antidesgaste y antiabrasión</Text>
          <ul>
            <li>
              Reparación general: laterales, frontales, canopy (techo), interior
              tolva, inferior tolva
            </li>
            <li>Reparación de fisuras</li>
            <li>Servicio mecanizado y recuperación de alojamientos</li>
            <li>Servicio de barrenado</li>
          </ul>
          <Img src={Image} alt={dataIngenieria[indice].title}></Img>
          {/* <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            blanditiis tempore. Molestiae ratione doloribus natus minima obcaecati
            quibusdam! Beatae dolores atque officiis perspiciatis ut iure, nemo
            minima debitis veniam eum dolorum totam eaque possimus non tenetur,
            voluptate nam consequuntur veritatis, aperiam voluptatem quis error
            impedit? Ea cum labore nam officiis!
          </Text> */}
        </div>
        <BlockProject
          title="PROYECTOS DE REFERENCIA"
          data={DataProject}
        ></BlockProject>
      </Layout>
    </>
  )
}

export default Ing1
