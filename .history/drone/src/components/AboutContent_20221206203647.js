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
                <ImgStack1></ImgStack1>
            </ImgContainer>

        </Right>        
    </About>
    </>
  )
}

export default AboutContent
