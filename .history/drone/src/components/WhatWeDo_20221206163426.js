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
     width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px)/2);
  background: #150f0f;
  color: #fff;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContainerHeading=styled.h1`

`

const CardContainer=styled.

export default WhatWeDo