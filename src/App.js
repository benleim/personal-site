import React from 'react';
import './App.css';
import Navigation from './Components/Navigation.js'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Experience from './Components/Experience.js'
import Projects from './Components/Projects.js'


function App() {
  return (
    <div className="Home">
        <Navigation/>
        <Home/>
        <About/>
        <Experience/>
        <Projects/>
    </div>
  );
}

export default App;
