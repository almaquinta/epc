import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/lasser.png"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import { dataLaboral } from "../../../data/dataAreas.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Lab = () => {
  const indice = 3
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
            El mejor sistema de alineación de ejes acoplados en la actualidad es
            el basado en tecnologia óptica-láser, por ofrecer una gran
            superioridad técnica en todos los órdenes frente al tradicional
            mecánico de relojes comparadores.
          <Text />
          <Text>
            Realizamos los siguiente servicios:
          </Text>
            <li>
              Alineamiento laser de ejes horizontales
            </li>
            <li>
              Alineamiento laser de ejes verticales
            </li>
            <li>
            Alineamiento laser de poleas
            </li>
            <li>Alineamiento laser de trenes de maquina</li>
            <li>Alineamiento laser de ejes cardanes</li>
            <li>Verificación de pata coja</li>
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
