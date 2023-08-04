import { useState } from 'react';
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
  const { search, filterBy, setSearch, setFilterBy } = useFilters();

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const data = getData(rawData, { search, filterBy, page, itemsPerPage });

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Recetas</h1>
      <ManagerToolbar
        search={search}
        setSearch={setSearch}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <List data={data} />
      <Pagination
        page={page}
        itemsPerPage={itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

const getData = (rawData, { search, filterBy, page, itemsPerPage }) => {
  let dataFiltered = searchByName(rawData, search);
  dataFiltered = filterByCategory(dataFiltered, filterBy);
  dataFiltered = paginate(dataFiltered, page, itemsPerPage);

  return dataFiltered;
};

export default Manager;
