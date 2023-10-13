import React from "react";
import "./Recipe.css";

const Recipe = ({ title, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1 class-="recipe-name">{title}</h1>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img className="style.image" src={image} alt="" />
    </div>
  );
};

export default Recipe;