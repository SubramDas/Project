import React from 'react'
import styled from 'styled-components';
import logo <i class="fa fa-chrome" aria-hidden="true"></i>

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