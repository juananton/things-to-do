import { ALL_CATEGORIES } from '../../constants/categories';
import { SORT_OPTIONS } from '../../constants/sortOptions';

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

export const sortData = (data, sortBy) => {
  const sortedData = [...data];
  switch (sortBy) {
    case SORT_OPTIONS.DATE:
      return sortedData.sort((a, b) => {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      });
    case SORT_OPTIONS.NAME:
      return sortedData.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    default:
      return sortedData;
  }
};

export const paginate = (data, page, itemsPerPage) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(startIndex, endIndex);

  return { paginatedData, totalPages };
};
