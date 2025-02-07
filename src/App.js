import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState("light")

  const toggleMode = () =>{
      if(mode === "light"){
        setMode('dark')
        document.body.style.backgroundColor = '#0b3258'
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
      }
  }
  return (
    <>
    <Router>
      <Navbar mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Textform />}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
                          