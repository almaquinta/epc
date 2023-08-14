import React from "react"
// St de styled components
import styled from "styled-components"
const StTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontsize.extralarge};
  color: ${({ theme }) => theme.colors.azulOscuro};
  font-weight: ${({ normal }) => (normal ? "400" : "bold")};
  margin: 0 0 2rem;
  text-transform: uppercase;
  text-align: ${props => (props.center ? "center" : "left")};
  position:relative;
  span{
    position:relative;
  }
  &::before {
    content: ${({ backtext }) =>backtext} ;
    -webkit-text-fill-color: #E6E6E6;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.azulOscuro};
    display:block;
    /* position:absolute; */
    font-size:10rem;
    line-height: .2;
    margin-top:2rem;
    /* top: -121px; */
  }
  @media (max-width: 920px) {
    &::before {
      content:none;
    }
  }
  @media (max-width: 640px) {
    text-align: center;
  }
`
const Title = props => {
  return (
    <StTitle backtext={props.backtext} normal={props.normal} center={props.center}>
      <span>{props.title}</span>
    </StTitle>
  )
}

export default Title
