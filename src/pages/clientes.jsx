import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Img from "../assets/images/hero/heroClientes.jpg"
import BlockClients from '../components/clientes';
import SEO from '../components/Seo';
const clientes = () => {
    return (
        <>
        <SEO
            image={Img}
            title="Clientes"
            description="Confianza y compromiso"
        
        ></SEO>
          <Layout>
          <Hero
            image={Img}
            title="Confianza y compromiso"
            text="Clientes"
          ></Hero>
          <BlockClients></BlockClients>
                </Layout>
        </>
    )
}

export default clientes
