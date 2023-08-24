import { useState } from 'react';
import { CATEGORIES } from '../../constants/categories';
import { validateDescription } from '../../lib/functions/formValidations';
import Button from '../buttons/Button';
import InputText from '../form-controls/InputText';
import Select from '../form-controls/Select';
import style from './CreateItemForm.module.css';

function CreateItemForm() {
  const [description, setDescription] = useState({
    value: '',
    error: undefined,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const newThing = {
      description: description,
      category: e.target.category.value,
    };

    console.log(newThing);
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.row}>
        <InputText
          label='Description'
          className={style.description}
          value={description.value}
          onChange={e =>
            setDescription({
              value: e.target.value,
              error: validateDescription(e.target.value),
            })
          }
          error={description.error}
        />
        <Select label='Category' name='category' className={style.category}>
          {Object.values(CATEGORIES).map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
      </div>
      <div className={style.row}>
        <Button type='submit' kind='primary'>
          Add thing
        </Button>
      </div>
    </form>
  );
}

export default CreateItemForm;
