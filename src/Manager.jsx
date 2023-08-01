import { useState } from 'react';
import List from './List';
import style from './Manager.module.css';
import ManagerToolbar from './ManagerToolbar';

const RecipesManager = ({ recipes }) => {
  const { search, filterBy, setSearch, setFilterBy } = useFilters();

  let recipesFiltered = filterRecipesByName(recipes, search);
  recipesFiltered = filterByCategory(recipesFiltered, filterBy);

  return (
    <div className={style.wrapper}>
      <h1>Recetas</h1>
      <ManagerToolbar
        search={search}
        setSearch={setSearch}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <List recipes={recipesFiltered} />
    </div>
  );
};

const useFilters = () => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  return {
    search,
    filterBy,
    setSearch,
    setFilterBy,
  };
};

const filterRecipesByName = (recipes, search) => {
  if (!search) return [...recipes];

  const lowerCasedSearch = search.toLocaleLowerCase();

  return recipes.filter(recipe =>
    recipe.name.toLowerCase().startsWith(lowerCasedSearch)
  );
};

const filterByCategory = (recipes, filterBy) => {
  if (filterBy === 'all') return [...recipes];

  return recipes.filter(recipe => recipe.category === filterBy);
};

export default RecipesManager;
