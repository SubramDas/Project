import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <Nav>

    <Logo >
        <Image src={logo} alt="..LOGO.."/>
    </Logo>
    </Nav>
  )
}


const Nav=styled.nav`
  height: 10vh;
  background: red;
  margin: 0;
  padding: 0;

`
const Logo=styled.d`
    width: 5vw;
    height: 5vh;
    display:flex;
    align-items:center;
`
const Image=styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    `

export default Navbar