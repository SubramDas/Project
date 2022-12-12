import React from 'react'
import styled, {css} from 'styled-components/macro';
import logo from '../images/Logo.png';
import {Link} from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { Button } from './Button';

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
    <NavBtn>
        <Button to='/contact'>CONTACT US</Button>
    </NavBtn>
    </Nav>
  )
}


const Nav=styled.nav`
    display: flex;
  height: 10vh;
  background: red;
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
    height: 0vh;
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
const MenuBars=styled.i`
    display: none;
`
const NavMenu=styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and  {
        
    }

`

const NavMenuLinks=styled(Link)`
    ${NavLink}

`

const NavBtn=styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`

export default Navbar