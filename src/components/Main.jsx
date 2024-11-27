import React from "react";

export default function Main() {
  const ingradients = ["Chicken","Egg","milk"]
  const ingradientsListItems = ingradients.map(ingradients =>(
    <li key={ingradients}>{ingradients}</li>
  ))
  function handleSubmit (event) {
    event.preventDefault()
    const formData = new formData (event.currentTarget)
    const newIngredient = formData.get("ingredients")
    console.log(newIngredient)
  }
    return (
        <main className="main">
          <form onSubmit={handleSubmit} className="ingredient-input-container">
            <input
              type="text"
              className="ingredient-input"
              placeholder="e.g., oregano"
              name="ingredient"
            />
            <button className="ingredient-button">+ Add Ingredient</button>
          </form>
          <ul>
            {ingradientsListItems}
          </ul>
        </main>
      );
}