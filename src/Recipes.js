import React from "react";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className="Recipes">
      <h1>{title}</h1>
      <p>Calories: {Math.floor(calories)}</p>
      <p>Ingredients:</p>
      <ul className="Recipes-list">
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className="Recipes-image" src={image} alt={title} />
    </div>
  );
};

export default Recipes;
