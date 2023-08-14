import React from "react"
import Img01 from "../../assets/images/SGS.jpg"
import Img02 from "../../assets/images/iso-euro.png"
import Img03 from "../../assets/images/achilles.png"
import styled from "styled-components"
const WrapperCertificaciones = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%,15rem),1fr));
  gap: 2rem;
  justify-content:center;
  
`
const Item = styled.div`
  /* padding: 1rem 2rem; */
  text-align: center;
  h3 {
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.fontsize.medium};
    color: ${({ theme }) => theme.colors.azulOscuro};
  }
  img {
    width: 100%;
    height: auto;
    margin: 0 auto;
  }
 
`
const BloqueCertificaciones = () => {
  return (
    <div className="container wrapper">
      <WrapperCertificaciones>
        <Item>
          <h3>iso 9001 con EUROCERT</h3>
          <img src={Img02} alt="iso 9001 con EUROCERT" />
        </Item>
        <Item>
          <h3>Homologacion de Proveedores. SGS</h3>
          <img src={Img01} alt="Homologacion de Proveedores. SGS" />
        </Item>
        <Item>
          <h3>Achilles</h3>
          <img src={Img03} alt="Achilles" />
        </Item>
      </WrapperCertificaciones>
    </div>
  )
}

export default BloqueCertificaciones
