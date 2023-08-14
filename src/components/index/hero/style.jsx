import styled from "styled-components"
export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.blanco};
  /* cambior la animacion */
  .slide-background-fade-in {
    animation: none !important;
    opacity: 0.5;
  }
`
export const Buttons = styled.div`
  bottom: 0;
  position: absolute;
  
  .azulOscuro,
  .verde {
    padding: 1rem;
    font-weight: bold;
  }
`
export const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  height: 100%;
  padding: 0 5vw;
  max-width: 1440px;
  margin: 0 auto;
`
export const ButtonContacto = styled.div`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.fontsize.medium};
  
`
export const HeroTitle = styled.h1`
  font-weight: bold;
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  text-shadow:2px 2px 1px ${({theme})=>theme.colors.negro};
`
export const HeroText = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.fontsize.medium};
  text-shadow:2px 2px 1px ${({theme})=>theme.colors.negro};
`
