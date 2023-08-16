import React from "react";
import Layout from "../../../components/layout";
import Hero from "../../../components/hero";
import BlockProject from "../../../components/gridSlider";
import HeroImg from "../../../assets/images/servicios/paneles.webp";
import Img1 from "../../../assets/images/grua.webp";
import Img2 from "../../../assets/images/servicios/maquinaria.webp";
// import Img1 from "../../../assets/images/Proyecto1.png"
import DataProject from "../../../data/dataProyectosReferentes.jsx";
import { dataLaboral } from "../../../data/dataAreas.jsx";
import { Title, Text, Img } from "../../../components/styledetailsArea";
import SEO from "../../../components/Seo";
const Lab = () => {
  const indice = 4;
  return (
    <>
      <SEO
        image={HeroImg}
        title={dataLaboral[indice].title}
        description={dataLaboral[indice].text}
      ></SEO>
      <Layout>
        <Hero
          image={HeroImg}
          title={dataLaboral[indice].title}
          text={dataLaboral[indice].text}
        ></Hero>
        <div className="container wrapper">
          <Title>{dataLaboral[indice].title}</Title>
          <Text>
            <p>
              Disponemos de los recursos técnicos y humanos necesarios para
              construir sus proyectos, desde obras civiles, instalaciones
              mecánicas, eléctricas, comunicaciones, seguridad e instalaciones
              especiales.
            </p>
          </Text>
          <Img src={Img1} alt={dataLaboral[indice].title}></Img>
          <Text>
            <p>
              En el proceso de Comisionado en frío y en caliente utilizamos el más
              moderno equipo instrumental para detección temprana de fallas y
              rendimiento de la instalación. Desde la generación en punto final
              hasta la evacuación a la red eléctrica o punto de consumo final, nos
              encargamos de todo el proceso de puesta en marcha.
            </p>
            <p>
              Ofrecemos servicios de Operación y Mantenimiento de plantas
              fotovoltaicas, asegurando los mayores niveles de disponibilidad y
              eficiencia en los mismos, con un estricto plan preventivo y
              correctivo.
            </p>
          </Text>
          <Img src={Img2} alt={dataLaboral[indice].title}></Img>
          {/* <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            blanditiis tempore. Molestiae ratione doloridbus natus minima obcaecati
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
  );
};

export default Lab;
