export const filterRecipesByName = (recipes, search) => {
  if (!search) return [...recipes];

  const lowerCasedSearch = search.toLocaleLowerCase();

  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(lowerCasedSearch)
  );
};

export const filterByCategory = (recipes, filterBy) => {
  if (filterBy === 'all') return [...recipes];

  return recipes.filter(recipe => recipe.category === filterBy);
};
