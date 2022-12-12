import React from "react";
import styled, {css} from 'styled-components/macro';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Hero = ({slides}) => {
  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {
            slides.map((slide, index)=>{
              return(
                <HeroSlide key={index}>
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt}/>
                      <HeroContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>
                        <Button to={slide.path} primary="true"
                        css={`
                        max-width: 160px;
                        `}>
                          {slide.label}
                          <Arrow/>
                        </Button>


    
                      </HeroContent>
                  </HeroSlider>
                </HeroSlide>
              )
            })
          }

          <SliderButtons>
            <PrevArrow/>
            <NextArrow/>
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

const HeroSection= styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`
const HeroWrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

`

const HeroSlide=styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;

`
const HeroSlider=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: ;
  }
`
const HeroImage=styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`


const HeroContent=styled.div`

`

const Arrow=styled(ArrowForwardIcon)`

`

const SliderButtons=styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`

const arrowButtons=css`
  width: 3rem!important;
  height: 3rem!important;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover{
    background: #cd853f;
    transform: scale(1.05); 
  }
`;
const PrevArrow=styled(KeyboardDoubleArrowLeftIcon)`
    ${arrowButtons}
`
const NextArrow=styled(KeyboardDoubleArrowRightIcon)`
    ${arrowButtons}

`



export default Hero;
