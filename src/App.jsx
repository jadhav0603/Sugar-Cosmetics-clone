import './App.css'
import Navbar from "./components/Navbar"
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { SelectedOptionContext } from './components/SelectedOptionContext';

function App() {
  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])

  return (
      <div id="mainContainer">
        <div style={{position:"fixed", width:"100%",zindex:1000}}>
        <Navbar />
        </div>

        <div style={{paddingTop:"120px"}}>
          <AllRoutes />
          <Footer/>
        </div>
      </div>
  )
}

export default App
