import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';

const Navbar = () => {
  return (
    <Nav>

    <Logo >
        <Image to src={logo} alt="..LOGO.."/>
    </Logo>
    <MenuBars/>
    <NavMenu>
        {menuData.map((item, index)=>{
            <NavMenuLinks to={item.link} key={index}>
                {item.tile}
            </NavMenuLinks>
        })}
    </NavMenu>
    </Nav>
  )
}


const Nav=styled.nav`
  height: 10vh;
  background: red;
  margin: 0;
  padding: 0;

`
const Logo=styled(Link)`
    width: 5vw;
    height: 10vh;
    display:flex;
    align-items:center;
`
const Image=styled.img`
    width: 5vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    `
const MenuBars=styled.i``
const NavMenu=styled.div`
`

const NavMenuLinks=styled(Link)`

`

export default Navbar