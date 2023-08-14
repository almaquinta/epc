import styled from "styled-components"

export const Title = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontsize.large};
  color: ${({ theme }) => theme.colors.azulOscuro};
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.azulOscuro};
font-size: ${({ theme }) => theme.fontsize.small};
li{
  margin-bottom: 1rem;
}
`
export const Img = styled.img`
  width: 100%;
`