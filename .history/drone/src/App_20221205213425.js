import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";




function App() {
  const [isOpen,setIsopen]
  
  return (
    <>


    <GlobalStyle/>
    <Navbar/>
    <Dropdown/>
    <Hero slides={SliderData}/>
    </>
  );
}


export default App;
