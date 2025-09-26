import './App.js';
import './About.js';
import Navbar from './Navbar.js';
import TextForm from './TextForm.js';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'; // dark blue
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;


