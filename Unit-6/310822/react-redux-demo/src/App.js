import logo from './logo.svg';
import './App.css';
import { Todo } from './Components/Todos';
import { Counter } from './Components/Counter/counter';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <br />
      <hr/>
     <Todo/>
    </div>
  );
}

export default App;
