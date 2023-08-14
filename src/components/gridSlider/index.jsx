import React from "react"
import { Wrapper } from "./style"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Card } from "../card"
import Title from "../title"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}
const GridSlider = props => {
  return (
    <div className="container wrapper">
      <Title backtext={props.backtext}  title={props.title}></Title>
      {/* <Title>{props.title || "undefined"}</Title> */}
      <Wrapper>
        <Carousel responsive={responsive}>
          {props.data
            ? props.data.map((dt, key) => {
                let { title, text, url, img } = dt
                text = text.substr(0, 100) + " ..."
                return (
                  <Card
                    url={url}
                    key={key}
                    img={img}
                    title={title}
                    text={text}
                    More={true}
                  ></Card>
                )
              })
            : null}
        </Carousel>
      </Wrapper>
    </div>
  )
}

export default GridSlider
