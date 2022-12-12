import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const InfoSection = () => {
  return (
    <Section>
        <Container>
            <ColumnLeft>
                <h1>heading</h1>
                <p>paragraph</p>
                <p>paragraph</p>
                <Button to='/homes'>label</Button>
            </ColumnLeft>
            <ColumnRight>
                <img src="" alt="home" />
            </ColumnRight>
        </Container>
    </Section>
  )
}

const Section=styled.section`

`
const Container=styled.div``


export default InfoSection