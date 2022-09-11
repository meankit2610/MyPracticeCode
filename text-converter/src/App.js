import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <div className="App">
      <Navbar title="TextConverter" />
      <TextForm/>
    </div>
  );
}

export default App;
