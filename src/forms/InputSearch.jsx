import style from './InputSearch.module.css';

const InputSearch = props => (
  <input {...props} className={style.input} type='text' />
);

export default InputSearch;
