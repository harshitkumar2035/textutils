import './App.js';
import './About.js';
import Navbar from './Navbar.js';
import TextForm from './TextForm.js';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
     
  // color theme change karne ka function 
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743'; // dark blue
  //     document.body.style.color = 'white';
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //   }
  // }

  const toggleTheme = (color) => {
     document.body.style.backgroundColor = ""; // clear old color
    switch (color) {
      case "primary":
        document.body.style.backgroundColor = "#0d6efd"; // blue
        break;
      case "success":
        document.body.style.backgroundColor = "#198754"; // green
        break;
      case "danger":
        document.body.style.backgroundColor = "#dc3545"; // red
        break;
      case "warning":
        document.body.style.backgroundColor = "#ffc107"; // yellow
        break;
      default:
        document.body.style.backgroundColor = "white";
    }
  };
 
  // Dark mode toggle 
  const toggleMode = () => {
    if (mode=== "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';

    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} 
      toggleTheme={toggleTheme} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
      </div>
    </>
  );
}

export default App;


