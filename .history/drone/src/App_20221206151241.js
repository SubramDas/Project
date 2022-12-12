import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import InfoSection from "./components/InfoSection";




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
    <InfoSection info={/>
    </>
  );
}


export default App;
