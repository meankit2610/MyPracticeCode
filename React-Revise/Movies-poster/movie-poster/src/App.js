import './App.css';
import Header from './components/Header';
import Movies from './components/Movies.jsx';
import movies from "./components/movies.json"

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movies.map((e) => {
            return (
              <Movies
              title={e.Title}
                year={e.Year}
                img={e.Poster}
              />
            )
          })
       }
       
      </div>
     
    </div>
  );
}

export default App;
