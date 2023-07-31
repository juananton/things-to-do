import { useState } from 'react';
import RecipeListItem from './RecipeListItem';
import style from './RecipesList.module.css';

const RecipesList = ({ recipes }) => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  let recipesFiltered = filterRecipesByName(recipes, search);
  recipesFiltered = filterByCategory(recipesFiltered, filterBy);
  const recipesRendered = renderRecipes(recipesFiltered);

  return (
    <div className={style.wrapper}>
      <h1>Recetas</h1>
      <form className={style.form}>
        <input
          type='text'
          value={search}
          onChange={ev => setSearch(ev.target.value)}
        />
        <select value={filterBy} onChange={ev => setFilterBy(ev.target.value)}>
          <option value={'all'}>Todas</option>
          <option value={'principal'}>Principal</option>
          <option value={'dessert'}>Postre</option>
          <option value={'snack'}>Snack</option>
        </select>
      </form>
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

const filterByCategory = (recipes, filterBy) => {
  if (filterBy === 'all') return [...recipes];

  return recipes.filter(recipe => recipe.category === filterBy);
};

const renderRecipes = recipes => {
  if (recipes.length <= 0) return <p>No hay recetas</p>;
  return recipes.map(recipe => (
    <RecipeListItem key={recipe.name} recipe={recipe} />
  ));
};

export default RecipesList;
