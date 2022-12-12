import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo'

const Navbar = () => {
  return (
    <Nav>
    <Logo>
        <img src="" alt="" />
    </Logo>
    <h1> Navbar</h1>
    </Nav>
  )
}


const Nav=styled.nav`
  height: 60px;
  background: red;
`

export default Navbar