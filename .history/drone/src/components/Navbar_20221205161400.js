import React from 'react'
import styled from 'styled-components';
import logo from '../images/Logo.png';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';

const Navbar = () => {
  return (
    <Nav>

    <Logo >
        <Image to="/" src={logo} alt="..LOGO.."/>
    </Logo>
    <MenuBars/>
    <NavMenu>
        {menuData.map((item, index)=>{
            <NavMenuLinks to={item.link} key={index}>
                {item.title}
            </NavMenuLinks>
        ))}
    </NavMenu>
    </Nav>
  )
}


const Nav=styled.nav`
    display: flex;
  height: 10vh;
  background: black;


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
    display: flex;
`

const NavMenuLinks=styled(Link)`
    color: white;

`

export default Navbar