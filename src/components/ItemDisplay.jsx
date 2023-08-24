import style from './ItemDisplay.module.css';

const ItemDisplay = ({ item }) => (
  <div className={style.wrapper}>
    <div className={style.description}>{item.description}</div>
    <div className={style.time}>{item.date}</div>
  </div>
);

export default ItemDisplay;
