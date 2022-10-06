import logo from './logo.svg';
import './App.css';
import { Todo } from "./Components/Todo";
import { Navbar } from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import {Home} from "./Pages/Home"
import {About} from "./Pages/About"
import {Contact} from "./Pages/Contact"

// Routes
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/about" element={ <About/> }></Route>
        <Route path="/contact" element={ <Contact/> }></Route>
        <Route path="/todo" element={ <Todo/> }></Route>
      </Routes>
       {/* <Todo /> */}
    </div>
  );
}

export default App;
