import List from './List';
import style from './Manager.module.css';
import ManagerToolbar from './ManagerToolbar';
import {
  filterByCategory,
  searchByName,
} from './lib/functions/filterFunctions';
import { useFilters } from './lib/hooks/useFilters';

const RecipesManager = ({ data }) => {
  const { search, filterBy, setSearch, setFilterBy } = useFilters();

  let dataFiltered = searchByName(data, search);
  dataFiltered = filterByCategory(dataFiltered, filterBy);

  return (
    <div className={style.wrapper}>
      <h1>Recetas</h1>
      <ManagerToolbar
        search={search}
        setSearch={setSearch}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <List data={dataFiltered} />
    </div>
  );
};

export default RecipesManager;
