import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <Nav>
    <Logo >
        
    </Logo>
    <h1> Navbar</h1>
    </Nav>
  )
}


const Nav=styled.nav`
  height: 10vh;
  background: red;
`
const Logo=styled.img`
    width: 5vw;
    height: 5vh;
    position: absolute;
`

export default Navbar