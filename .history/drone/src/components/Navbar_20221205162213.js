import React from 'react'
import styled, {css} from 'styled-components/macro';
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
        {menuData.map((item, index)=>(
            <NavMenuLinks to={item.link} key={index}>
                {item.title}
            </NavMenuLinks>
        ))}
    </NavMenu>
    <N
    </Nav>
  )
}


const Nav=styled.nav`
    display: flex;
  height: 10vh;
  background: black;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;



`
const NavLink =css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    cursor: pointer;
    text-decoration: none;
`


const Logo=styled(Link)`
    ${NavLink}
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
    align-items: center;

`

const NavMenuLinks=styled(Link)`
    ${NavLink}

`

export default Navbar