import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/proyectos/CerroVerde.jpeg"
import Data from "../../data/dataProject"
import BlockData from "../../components/proyecto/ProyectDetails"
import SEO from "../../components/Seo"
const ingenieria = () => {
  const indice = 1
  return (
    <>
      <SEO
        image={Img}
        title="SOCIEDAD MINERA CERRO VERDE"
        description="Contamos con un contrato marco para la realización de SERVICIOS DE ENSAYOS NO DESTRUCTIVOS NDT "
      ></SEO>
      <Layout>
        <Hero          
          image={Img}
          title={Data[indice].title}
          text={Data[indice].text}
        ></Hero>
        <BlockData data={Data[indice]}></BlockData>
      </Layout>
    </>
  )
}

export default ingenieria
