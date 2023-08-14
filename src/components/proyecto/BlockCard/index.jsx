
import React from "react"
import { FaSearchPlus } from "react-icons/fa"
import {
  Wrapper,
  Item,
  Title,
  Text,
  Comentario,
  // ComentText,
  ComentAutor,
  ComentInfo,
  Icon
} from "./style"
const Index = props => {
  return(  <div className="container wrapper">
      <Wrapper>
   {props.data.map
    ? props.data.map((data, key) => {
        let { title, text, img, url, autor } = data
        return (
              <Item key={key} to={url} img={img}>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Comentario>

                  <Icon>
                      <FaSearchPlus className='icon_search'></FaSearchPlus>
                  </Icon>
                  <ComentInfo>
                      {/* <ComentText>{comentario}</ComentText> */}
                      <ComentAutor>{autor}</ComentAutor>
                  </ComentInfo>
                </Comentario>
              </Item>
        )
    })
    : null}
    </Wrapper>
    </div>)
}

export default Index
