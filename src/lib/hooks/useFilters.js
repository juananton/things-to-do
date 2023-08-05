import { useState } from 'react';
import { ALL_CATEGORIES } from '../../constants/categories';

export const useFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
    filterBy: ALL_CATEGORIES,
    page: 1,
    itemsPerPage: 2,
  });

  const setSearch = newSearch =>
    setFilters({
      ...filters,
      page: 1,
      search: newSearch,
    });

  const setFilterBy = newFilterBy =>
    setFilters({
      ...filters,
      page: 1,
      filterBy: newFilterBy,
    });

  const setPage = newPage => {
    setFilters({
      ...filters,
      page: newPage,
    });
  };

  const setItemsPerPage = newItemsPerPage => {
    setFilters({
      ...filters,
      itemsPerPage: newItemsPerPage,
    });
  };

  return {
    filters,
    setSearch,
    setFilterBy,
    setPage,
    setItemsPerPage,
  };
};
