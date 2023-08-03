import List from './List';
import style from './Manager.module.css';
import ManagerToolbar from './ManagerToolbar';
import {
  filterByCategory,
  filterRecipesByName,
} from './lib/functions/filterFunctions';
import { useFilters } from './lib/hooks/useFilters';

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

export default RecipesManager;
