import { useState } from 'react';
import { ALL_CATEGORIES } from '../../constants/categories';

export const useFilters = () => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState(ALL_CATEGORIES);

  return {
    search,
    filterBy,
    setSearch,
    setFilterBy,
  };
};
