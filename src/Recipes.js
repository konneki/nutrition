import React from "react";

const Recipes = ({ title, calories, image }) => {
  return (
    <div className="Recipes">
      <h1>{title}</h1>
      <p>{Math.floor(calories)}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Recipes;
