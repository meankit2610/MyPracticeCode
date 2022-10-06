import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from "./components/List";
import Sec from "./components/SecList";
function App() {
  return (
    
    <div className="App">
      <h1>Mobile Operating System</h1>
      <List />
      <h1>Mobile Manufactures</h1>
      <Sec />
    </div>
  )
}

export default App;
