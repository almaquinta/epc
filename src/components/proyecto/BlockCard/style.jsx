import styled from "styled-components"
import { Link } from "gatsby"
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  /* opacity:.5; */
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
export const Item = styled(Link)`
  background: rgba(2, 6, 44, 0.3);
  background-position: bottom;
  padding: 3rem ;
  position: relative;
  background-image: linear-gradient(rgba(2, 6, 44, 0.5), rgba(2, 6, 44, 0.3)),
    url(${props => props.img});
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blanco};
  @media (max-width: 640px) {
    text-align: center;
    padding: 1.5rem ;
  }
`

export const Title = styled.h2``
export const Text = styled.p``
export const Comentario = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 1.3rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.azulClaro};
  @media (max-width: 640px) {
    grid-template-columns: 1fr; 
    padding: 1rem;
  }
`
export const ComentText = styled.span``
export const ComentAutor = styled.p`
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.verde};
  padding: 0.2rem 0.5rem;
  text-align: center;
  &:hover {
    color: ${({ theme }) => theme.colors.azulClaro};
    background-color: ${({ theme }) => theme.colors.blanco};
    transition: 0.5s;
  }
`
export const ComentInfo = styled.div``
export const Icon = styled.div`
  .icon_search {
    color: ${({ theme }) => theme.colors.verde};
    font-size: 2rem;
  }
  text-align: center;
  margin: 0 1rem;
`
