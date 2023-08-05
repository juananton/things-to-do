import ListItem from './ListItem';

const List = ({ paginatedData }) => {
  if (!paginatedData.length) return <p>No hay recetas</p>;
  return paginatedData.map(item => <ListItem key={item.id} item={item} />);
};

export default List;
