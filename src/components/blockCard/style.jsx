import styled from "styled-components"
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
  text-align: center;
`
export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.large};
  color: ${({ theme }) => theme.colors.azulOscuro};
  font-weight: bold;
`
export const ItemCard = styled.div`
  display: block;
  height: 100%;
  
  :hover {
  }
`