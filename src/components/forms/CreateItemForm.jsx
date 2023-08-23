import { CATEGORIES } from '../../constants/categories';
import Button from '../buttons/Button';
import InputText from '../form-controls/InputText';
import Select from '../form-controls/Select';
import style from './CreateItemForm.module.css';

function CreateItemForm() {
  return (
    <form className={style.form}>
      <InputText label='Thing to do' className={style.thing} />
      <Select label='Category' className={style.category}>
        {Object.values(CATEGORIES).map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
      <Button kind='primary'>Add thing</Button>
    </form>
  );
}

export default CreateItemForm;
