import React from 'react'
import styled from 'styled-components'

const HeroImg2 = () => {
  return (
    <>
    <HeroImg>
        <Heading>
            <h1>This is a Heading</h1>
            <p>Paragraph</p>
        </Heading>
    </HeroImg>
      
    </>
  )
}

const HeroImg=styled.div`
    width: 100%;
    background: rgba(0,0,0,0.5);
    height: 60vh;
    position: relative;

    
`

const Heading=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export default HeroImg2
