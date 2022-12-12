import React from 'react'
// import {Container, Row, Col, Tab, Nav} from 'react-bootstrap';


const WhatWeDo = () => {
  return (
    <Container>
        <ContainerHeading>WHAT WE OFFER</ContainerHeading>

        <CardContainer>
        {data.map
            <ItemContainer>
                <ImageContainer src="" alt=""/>
                <FontContainer>Banking</FontContainer>
            </ItemContainer>
        }
        </CardContainer>

    </Container>
    
  )
}

export default WhatWeDo