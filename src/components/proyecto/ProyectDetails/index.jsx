import React from "react"
import {
  WrapperInfo,
  Title,
  Text,
  List,
  ListItem,
  ContainerText,
  WrapperContacto,
  TextContacto,
  
} from "./style"
// import ReactFancyBox from "react-fancybox"
import "react-fancybox/lib/fancybox.css"
// import { ItemCard, CardInfo, CardText } from "../../card"
// import { Wrapper } from "../../areas/blockDetalleAreas"
import BotonContacto from "../../button"
import { AiOutlineRight } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
const Index = props => {
  return (
    <>
      <div className="container wrapper">
        <WrapperInfo>
          <ContainerText>
            <Title>{props.data.title}</Title>
            <Text>{props.data.text}</Text>
          </ContainerText>
          <List>
            {props.data.caracteristicas.map
              ? props.data.caracteristicas.map((caracteristica, key) => {
                  return (
                    <ListItem key={key}>
                      <AiOutlineRight className="icon__right"></AiOutlineRight>
                      {caracteristica}
                    </ListItem>
                  )
                })
              : null}
          </List>
        </WrapperInfo>
      </div>
      <WrapperContacto>
        <div className="container wrapper">
          <TextContacto>
            ¿TIENES UN PROYECTO SIMILAR? <br />
            TENEMOS LA SOLUCIÓN CONTÁCTANOS
          </TextContacto>

          <BotonContacto
            target={true}
            type="a"
            url="https://api.whatsapp.com/send?phone=51996050489&amp;text=Hola EPC me gustaria saber sobre sus servicios"
            text="Contacto"
          >
            < AiOutlineWhatsApp className='icon-whatsapp'/>
          </BotonContacto>
        </div>
      </WrapperContacto>
      {/* <div className="container wrapper">
        <Wrapper>
          {props.data.item
            ? props.data.item.map((dt, key) => {
                let { text, img } = dt
                // text = text.substr(0, 100) + " ..."
                return (
                  <ItemCard key={key}>
                    <ReactFancyBox thumbnail={img} image={img} />
                    <CardInfo color={props.color}>
                      <CardText colorText={props.colorText}>{text}</CardText>
                    </CardInfo>
                  </ItemCard>
                )
              })
            : null}
        </Wrapper>
      </div> */}
    </>
  )
}

export default Index
