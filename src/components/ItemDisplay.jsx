import style from './ItemDisplay.module.css';

const ItemDisplay = ({ item }) => (
  <div className={style.wrapper}>
    <div className={style.name}>{item.name}</div>
    <div className={style.time}>{item.time} minutos</div>
  </div>
);

export default ItemDisplay;