import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title="TextConverter" />
      <div className='container my-3'>
      <TextForm/>
       </div>
    </div>
  );
}

export default App;
