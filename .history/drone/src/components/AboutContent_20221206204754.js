import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ImageOne from "../images/imagea.jpg1";
import ImageTwo from "../images/imaged.jpg";

const AboutContent = () => {
  return (
    <>
    <About>
        <Left>
            <h1>WHO ARE WE??</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae tenetur dolor ex sequi nulla cupiditate iure dolorum quibusdam voluptatem ut!</p>
            <Link to='/contact'>
                <Buttons>CONTACT US</Buttons> 
            </Link>
        </Left>
        <Right>
            <ImgContainer>
                <ImgStack1> 
                    <Img src={ImageOne} alt="..Image.."/>
                </ImgStack1>
                <ImgStack2> 
                    <Img src={ImageOne} alt="..Image.."/>
                </ImgStack2>

            </ImgContainer>

        </Right>        
    </About>
    </>
  )
}

const About=styled.div`
    width: 100%;
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
`

const Left=styled.div`
    text-align: center;
    margin: auto;
    padding: 1rem;
    max-width: 350px;

    p{
        margin: 1.2rem 0;
    }

`

const Right=styled.div`
    max-width: 700px;

`
const ImageContainer=styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    align-items: center;
    text-align: center;
`
const ImgStack1=styled.div`
    grid
`

const Img=styled.img`
    max-width: 90%;
    border: 1px solid #333;

`

export default AboutContent
