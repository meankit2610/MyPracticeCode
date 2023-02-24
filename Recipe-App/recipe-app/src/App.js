import './App.css';
import React, {useEffect, useState} from 'react'
import Recipes from "./components/Recipes"
function App() {
  const APP_ID = "dc433c64";
  const APP_KEY = "b8bdb5dde455a84f1cc73de207b73a80";
  const [recipe, setRecipe] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getData()
    console.log("hii")
  },[query])

  const getData = async() => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json()
    console.log(data.hits)
    setRecipe(data.hits)
  }
  
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const updateQuery = (e) => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }
  return (
    <div className="App">
      <form className="search-form" onSubmit={updateQuery}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        ></input>
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipe.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            cal={recipe.recipe.calories}
            ingre={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
