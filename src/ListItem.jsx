import Category from './Category';
import style from './ListItem.module.css';

const ListItem = ({ item }) => {
  return (
    <div className={style.row}>
      <div className={style.data}>
        <span className={style.name}>{item.name}</span>
        <span>{item.time}</span>
      </div>
      <div className={style.category}>
        <Category category={item.category} />
      </div>
      <div className={style.tools}>
        <span>Edit</span>
      </div>
    </div>
  );
};

export default ListItem;
