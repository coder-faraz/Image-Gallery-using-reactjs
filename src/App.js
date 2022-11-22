
import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import NavigationBar from "./MyComponents/Navbar";
import Images from './MyComponents/Images';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';




function App() {

  const [mode, setMode] = useState('light');

  const [progress, setProgress] = useState(0)


  let modeChanger = () => {
    if(mode === "light") {
      document.body.classList.add("dark");
      setMode("dark");
    }
    else {
      document.body.classList.remove("dark");
      setMode("light");
    }
  }


  const setLoadingBarProgress = (process) => {
    setProgress(process);
  }

  return (

    <Router>
      <NavigationBar title="Image Gallery" useMode={ mode } toggler={ modeChanger } />
      <LoadingBar
        color='#f11946' progress={ progress } />
      
      <Routes>  {/* When i m navigating, the component is not Re-mounting because react thinks that a component
                     is already mounted then why re-mount when its path changes. You have to force Re-mount a 
                     component by giving a unique key prop to all the elements, then it will Re-mount */}
          <Route exact path="/" element={ <Images progress={ setLoadingBarProgress } key="mountains" cat='mountains'/> } />
          <Route exact path="/science" element={ <Images progress={ setLoadingBarProgress } Key="science" cat='science'/> } />
          <Route exact path="/cars" element={ <Images progress={ setLoadingBarProgress } key="cars" cat='cars'/> } />
          <Route exact path="/sports" element={ <Images progress={ setLoadingBarProgress } key="sports" cat='sports'/> } />
          <Route exact path="/flowers" element={ <Images progress={ setLoadingBarProgress } key="flowers" cat='flowers'/> } />
          <Route exact path="/fruits" element={ <Images progress={setLoadingBarProgress } key="fruits" cat='fruits'/> } />
          <Route exact path="/monuments" element={ <Images progress={ setLoadingBarProgress } key="monuments" cat='monuments'/> } />
        </Routes>
      <Images />
    </Router>

  );
}



export default App;
