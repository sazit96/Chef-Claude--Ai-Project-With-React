import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    if (newIngredient) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    event.currentTarget.reset();
  }

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li className="ingredient-item" key={ingredient}>
      {ingredient}
    </li>
  ));

  return (
    <main className="main">
      <form onSubmit={addIngredient} className="ingredient-input-container">
        <input
          type="text"
          className="ingredient-input"
          placeholder="e.g., oregano"
          name="ingredient"
        />
        <button className="ingredient-button">+ Add Ingredient</button>
      </form>
      <ul className="ingredient-list">{ingredientsListItems}</ul>
    </main>
  );
}
