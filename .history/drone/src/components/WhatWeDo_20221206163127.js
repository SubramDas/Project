import React from 'react'
import styled from 'styled-components'
// import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';


const WhatWeDo = ({data}) => {
  return (
    <Container>
        <ContainerHeading>WHAT WE OFFER</ContainerHeading>

        <CardContainer>
        {data.map((product, index)=>{
            return(
            <ItemContainer key={index}>
                <ImageContainer src={product.image} alt={product.alt}/>
                <FontContainer>{product.title}</FontContainer>
            </ItemContainer>
            )
        })
        }
        </CardContainer>

    </Container>
    
  )
}

const Container=styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerHeading=styled.h1`
`

export default WhatWeDo