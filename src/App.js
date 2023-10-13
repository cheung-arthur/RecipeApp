import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import axios from "axios";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("rice");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:3000/recipes/${query}`);
    console.log(response.data);
    setRecipes(response.data);
  };

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
      <h1 class="App-title">DISH DISCOVERY DATABASE</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Enter an ingredient (e.g beef)"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      <div class="footer">
          ©
          2023
          Arthur Cheung 🔱
      </div>
    </div>
    
    
  );
};

export default App;