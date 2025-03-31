import React from "react"
import styled from "styled-components"
import dataClientes from "../../data/dataClientes"
import ReactFancyBox from "react-fancybox"
import "react-fancybox/lib/fancybox.css"
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
export const Item = styled.div`
  padding: 1.2rem;
  width: 100%;
  height: 100%;
  border-right: 1px solid #646464;
  border-bottom: 1px solid #646464;
  display: flex;
  align-items: center;
  .react-fancybox {
    width: 100%;
    .thumbnail {
      text-align: center;
    }
  }
  .react-fancybox .thumbnail img {
    max-width: 200px;
    background-color: ${({ theme }) => theme.colors.blanco};
    padding: 0.5rem;
  }
  &:nth-child(4n) {
    border-right: none;
  }
  &:nth-last-of-type(-n+1) {
    border-bottom: none;
  }
  @media (max-width: 920px) {
    &:nth-child(4n) {
      border-right: 1px solid #646464;
    }
    &:nth-child(3n) {
      border-right: none;
    }
    &:nth-last-of-type(2) {
      border-bottom: none;
    }
    &:nth-last-of-type(3) {
      border-bottom: none;
    }
  }

  @media (max-width: 640px) {
    &:nth-child(4n) {
      border:none;
    }
    border: none;
  }
`
export const Img = styled.img`
  width: 100%;
`
const clientes = () => {
  return (
    <div className="container wrapper">
      <Wrapper>
        {dataClientes.map((data, key) => {
          const { img } = data
          return (
            <Item key={key}>
              {/* <ReactFancyBox thumbnail={img} image={img} /> */}
              <Img src={img} alt="imagen de cliente"></Img>
            </Item>
          )
        })}
      </Wrapper>
    </div>
  )
}

export default clientes
