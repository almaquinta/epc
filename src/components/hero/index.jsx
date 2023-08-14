import React from "react"
import { HeroContain, Title, Text, WrapperInfo, Subtitle } from "./style"
const Hero = props => {
  return (
    <HeroContain image={props.image}>
      <div className="container">
        <WrapperInfo>
          {props.subtitle?<Subtitle>{props.subtitle}</Subtitle>:null}
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
        </WrapperInfo>
      </div>
    </HeroContain>
  )
}

export default Hero
