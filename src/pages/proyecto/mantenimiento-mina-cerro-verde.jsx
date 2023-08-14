import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/proyectos/mina.jpg"
import Data from "../../data/dataProject"
import BlockData from "../../components/proyecto/ProyectDetails"
import SEO from "../../components/Seo"
const ingenieria = () => {
  const indice = 0
  return (
    <>
      <SEO
        image={Img}
        title="MANTENIMIENTO MINA CERRO VERDE"
        description="Realizamos servicios en el area de mantenimiento mina para nuestro cliente SOCIEDAD MINERA CERRO VERDE"
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
