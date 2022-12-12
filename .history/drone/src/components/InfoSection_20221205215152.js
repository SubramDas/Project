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
                <img src="" alt="" />
            </ColumnRight>
        </Container>
    </Section>
  )
}

export default InfoSection