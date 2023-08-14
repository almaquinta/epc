import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/placeholderHero.png"
import BlockIngenieria from "../../components/areas/blockDetalleAreas"
import { dataLaboral } from "../../data/dataAreas"
import SEO from "../../components/Seo"
const Laboral = () => {
  return (
    <>
      <SEO
        image={Img}
        title="Servicios"
        description="Implementación y desarrollo de procesos integrales con una propuesta innovadora, y mejora continua, buscando ser mejores socios estratégico de nuestros clientes, para aumentar su eficiencia, eficacia y competitividad en el mercado"
      ></SEO>
      <Layout>
        <Hero image={Img} title="Servicios" text=""></Hero>
        <BlockIngenieria
          center="true"
          title="Servicios"
          imagenWidth="auto"
          data={dataLaboral}
        ></BlockIngenieria>
      </Layout>
    </>
  )
}

export default Laboral
