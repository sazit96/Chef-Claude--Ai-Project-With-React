import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";
import { getRecipeFromMistral } from "./ai";
import Loader from "./Loader";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function GetRecipe() {
    setIsLoading(true); 
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setIsLoading(false);
  }

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    event.currentTarget.reset();
  }

  return (
    <main className="main">
      <form onSubmit={addIngredient} className="ingredient-input-container">
        <input
          type="text"
          className="ingredient-input"
          placeholder="Write your ingredients"
          name="ingredient"
        />
        <button className="ingredient-button">+ Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} GetRecipe={GetRecipe} />
      )}

      {isLoading && <Loader />}

      {!isLoading && recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
