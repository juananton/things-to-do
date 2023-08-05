import { useEffect, useState } from 'react';
import {
  filterByCategory,
  paginate,
  searchByName,
} from '../functions/filterFunctions';

const fetchRawData = async (setRawData, signal) => {
  const res = await fetch('http://localhost:4001/rawData', { signal });
  const data = await res.json();
  setRawData(data);
};

const getDataToDisplay = (
  rawData,
  { search, filterBy, page, itemsPerPage }
) => {
  let filteredData = searchByName(rawData, search);
  filteredData = filterByCategory(filteredData, filterBy);
  const { paginatedData, totalPages } = paginate(
    filteredData,
    page,
    itemsPerPage
  );

  return { paginatedData, totalPages };
};

export const useData = filters => {
  const [rawData, setRawData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetchRawData(setRawData, controller.signal);

    return () => controller.abort();
  }, []);

  const { paginatedData, totalPages } = getDataToDisplay(rawData, filters);

  return { paginatedData, totalPages };
};
