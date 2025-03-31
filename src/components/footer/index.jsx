import React from "react"
// import { FaFacebook } from "react-icons/fa"
// import { FaInstagram } from "react-icons/fa"
// import { FaTwitter } from "react-icons/fa"
// import { FaLinkedin } from "react-icons/fa"
import { FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
// import { FaWhatsapp } from "react-icons/fa"
import {
  Footer,
  FooterCard,
  FooterNosotros,
  FooterServicio,
  Title,
  ServicioLink,
  FooterInfo,
  FooterLink,
  Text,
  // SocialMedia,
  // LinkSocial,
  LogoEpc,
  BoxInfo,
} from "./style"
import { dataArea } from "../../data/dataAreas"
import Logo from "../../assets/images/logoFooter.png"
const Pie = () => {
  return (
    <Footer>
      <div className="container wrapper">
        <FooterCard>
          <FooterNosotros>
            Somos un grupo empresarial dedicados a la fabricación de estructuras
            metálicas, servicios de soldadura especializada y outsourcing de
            procesos y servicios en los sectores de minería, industria, energía,
            petróleo y retail
          </FooterNosotros>
          <FooterServicio>
            <Title>Areas</Title>
            {dataArea.map((dt, key) => {
              const { title, url } = dt
              return (
                <ServicioLink to={url} key={key}>
                  {title}
                </ServicioLink>
              )
            })}
          </FooterServicio>
          <FooterInfo>
            <Title>Direcci&oacute;n</Title>
            <BoxInfo>
              {" "}
              <b>OFICINA:</b> Urb. Corazón de María C-9 — Arequipa
            </BoxInfo>
            <BoxInfo>
              <b>TALLER:</b> Panamericana Sur S/N - A media cuadra de By-pass
              cruce KM 48 — La Joya - Arequipa
            </BoxInfo>
            <BoxInfo>
              <b>DIRECCIÓN:</b> Av. Argentina E8-A - APTASA - Parque Industrial Río
              Seco - Cerro Colorado - Arequipa
            </BoxInfo>
            <BoxInfo className="btn">
              <FaPhone></FaPhone>
              <a href="tel:+54996050489">996 050 489</a>
              {/* <br /> */}
              {/* <a href="tel:+(054)1234-567-8902">+ (054) 1234-567-8902</a> */}
            </BoxInfo>
            <BoxInfo className="btn ">
              <MdEmail></MdEmail>
              <a href="mailto:info@epc.com">ventas@epc.net.pe</a>
              {/* <br /> */}
              {/* <a href="mailto:Cotización@epc.com">Cotización@epc.com</a> */}
            </BoxInfo>
          </FooterInfo>
        </FooterCard>
      </div>
      <FooterLink>
        <div className="container">
          <LogoEpc src={Logo}></LogoEpc>
          <Text>
            &copy; Copyright {new Date().getFullYear()} / Hecho por
            <a
              href="http://almaquinta.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;Alma Quinta
            </a>{" "}
            y Six Lab
          </Text>
          {/* <SocialMedia>
            <LinkSocial>
              <FaInstagram className="footer__icon__social" />
            </LinkSocial>
            <LinkSocial>
              <FaTwitter className="footer__icon__social" />
            </LinkSocial>
            <LinkSocial>
              <FaLinkedin className="footer__icon__social" />
            </LinkSocial>
            <LinkSocial>
              <FaFacebook className="footer__icon__social" />
            </LinkSocial>
            <LinkSocial>
              <FaWhatsapp className="footer__icon__social" />
            </LinkSocial>
          </SocialMedia> */}
        </div>
      </FooterLink>
    </Footer>
  )
}

export default Pie
