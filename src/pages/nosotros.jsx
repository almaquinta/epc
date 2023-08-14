import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Img from "../assets/images/hero/heroNosotros.jpg"
import MisionVision from "../components/nosotros/misionVision"
import Valores from "../components/nosotros/valores"
import Historia from "../components/nosotros/historia"
import BloqueCertificaciones from "../components/nosotros/BloqueCertificaciones"
import SEO from "../components/Seo"
export default function Nosotros() {
  useEffect(() => {
    // <console className="log"></console>;
  })
  // console.log(DataService)
  return (
    <>
    <SEO
        image={Img}
        title="Nosotros"
    
    ></SEO>
      <Layout>
        <Hero
          subtitle="CAPITAL HUMANO"
          image={Img}
          title="Nuestra mejor cualidad"
          text=""
        ></Hero>
        <MisionVision></MisionVision>
        <Valores></Valores>
        <Historia></Historia>
        <BloqueCertificaciones></BloqueCertificaciones>
      </Layout>
    </>
  )
}
