import styled from "styled-components"

export const WrapperInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.azulOscuro};
  align-items: center;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
export const ContainerText = styled.div``
export const Title = styled.h2`
  @media (max-width: 640px) {
    text-align: center;
  }
`
export const Text = styled.p``
export const List = styled.ul``
export const ListItem = styled.li`
  list-style: none;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  margin-bottom: 0.5rem;
  .icon__right {
    color: ${({ theme }) => theme.colors.verde};
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
`
export const WrapperContacto = styled.div`
  background-color: ${({ theme }) => theme.colors.azulOscuro};
  color: ${({ theme }) => theme.colors.blanco};
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-whatsapp{
      margin-right:.5rem;
      font-size:1.2rem;
  }
  @media (max-width:640px){
      .container{
        flex-direction:column;
        text-align:center;
      }
  }
`

export const TextContacto = styled.p`
  font-size: ${({ theme }) => theme.fontsize.medium};
`
