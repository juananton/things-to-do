import { ALL_CATEGORIES } from '../../constants/categories';

export const searchByName = (data, search) => {
  if (!search) return [...data];

  const lowerCasedSearch = search.toLocaleLowerCase();

  return data.filter(item =>
    item.name.toLowerCase().includes(lowerCasedSearch)
  );
};

export const filterByCategory = (data, filterBy) => {
  if (filterBy === ALL_CATEGORIES) return [...data];

  return data.filter(item => item.category === filterBy);
};

export const paginate = (data, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return data.slice(startIndex, endIndex);
};
