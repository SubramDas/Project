import React from "react";
import "./home.scss";
import styled, {css} from 'styled-components/macro';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';


const Home = ({slides}) => {
  return (
    <>
      <HeroSection>
        <HomeWrapper>
          {
            slides.map((slide, index)=>{
              return(
                <HomeSlide key={index}>
                  <HomeSlider>
                    <HomeImage src={slide.images} alt={slide.alt}/>
                      <HomeContent>
                        <h1>{slide.title}</h1>


    
                      </HomeContent>
                  </HomeSlider>
                </HomeSlide>
              )
            })
          }

          <SliderButtons>
            <PrevArrow/>
            <NextArrow/>
          </SliderButtons>
        </HomeWrapper>
      </HeroSection>
    </>
  );
};

const HomeSection= styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`
const HomeWrapper=styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

`

const HomeSlide=styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;

`
const HomeSlider=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`
const HomeImage=styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const HomeContent=styled.div``

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



export default Home;
