import List from './List';
import style from './Manager.module.css';
import ManagerToolbar from './ManagerToolbar';
import Pagination from './Pagination';
import {
  filterByCategory,
  paginate,
  searchByName,
} from './lib/functions/filterFunctions';
import { useFilters } from './lib/hooks/useFilters';

const Manager = ({ rawData }) => {
  const { filters, setSearch, setFilterBy, setPage, setItemsPerPage } =
    useFilters();

  const { data, totalPages } = getData(rawData, filters);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Recetas</h1>
      <ManagerToolbar
        search={filters.search}
        setSearch={setSearch}
        filterBy={filters.filterBy}
        setFilterBy={setFilterBy}
      />
      <List data={data} />
      <Pagination
        page={filters.page}
        itemsPerPage={filters.itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
      />
    </div>
  );
};

const getData = (rawData, { search, filterBy, page, itemsPerPage }) => {
  let dataFiltered = searchByName(rawData, search);
  dataFiltered = filterByCategory(dataFiltered, filterBy);

  const totalPages = Math.ceil(dataFiltered.length / itemsPerPage);

  dataFiltered = paginate(dataFiltered, page, itemsPerPage);

  return { data: dataFiltered, totalPages };
};

export default Manager;
