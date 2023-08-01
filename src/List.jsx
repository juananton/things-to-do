import ListItem from './ListItem';

const List = ({ recipes }) => {
  if (!recipes.length) return <p>No hay recetas</p>;
  return recipes.map(recipe => <ListItem key={recipe.id} recipe={recipe} />);
};

export default List;
