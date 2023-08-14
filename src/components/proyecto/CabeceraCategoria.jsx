import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {dataTaxonomyProyect} from '../../data/dataProject'
const Nav =styled.ul`
    display:grid;
    align-items:center;
    grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
`
const Item =styled.li`
    padding:.5rem ;
    list-style:none;
    text-align:center;

`
const Linkea =styled(Link)`
    color:${({theme})=>theme.colors.naranja};
    font-weight:bold;
    font-size:${({theme})=>theme.fontsize.normal};
`
const CabeceraCategoria = () => {
    return (
        <div className='container wrapper'>
            <Nav>
            {dataTaxonomyProyect.map((categoria,key)=>{
                return(
                    <Item  key={key}>
                        <Linkea to={categoria.url}>{categoria.title}</Linkea>
                    </Item>
                )
            })}
            </Nav>
        </div>
    )
}

export default CabeceraCategoria
