import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import GlobalStyle from "./globalStyles";
import S



function App() {
  return (
    <>

    <GlobalStyle/>
    <Navbar/>
    <Hero slides={SliderData}/>
    </>
  );
}


export default App;
