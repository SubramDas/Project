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

    &:before{
        content: '';
        background: url("https://images.unsplash.com/photo-1532989029401-439615f3d4b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80");
        background-size: cover;
        background-position: center top;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
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
