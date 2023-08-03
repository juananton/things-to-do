export const filterByName = (data, search) => {
  if (!search) return [...data];

  const lowerCasedSearch = search.toLocaleLowerCase();

  return data.filter(item =>
    item.name.toLowerCase().includes(lowerCasedSearch)
  );
};

export const filterByCategory = (data, filterBy) => {
  if (filterBy === 'all') return [...data];

  return data.filter(item => item.category === filterBy);
};
