import { useState } from 'react';
import RecipeListItem from './RecipeListItem';
import style from './RecipesList.module.css';

const RecipesList = ({ recipes }) => {
  const [search, setSearch] = useState('');

  const recipesFiltered = filterRecipesByName(recipes, search);
  const recipesRendered = renderRecipes(recipesFiltered);

  return (
    <div className={style.wrapper}>
      <h1>Recetas</h1>
      <input
        type='text'
        name='search'
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      {recipesRendered}
    </div>
  );
};

const filterRecipesByName = (recipes, search) => {
  if (!search) return recipes;

  const lowerCasedSearch = search.toLocaleLowerCase();

  return recipes.filter(recipe =>
    recipe.name.toLowerCase().startsWith(lowerCasedSearch)
  );
};

const renderRecipes = recipes => {
  if (recipes.length <= 0) return <p>No hay recetas</p>;
  return recipes.map(recipe => (
    <RecipeListItem key={recipe.name} recipe={recipe} />
  ));
};

export default RecipesList;
