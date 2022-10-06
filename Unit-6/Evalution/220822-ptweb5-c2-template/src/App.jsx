import Slide from "./Components/Slide";

import "./App.css";
import React from "react";

// once you download the template; please run  "npm install" command and that will install all the packages required for this project by referencing package.json;

// do not remove any of the data-cy attributes;

// API to get the data : https://slides-app-220822.herokuapp.com/slides


export default function App() {
  // const [page, setPage] = React.useState(1);
  const [page, setPage] = React.useState(1);
  const [det, setDet] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading , setLoading] = React.useState(false)
  const [totalItem , setTotal] = React.useState(0)
  React.useEffect(() => {
  fetchData();
  }, [page])
 
  const fetchData = () => {
   setLoading(true)
   fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${page}&_limit=1`)
     .then((res) => {
       let total =res.headers.get("X-Total-Count");
       setTotal(+total);
       return res.json()
     })
   .then((res)=> setDet(res))
   .catch((err)=> setError(true))
   .finally(() => setLoading(false))
  }
  console.log(det);
  return (
    <div className="App">
      <h1 data-cy="header">Slides</h1>
      <Slide />
      {loading ? (
        <div>Loading..</div>
      ) : error ? (
          <h3>Something Wrong</h3>
        ) : (det.map((el) => (<div key ={el.id}><p>{el.title}</p>
        <h2>{el.description}</h2></div>
        
        
      )))}
      <button data-cy="prev" onClick={() => setPage(page-1)} disabled={page==1}>Prev</button>
      <button data-cy="next" onClick={() => setPage(page+1)} disabled={page == Math.ceil(totalItem/1)}>Next</button>
    </div>
  );
}
