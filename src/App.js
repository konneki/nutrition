import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./App.css";

const App = () => {
  const APP_ID = "598fedc2";
  const APP_KEY = "4bc615f4c23747a23b1c5ce0b34aa364";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        {recipes.map((result) => (
          <Recipes
            key={result.recipe.label}
            title={result.recipe.label}
            calories={result.recipe.calories}
            ingredients={result.recipe.ingredients}
            image={result.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
