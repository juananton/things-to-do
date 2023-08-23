import Category from './Category';
import PencilIcon from './Icons/PencilIcon';
import TrashIcon from './Icons/TrashIcon';
import ItemDisplay from './ItemDisplay';
import style from './ListItem.module.css';
import IconButton from './buttons/IconButton';
import InputCheckBox from './form-controls/InputCheckBox';

const ListItem = ({ item }) => {
  return (
    <li className={style.row}>
      <InputCheckBox />
      <div className={style.name}>
        <ItemDisplay item={item} />
      </div>
      <div className={style.category}>
        <Category category={item.category} />
      </div>
      <div className={style.tools}>
        <IconButton icon={PencilIcon} />
        <IconButton icon={TrashIcon} />
      </div>
    </li>
  );
};

export default ListItem;
