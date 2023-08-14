import React, { useEffect } from "react"
import Layout from "../components/layout"
import Hero from "../components/areas/hero"
import Img from "../assets/images/hero/heroAreas.jpg"
import SEO from "../components/Seo"
export default function Areas() {
  useEffect(() => {
    // <console className="log"></console>;
  })
  // console.log(DataService)
  return (
    <>
    <SEO
    image={Img}
    title="Areas estrat&eacute;gicas"
    ></SEO>
      <Layout>
        <Hero
          image={Img}
          title="areas estrat&eacute;gicas"
          text=""
        ></Hero>
      </Layout>
    </>
  )
}
