import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/disenoIngenieria.png"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import { dataIngenieria } from "../../../data/dataAreas.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Ing1 = () => {
  const indice = 1
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
            Las disciplinas de ingeniería incluyen: ingeniería civil, eléctrica,
            mecánica, de tuberías y estructural; así como especialidades
            avanzadas como simulación, integración empresarial, procesos de
            automatización integrados y modelado 3D y 4D interactivo.
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

export default Ing1
