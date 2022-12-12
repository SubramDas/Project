import React from 'react'
// import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';


const WhatWeDo = ({data}) => {
  return (
    <Container>
        <ContainerHeading>WHAT WE OFFER</ContainerHeading>

        <CardContainer>
        {data.map((prodect, index)=>{
            return(
            <ItemContainer key={index}>
                <ImageContainer src="" alt=""/>
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