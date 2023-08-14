import React from "react"
import styled from "styled-components"
import dataClientes from "../../../data/dataClientes"
const ClientWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.azulOscuro};
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  padding: 3rem 0;
  @media (max-width: 800px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`
const ClientInfo = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-direction: column;
  font-weight:100;
  @media (max-width:640px) {
    text-align:center;
  }
`
const ClientText = styled.p`
  color: ${({ theme }) => theme.colors.verde};
  font-size: ${({ theme }) => theme.fontsize.large};
  font-weight: bold;
  margin: 0;
  font-weight:100
`
const ClientTitle = styled.h3`
  color: ${({ theme }) => theme.colors.blanco};
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  margin: 0;
  font-weight:100
`
const ClientImg = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 2rem;
`
const Image = styled.img`
  padding: 0.7rem;
  background-color: ${({ theme }) => theme.colors.blanco};
  width: 100%;
`
const Clientes = () => {
  return (
    <ClientWrapper>
      <div className="container">
        <ClientInfo>
          <ClientText>CLIENTES DESTACADOS</ClientText>
          <ClientTitle>
            Evaluamos individualmente cada plan y ofrecemos soluciones óptimas
          </ClientTitle>
        </ClientInfo>
        <ClientImg>
          {dataClientes.map((data, key) => {
            const { img } = data
            return <Image key={key} src={img}></Image>
          })}
        </ClientImg>
      </div>
    </ClientWrapper>
  )
}

export default Clientes
