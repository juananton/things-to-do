import { useState } from 'react';

export const useFilters = () => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('all');

  return {
    search,
    filterBy,
    setSearch,
    setFilterBy,
  };
};
