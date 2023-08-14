import React from "react"
import Layout from "../../../components/layout"
import Hero from "../../../components/hero"
import BlockProject from "../../../components/gridSlider"
import Image from "../../../assets/images/servicios/NoDestructivos.jpg"
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx"
import { dataLaboral } from "../../../data/dataAreas.jsx"
import { Title, Text, Img } from "../../../components/styledetailsArea"
import SEO from "../../../components/Seo"
const Lab = () => {
  const indice = 2
  return (
    <>
      <SEO
        image={Image}
        title={dataLaboral[indice].title}
        description={dataLaboral[indice].text}
      ></SEO>
      <Layout>
        <Hero
          image={Image}
          title={dataLaboral[indice].title}
          text={dataLaboral[indice].text}
        ></Hero>
        <div className="container wrapper">
          <Title>{dataLaboral[indice].title}</Title>
          <Text>EPC INGENIERIA brinda servicios durante la fabricación y construcción, así como durante el mantenimiento de componentes o equipos industriales que ya están en servicio.</Text>
          <Text>Aplicamos técnicas de vanguardia destinadas a minimizar el tiempo de inactividad, aumentar la productividad y proporcionar la mayor probabilidad de detección de fallas.</Text>
          <Text>Aplicamos una variedad de técnicas de ensayos no destructivos (NDT) diseñadas exclusivamente para cada aplicación requerida por nuestros clientes. Las técnicas que podemos ofrecer a nuestros clientes pueden ser las más convencionales, hasta las mas convencionales:</Text>
          <Text>
            <li>
              <b>Ultrasonido industrial:</b>&nbsp;
              El objetivo de esta técnica es determinar discontinuidades
              internas en juntas soldadas de materiales metálicos y no metálicos
            </li>
            <li>
              <b>Medición de espesores de materiales y recubrimiento:</b>&nbsp;
              Se deriva del ultrasonido industrial, con ella se determina puntualmente los espesores de los materiales, con el objetivo de determinar el estado de desgaste
            </li>
            <li>
              <b>Detección de corrosión:</b>&nbsp;
              Para determinar el estado de corrosión de los elementos, se brinda el servicio de inspección por scanner, el cual reporta una gráfica a color
            </li>
            <li>
              <b>Ensayo de dureza:</b>&nbsp;
              Determina la dureza y aproximar la resistencia de rotura de ciertos metales.
            </li>
            <li>
              <b>Termografía:</b>&nbsp;
              Permite determinar temperaturas a distancia sin necesidad de contacto físico con el objeto a estudiar.
            </li>
            <li>
              <b>Identificación Positiva de Materiales (PMI):</b>&nbsp;
              Determina la composición química de materiales e identificar el tipo de aleación con la que están compuestos
            </li>
            <li>
              <b>Prueba hidrostática y neumática:</b>&nbsp;
              Tienen como objetivo asegurar la impermeabilidad e integridad física de los elementos que trabajan a presión.
            </li>
            
          </Text>
          <Img src={Image} alt={dataLaboral[indice].title}></Img>
          {/* <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            blanditiis tempore. Molestiae ratione doloribus natus minima obcaecati
            quibusdam! Beatae dolores atque officiis perspiciatis ut iure, nemo
            minima debitis veniam eum dolorum totam eaque possimus non tenetur,
            voluptate nam consequuntur veritatis, aperiam voluptatem quis error
            impedit? Ea cum labore nam officiis!
          </Text> */}
        </div>
        <BlockProject
          title="PROYECTOS DE REFERENCIA"
          data={DataProject}
        ></BlockProject>
      </Layout>
    </>
  )
}

export default Lab
