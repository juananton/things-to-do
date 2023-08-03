import style from './ManagerToolbar.module.css';
import InputSearch from './forms/InputSearch';

const ManagerToolbar = ({ search, setSearch, filterBy, setFilterBy }) => {
  return (
    <form className={style.form}>
      <InputSearch
        placeholder='Buscar...'
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      <select value={filterBy} onChange={ev => setFilterBy(ev.target.value)}>
        <option value={'all'}>Todas</option>
        <option value={'principal'}>Principal</option>
        <option value={'dessert'}>Postre</option>
        <option value={'snack'}>Snack</option>
      </select>
    </form>
  );
};

export default ManagerToolbar;
