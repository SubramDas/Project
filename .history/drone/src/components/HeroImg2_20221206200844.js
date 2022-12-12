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
        background: "https://images.unsplash.com/photo-1495764506633-93d4dfed7c6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyb25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ;
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
