import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const InfoSection = ({info}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>
        <h3>The significant areas of expertise that DroneVionics possesses include Consulting, Simulation,
          Experimental Solutions and Training for a wide variety of Engineering problems.</h3>
          <h2>
            Our service is suitable for both academic and commercial applications.
          </h2>
        </ProductsHeading>
        <ProductWrapper>
          {info.map((product, index)=>{
            return(
              <ProductCard key={index}>
                <ProductImg src={product.image} alt={product.alt}/>
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.desc}</ProductDesc>
                  <ProductButton>{product.buttonLabel}</ProductButton>
                </ProductInfo>
              </ProductCard>
            )
          })}
        </ProductWrapper>
      
    </ProductsContainer>
  )
}

const ProductsContainer=styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px)/2);
  background: #150f0f;
  color: #fff;
`
const ProductWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto; 
`

const ProductCard=styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

const ProductImg=styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;
`

const ProductsHeading=styled.div`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;


`
const ProductTitle=styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

const ProductInfo=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`
const ProductDesc=styled.p`
    margin-bottom: 1rem;
`

const ProductButton=styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-in-out;

  &:hover{
    background: #ffc500;
    transition: 0.2s e;
  }
`

export default InfoSection