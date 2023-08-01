import ListItem from './ListItem';

const List = ({ recipes }) => {
  if (recipes.length <= 0) return <p>No hay recetas</p>;
  return recipes.map(recipe => <ListItem key={recipe.name} recipe={recipe} />);
};

export default List;
