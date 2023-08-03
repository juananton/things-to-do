import ListItem from './ListItem';

const List = ({ data }) => {
  if (!data.length) return <p>No hay recetas</p>;
  return data.map(item => <ListItem key={item.id} item={item} />);
};

export default List;
