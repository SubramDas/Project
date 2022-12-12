import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const InfoSection = ({info}) => {
  return (
    <ProductsContainer>
      <ProductsHeading>
        <ProductWrapper>
          {info.map((product, index)=>{
            
          })}
        </ProductWrapper>
      </ProductsHeading>
    </ProductsContainer>
  )
}

const Section=styled.section`

`
const Container=styled.div`

`

const ColumnLeft=styled.div`

`

const ColumnRight=styled.div`

`


export default InfoSection