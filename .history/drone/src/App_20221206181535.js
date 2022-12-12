import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import WhatWeDo from "./components/WhatWeDo";
import { DoData } from "./data/DoData";
import About from "./pages/About";
import {Route, Routes} from "react-router-dom";




function App() {
  const [isOpen,setIsopen]=useState(false);
  const toggle=()=>{
    setIsopen(!isOpen)
  }

  return (
    <>


    <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Hero slides={SliderData}/>
    <InfoSection info={InfoData}/>
    <WhatWeDo data={DoData}/>

    </>
  );
}


export default App;
