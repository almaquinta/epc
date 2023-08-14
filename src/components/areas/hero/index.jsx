import React from "react"
import { HeroContain, Title, Text, WrapperInfo, WrapperBtn } from "./style"
import {RouteIngenieria,RouteLaboral} from '../../../data/navigation'
import Button from "../../button"
const Hero = props => {
  return (
    <HeroContain image={props.image}>
      <div className="container">
        <WrapperInfo>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
        </WrapperInfo>
        <WrapperBtn>
          <Button primary="true" url={RouteIngenieria} text="Ingenieria"></Button>
          <Button text="Servicios" url={RouteLaboral}></Button>
        </WrapperBtn>
      </div>
    </HeroContain>
  )
}

export default Hero
