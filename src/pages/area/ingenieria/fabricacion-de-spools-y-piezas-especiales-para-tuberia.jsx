import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/spool.jpg"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import { dataIngenieria } from "../../../data/dataAreas.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Lab = () => {
  const indice = 4
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
            Somos especialistas en la fabricación de spools en el sur del país.
            Los materiales diversos en los que trabajar son de acero al carbono,
            acero inoxidable, cuproníquel y otras aleaciones.
          </Text>
          <Text>
            Sistemas semiautomáticos y automáticos, en los procesos de soldadura
            GTAW GMAW FCAW y SAW (arco sumergido) son aplicables en la
            fabricación.
          </Text>
          <Text>
            Dependiendo de la exigencia de nuestro cliente podemos validar
            nuestros productos fabricados con ensayos no destructivos como:
          </Text>
          <Text>
            <li>Prueba Hidrostática (HT)</li>
            <li>Inspección por Ultrasonido (UT)</li>
            <li>Inspección Radiográfica (RT)</li>
            <li>Inspección por partículas Magnéticas (MT)</li>
            <li>Inspección por líquidos penetrantes (PT) </li>
          </Text>
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

export default Lab
