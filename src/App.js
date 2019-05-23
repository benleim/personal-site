import React from 'react';
import './App.css';
import Navigation from './Components/Navigation.js'
import About from './Components/About.js'
import Home from './Components/Home.js'

function App() {
  return (
    <div className="Home">
        <Navigation/>
        <Home/>
        <About/>
    </div>
  );
}

export default App;
