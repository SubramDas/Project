import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";



function App() {
  return (
    <>

    <GlobalStyle/>
    <Navbar/>
    <Dro
    <Hero slides={SliderData}/>
    </>
  );
}


export default App;
