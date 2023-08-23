import Category from './Category';
import ItemDisplay from './ItemDisplay';
import style from './ListItem.module.css';

const ListItem = ({ item }) => {
  return (
    <li className={style.row}>
      <div className={style.name}>
        <ItemDisplay item={item} />
      </div>
      <div className={style.category}>
        <Category category={item.category} />
      </div>
      <div className={style.tools}>
        <span>Editar</span>
      </div>
    </li>
  );
};

export default ListItem;
