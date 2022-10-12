import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
     setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode is Enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor ='white'
      showAlert("Light Mode is Enabled", "success")
    }
  }
  return (
    <div className="App">
      <Navbar title="TextConverter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm showAlert={showAlert} mode={mode}/>
       </div>
      {/* <About/> */}
    </div>
  );
}

export default App;
