import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import {
  Wrapper,
  HeroDiv,
  HeroText,
  HeroTitle,
  Buttons,
  ButtonContacto,
} from "./style";
import Heroimg01 from "../../../assets/images/HeroIndex.jpg";
import Heroimg02 from "../../../assets/images/HeroIndex2.jpg";

const Hero = () => {
  const nextSlideHandler = React.useRef();
  const previousSlideHandler = React.useRef();
  return (
    <Wrapper>
      <HeroSlider
        nextSlide={nextSlideHandler}
        previousSlide={previousSlideHandler}
        slidingAnimation="left_to_right"
        orientation="horizontal"
        set
        initialSlide={1}
        // onBeforeChange={(previousSlide, nextSlide) =>
        //   console.log("onBeforeChange", previousSlide, nextSlide)
        // }
        // onChange={nextSlide => console.log("onChange", nextSlide)}
        // onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: false,
          autoplayDuration: 3000,
          height: "90vh",
        }}
      >
        <OverlayContainer>
          {/* <Wrapper> */}
          <Buttons>
            <button
              className="button azulOscuro"
              button="danger"
              onClick={() => previousSlideHandler.current()}
            >
              &lt;
            </button>
            <button
              className="button verde"
              button="success"
              onClick={() => nextSlideHandler.current()}
            >
              &gt;
            </button>
          </Buttons>
          {/* </Wrapper> */}
        </OverlayContainer>

        <Slide
          shouldRenderMask
          background={{
            backgroundColor: "#8A8A8A",
            maskBackgroundBlendMode: "darken",
            backgroundImage: Heroimg01,
            backgroundAnimation: "fade",
          }}
        >
          <HeroDiv>
            <HeroText>INGENIERIA DE CALIDAD</HeroText>
            <HeroTitle>QUIENES SOMOS</HeroTitle>
            <HeroText>
              Somos un grupo empresarial suministrando servicios en los sectores
              de minería, industria y energías renovables: como ingeniería,
              servicio de NDT, fabricación de estructuras metálicas, overhaul de
              dipper de pala eléctrica y tolvas de camiones mineros,
              construcción y mantenimiento de plantas solares fotovoltaicos.
            </HeroText>
            <ButtonContacto>
              <a
                className="button verde"
                href="https://api.whatsapp.com/send?phone=51996050489&amp;text=Hola EPC me gustaria saber sobre sus servicios"
                target="_blanck"
              >
                Contacto
              </a>
            </ButtonContacto>
          </HeroDiv>
        </Slide>
        <Slide
          shouldRenderMask
          background={{
            backgroundColor: "#8A8A8A",
            // maskBackgroundBlendMode: "darken",
            backgroundImage: Heroimg02,
            backgroundAnimation: "fade",
          }}
        >
          <HeroDiv>
            <HeroText>INGENIERIA DE CALIDAD</HeroText>
            <HeroTitle>QUIENES SOMOS</HeroTitle>
            <HeroText>
              Somos un grupo empresarial suministrando servicios en los sectores
              de minería, industria y energías renovables: como ingeniería,
              servicio de NDT, fabricación de estructuras metálicas, overhaul de
              dipper de pala eléctrica y tolvas de camiones mineros,
              construcción y mantenimiento de plantas solares fotovoltaicos.
            </HeroText>
            <ButtonContacto>
              <a
                className="button verde"
                href="https://api.whatsapp.com/send?phone=51996050489&amp;text=Hola Intramet como estan"
                target="_blanck"
              >
                Contacto
              </a>
            </ButtonContacto>
          </HeroDiv>
        </Slide>
        {/* <Slide
          shouldRenderMask
          background={{
            backgroundColor: "#8A8A8A",
            maskBackgroundBlendMode: "darken",
            backgroundImage: Heroimg01,
            backgroundAnimation: "fade",
          }}
        >
          <HeroDiv>
            <HeroText>INGENIERIA DE CALIDAD</HeroText>
            <HeroTitle>QUIENES SOMOS</HeroTitle>
            <HeroText>
              Somos un grupo empresarial dedicados a la fabricaci&oacute;n de
              estructuras met&aacute;licas, servicios de soldadura especializada
              y outsourcing de procesos y servicios en los sectores de
              miner&iacute;a, industria, energ&iacute;a, petr&oacute;leo y
              retail
            </HeroText>
            <ButtonContacto>
              <a
                className="button verde"
                href="https://api.whatsapp.com/send?phone=51996050489&amp;text=Hola Intramet como estan"
                target="_blanck"
              >
                Contacto
              </a>
            </ButtonContacto>
          </HeroDiv>
        </Slide>
        <Slide
          shouldRenderMask
          background={{
            backgroundColor: "#8A8A8A",
            maskBackgroundBlendMode: "darken",
            backgroundImage: Heroimg01,
            backgroundAnimation: "fade",
          }}
        >
          <HeroDiv>
            <HeroText>INGENIERIA DE CALIDAD</HeroText>
            <HeroTitle>QUIENES SOMOS</HeroTitle>
            <HeroText>
              Somos un grupo empresarial dedicados a la fabricaci&oacute;n de
              estructuras met&aacute;licas, servicios de soldadura especializada
              y outsourcing de procesos y servicios en los sectores de
              miner&iacute;a, industria, energ&iacute;a, petr&oacute;leo y
              retail
            </HeroText>
            <ButtonContacto>
              <a
                className="button verde"
                href="https://api.whatsapp.com/send?phone=51996050489&amp;text=Hola Intramet como estan"
                target="_blanck"
              >
                Contacto
              </a>
            </ButtonContacto>
          </HeroDiv>
        </Slide> */}
        <Nav />
      </HeroSlider>
    </Wrapper>
  );
};

export default Hero;
