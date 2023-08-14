import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/proyectos/img04.png"
import Data from "../../data/dataProject"
import BlockData from "../../components/proyecto/ProyectDetails"
import SEO from "../../components/Seo"
const Proyect1 = () => {
  const indice = 6
  return (
    <>
      <SEO
        image={Img}
        title={Data[indice].title}
        description={Data[indice].text}

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

export default Proyect1
