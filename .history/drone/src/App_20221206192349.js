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
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";


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

    <Routes>
      <Route path="about" element={<About/>}/>
      <Route path
    </Routes>

    </>
  );
}


export default App;
