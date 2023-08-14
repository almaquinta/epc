import React from "react"
import { Wrapper,Title } from "./style"
import WrapperCard from '../card'
// import CardItem from '../card'
const BlockCard = props => {
    // console.log(props.data);
  return (
    <div className="container wrapper">
        <Title>{props.title}</Title>
      <Wrapper>
        <WrapperCard imagenWidth={props.imagenWidth} data={props.data}>
          
        </WrapperCard>
      </Wrapper>
    </div>
  )
}
export default BlockCard
 