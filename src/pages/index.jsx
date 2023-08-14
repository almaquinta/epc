import React from "react"
import Layout from "../components/layout"
import Hero from "../components/index/hero"
import BlockService from "../components/blockCard"
import BlockProject from "../components/gridSlider"
import BlockClient from "../components/index/clientes"
import BlockProceso from "../components/index/valores"
import BlockCalidad from "../components/index/calidad"
import BlockPolitica from "../components/index/politicas"
import BloqueCertificaciones from "../components/nosotros/BloqueCertificaciones"
import DataService from "../data/dataService.jsx"
import DataProject from "../data/dataProject.jsx"
import SEO from "../components/Seo"
export default function Home() {
  // console.log(DataService)
  return (
    <>
    <SEO></SEO>
      <Layout index={true} theme="intramet">
        <Hero></Hero>
        <BlockService
          imagenWidth="auto"
          title="SERVICIOS"
          data={DataService}
        ></BlockService>
        <BlockProject
          title="PROYECTOS DESTACADOS"
          backtext={`'PROYECTOS'`}
          data={DataProject}
        ></BlockProject>
        <BlockClient></BlockClient>
        <BlockProceso
          title="NUESTROS VALORES "
          backtext={`'VALORES'`}
        ></BlockProceso>
        <BlockCalidad></BlockCalidad>
        <BlockPolitica></BlockPolitica>
        <BloqueCertificaciones></BloqueCertificaciones>
      </Layout>
    </>
  )
}
