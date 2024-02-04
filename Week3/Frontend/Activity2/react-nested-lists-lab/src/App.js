import Recipe from "./compoennts/Recipe.js";
import recipesData from "./recipesData.js";

function App() {
  return (
    <div className="App">
      <h1>Recipes</h1>
      <div className="recipe-list">
        {recipesData.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
