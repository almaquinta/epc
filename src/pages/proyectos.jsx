import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Img from "../assets/images/hero/heroProyectos.jpg"
// import BlockCabeceraText from "../components/proyecto/CabeceraTitle"
// import BlockCabeceraCategory from "../components/proyecto/CabeceraCategoria"
import BlockCard from "../components/proyecto/BlockCard"
import dataProject from "../data/dataProject"
import SEO from "../components/Seo"
export default function Nosotros() {
  useEffect(() => {
    // <console className="log"></console>;
  })
  // console.log(DataService)
  return (
    <>
    <SEO
      title="SOLUCIONES ÓPTIMAS"
      description="Nos caracterizamos por entender la necesidad del cliente en todas las áreas en las que nos especializamos. "
      image={Img}
    ></SEO>
      <Layout>
        <Hero
          image={Img}
          subtitle='CAPITAL HUMANO'
          title="SOLUCIONES &Oacute;PTIMAS"
          text="Nos caracterizamos por entender la necesidad del cliente en todas las áreas en las que nos especializamos. "
        ></Hero>
        {/* <BlockCabeceraText></BlockCabeceraText> */}
        {/* <BlockCabeceraCategory></BlockCabeceraCategory> */}
        <BlockCard data={dataProject}></BlockCard>
      </Layout>
    </>
  )
}
