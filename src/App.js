import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
import "./App.css";

const App = () => {
  const APP_ID = "598fedc2";
  const APP_KEY = "4bc615f4c23747a23b1c5ce0b34aa364";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((result) => (
        <Recipes
          title={result.recipe.label}
          calories={result.recipe.calories}
          image={result.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
