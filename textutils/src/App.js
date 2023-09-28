// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Textutils" aboutText="About textUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        <About/>
      </div>
    </>
  );
}

export default App;
