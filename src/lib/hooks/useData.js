import { useEffect, useState } from 'react';
import {
  filterByCategory,
  paginate,
  searchByName,
  sortData,
} from '../functions/filterFunctions';

const fetchRawData = async (setRawData, setError, signal) => {
  try {
    const res = await fetch('http://localhost:4001/rawData', { signal });
    if (res.ok) {
      const data = await res.json();
      setRawData(data);
    } else {
      setError();
    }
  } catch (err) {
    setError();
  }
};

const getDataToDisplay = (
  rawData,
  { search, filterBy, sortBy, page, itemsPerPage }
) => {
  let filteredData = searchByName(rawData, search);
  filteredData = filterByCategory(filteredData, filterBy);
  filteredData = sortData(filteredData, sortBy);

  const { paginatedData, totalPages } = paginate(
    filteredData,
    page,
    itemsPerPage
  );

  return { paginatedData, totalPages };
};

export const useData = filters => {
  const [data, setData] = useState({
    rawData: [],
    error: false,
    loading: true,
  });

  const setRawData = newData =>
    setData({ rawData: newData, loading: false, error: false });

  const setError = () => setData({ rawData: [], loading: false, error: true });

  useEffect(() => {
    const controller = new AbortController();

    fetchRawData(setRawData, setError, controller.signal);

    return () => controller.abort();
  }, []);

  const { paginatedData, totalPages } = getDataToDisplay(data.rawData, filters);

  return {
    paginatedData,
    totalPages,
    error: data.error,
    loading: data.loading,
  };
};
