import React from 'react'
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

const 

export default WhatWeDo