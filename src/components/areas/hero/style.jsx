import styled from "styled-components"
export const HeroContain = styled.div`
  background-image: url(${({ image }) => image});
  height: 90vh;
  color: ${({ theme }) => theme.colors.blanco};
  display: flex;
  align-items: center;
  background-repeat:no-repeat;
  background-size:cover;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 800px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
`
export const WrapperInfo = styled.div`
  position: relative;
  padding: 1rem 0;
  @media (max-width: 800px) {
    text-align: center;
  }
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`
export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontsize.medium};
`
export const WrapperBtn = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr;
`
