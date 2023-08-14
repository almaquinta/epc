import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/outsourcing.jpg"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import { dataLaboral } from "../../../data/dataAreas.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Lab = () => {
  const indice = 1
  return (
    <>
      <SEO
        image={Image}
        title={dataLaboral[indice].title}
        description={dataLaboral[indice].text}
      ></SEO>
      <Layout>
        <Hero
          image={Image}
          title={dataLaboral[indice].title}
          text={dataLaboral[indice].text}
        ></Hero>
        <div className="container wrapper">
          <Title>{dataLaboral[indice].title}</Title>
          <Text>
            <li>
              Implementación y desarrollo de procesos integrales con una
              propuesta innovadora, y mejora continua, buscando ser mejores
              socios estratégico de nuestros clientes, para aumentar su
              eficiencia, eficacia y competitividad en el mercado
            </li>
            <li>
              Servicio de tercerización de contable, tributario, laboral y legal
              (nóminas y asesorías)
            </li>
          </Text>
          <Img src={Image} alt={dataLaboral[indice].title}></Img>
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
