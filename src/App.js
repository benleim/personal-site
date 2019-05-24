import React from 'react';
import './App.css';
import Navigation from './Components/Navigation.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Experience from './Components/Experience.js'


function App() {
  return (
    <div className="Home">
        <Navigation/>
        <Home/>
        <About/>
        <Experience/>
    </div>
  );
}

export default App;
