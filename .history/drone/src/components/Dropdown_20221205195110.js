import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'

const Dropdown = () => {
  return (
    <DropdownContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <DropDownWrapper>
            <DropdownMenu>
                {menuData.map((item, index)=>{
                    <DropDownLink to={item.link} key={index}>
                        {item.title}
                    </DropDownLink>
                })}
            </DropdownMenu>
            <BtnWrap>
                <Button primary="true" round="true" big="true" to="/contact">CONTACT US</Button>
            </BtnWrap>
        </DropDownWrapper>
    </DropdownContainer>
  )
}

const DropdownContainer=styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: 1;
`

const Icon=styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

    
`
const CloseIcon=styled(FaTimes)`
    color: #000d1a;
    
`
const DropDownWrapper=styled.div`

`
const DropdownMenu=styled.div`

`
const DropDownLink=styled(Link)`

`
const BtnWrap=styled.div`

`

export default Dropdown