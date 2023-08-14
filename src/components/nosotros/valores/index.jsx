import React from 'react'
import Title from '../../title'
import DataValores from '../../../data/valores'
import {Carditle,CardText,CardImg,CardInfo} from '../../card'
import {Wrapper,ItemCard} from '../../blockCard/style'

const Valores = () => {
    return (
        <div className='container wrapper'>
            <Title backtext={`'valores'`}  title='Nuestros Valores'></Title>
            <Wrapper>
                {DataValores.map((valor,key)=>{
                    let {img,title,text}= valor
                    return(
                        <ItemCard as='div' key={key}>
                            <CardImg imagenWidth ='auto 'src={img}></CardImg>
                            <CardInfo>
                                <Carditle>{title}</Carditle>
                                <CardText>{text}</CardText>
                            </CardInfo>
                        </ItemCard>
                    )
                })}
            </Wrapper>

        </div>
    )
}

export default Valores
