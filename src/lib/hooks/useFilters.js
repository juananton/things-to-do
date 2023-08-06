import { useState } from 'react';
import { ALL_CATEGORIES } from '../../constants/categories';
import { SORT_OPTIONS } from '../../constants/sortOptions';

export const useFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
    filterBy: ALL_CATEGORIES,
    sortBy: SORT_OPTIONS.DEFAULT,
    page: 1,
    itemsPerPage: 4,
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

  const setSortBy = newSortBy =>
    setFilters({
      ...filters,
      page: 1,
      sortBy: newSortBy,
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
      page: 1,
      itemsPerPage: newItemsPerPage,
    });
  };

  return {
    filters,
    setSearch,
    setFilterBy,
    setSortBy,
    setPage,
    setItemsPerPage,
  };
};
