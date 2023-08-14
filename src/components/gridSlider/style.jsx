import styled from "styled-components"
export const Wrapper = styled.div`
  .react-multi-carousel-item {
    padding: 0 1rem ;
    margin-bottom:1rem;
    /* padding: 0 0 1rem; */
    border-radius: 3px;
    /* box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 13px 1px; */
    transition: all 300ms ease-in-out 0s;
    :hover {
      /* box-shadow: rgba(0, 0, 0, 0.35) 2px 2px 13px 1px; */
    }
  }
  .react-multiple-carousel__arrow--right {
    background-color: ${({ theme }) => theme.colors.verde};
  }
  .react-multiple-carousel__arrow--left {
    background-color: ${({ theme }) => theme.colors.azulOscuro};
  }
  /* para arreglar el bug de carrousel */
  a {
    /* box-shadow: none; */
    display:block
    :hover {
      /* box-shadow: none; */
    }
  }
`
export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  color: ${({ theme }) => theme.colors.azulOscuro};
  font-weight: bold;
  margin: 0 0 2rem;
  /* text-align: center; */
  @media (max-width:640px){
    text-align:center;
  }
`
