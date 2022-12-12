import React from 'react'
import { FaProductHunt } from 'react-icons/fa'
// import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';


const WhatWeDo = ({data}) => {
  return (
    <Container>
        <ContainerHeading>WHAT WE OFFER</ContainerHeading>

        <CardContainer>
        {data.map((prodect, index)=>{
            return(
            <ItemContainer key={index}>
                <ImageContainer src={FaProductHunt.image} alt=""/>
                <FontContainer>Banking</FontContainer>
            </ItemContainer>
            )
        })
        }
        </CardContainer>

    </Container>
    
  )
}

export default WhatWeDo