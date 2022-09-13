import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor ='#042743'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor ='white'
    }
  }
  return (
    <div className="App">
      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
      <TextForm mode={mode}/>
       </div>
      {/* <About/> */}
    </div>
  );
}

export default App;
