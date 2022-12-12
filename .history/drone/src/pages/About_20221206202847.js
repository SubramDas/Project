import React from 'react'
import { Link } from 'react-router-dom'
import AboutContent from '../components/AboutContent'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
     <Navbar/>   
     <HeroImg2/>
     <AboutContent/>
    </>
  )
}

export default About
