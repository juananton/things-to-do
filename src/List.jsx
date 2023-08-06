import style from './List.module.css';
import ListItem from './ListItem';

const List = ({ paginatedData, error, loading }) => {
  if (loading) return <p>Cargando datos</p>;
  if (error) return <p>Error al cargar los datos</p>;
  if (!paginatedData.length) return <p>No hay datos que mostrar</p>;
  return (
    <ul className={style.list}>
      {paginatedData.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
