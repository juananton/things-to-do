import { useEffect, useState } from 'react';
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

const Manager = () => {
  const { filters, setSearch, setFilterBy, setPage, setItemsPerPage } =
    useFilters();

  const { data, totalPages } = useRawData(filters);

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

const fetchRawData = async setRawData => {
  const res = await fetch('http://localhost:4001/rawData');
  const data = await res.json();
  setRawData(data);
};

const useRawData = ({ search, filterBy, page, itemsPerPage }) => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    fetchRawData(setRawData);
  }, []);

  let filteredData = searchByName(rawData, search);
  filteredData = filterByCategory(filteredData, filterBy);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  filteredData = paginate(filteredData, page, itemsPerPage);

  return { data: filteredData, totalPages };
};

export default Manager;
