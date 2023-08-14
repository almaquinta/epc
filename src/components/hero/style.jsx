import styled from "styled-components"
export const HeroContain = styled.div`
  background-image: url(${({ image }) => image});
  height: 90vh;
  color: ${({ theme }) => theme.colors.blanco};
  display: flex;
  align-items: center;
  background-repeat:no-repeat;
  background-size:cover;
  background-position: bottom;
  .container {
    width: 100%;
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
`
export const Subtitle=styled.p`
  text-transform:uppercase;
  margin:0;
`
export const WrapperInfo = styled.div`
  position: relative;
  padding: 1rem 0;
  width:50%;
  @media (max-width:800px){
        width:100%;
        text-align:center;
  }
`
export const Title = styled.h1`
  font-weight: bold;
  font-size:${({ theme }) => theme.fontsize.extralarge};
  margin-bottom:.5rem;
  text-transform:uppercase;
  margin-top:0;
`
export const Text = styled.p`
  font-size:${({ theme }) => theme.fontsize.medium};
`
