import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import { useState } from "react";




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
    
    </>
  );
}


export default App;
