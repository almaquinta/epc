import React from "react"
import Layout from "../../components/layout"
import Hero from "../../components/hero"
import Img from "../../assets/images/placeholderHero.png"
import BlockIngenieria from "../../components/areas/blockDetalleAreas"
import { dataIngenieria } from "../../data/dataAreas"
import SEO from "../../components/Seo"
const ingenieria = () => {
  return (
    <>
      <SEO
        image={Img}
        title="Ingenieria"
        description="Las disciplinas de ingeniería incluyen: ingeniería civil, eléctrica, mecánica, de tuberías y estructural; así como especialidades avanzadas como simulación, integración empresarial, procesos de automatización integrados y modelado 3D y 4D interactivo."
      ></SEO>
      <Layout>
        <Hero image={Img} title="Ingenieria" text=""></Hero>
        <BlockIngenieria
          center="true"
          title="Ingenieria"
          imagenWidth="auto"
          data={dataIngenieria}
        ></BlockIngenieria>
      </Layout>
    </>
  )
}

export default ingenieria
