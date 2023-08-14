import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/ntd.jpeg"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import  dataLaboral  from "../../../data/dataService.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Lab = () => {
  const indice = 0
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
          <Title>PERSONAL</Title>
          <Text>Ofrecemos el servicio de entrenamiento y certificación de personal nivel 1 y 2 a través del código ASNT-SNT-TC-1A.</Text>
          <Text>
            <li>
            	Ultrasonidos (UT) (UTPA) Y TOFD Nivel I y II
            </li>
            <li>
              Líquidos Penetrantes  (PT) Nivel I y II
            </li>
            <li>
            	Partículas Magnéticas (MT) Nivel I y II
            </li>
            <li>
            	Inspección Visual (VT) Nivel I y II
            </li>
            
          </Text>
          <Title>EQUIPOS</Title>
          <Text>
            <li>	Certificación de equipos de ultrasonido (convencionales, avanzados (Phased Array / TOFD), equipos de medición de espesores digital (A-Scan)</li>
            <li>	Certificación de yugos magnéticos</li>
          </Text>
          <Text>La capacitación y certificación es realizada por nuestro nivel III ASNT con amplia experiencia</Text>
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
