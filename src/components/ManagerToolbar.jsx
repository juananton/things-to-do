import { ALL_CATEGORIES, CATEGORIES } from '../constants/categories';
import { SORT_OPTIONS } from '../constants/sortOptions';
import style from './ManagerToolbar.module.css';
import InputSearch from './forms/InputSearch';
import Select from './forms/Select';

const ManagerToolbar = ({
  search,
  setSearch,
  filterBy,
  setFilterBy,
  sortBy,
  setSortBy,
}) => {
  return (
    <form className={style.form}>
      <InputSearch
        placeholder='Buscar...'
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      <Select value={filterBy} onChange={ev => setFilterBy(ev.target.value)}>
        <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
        {Object.values(CATEGORIES).map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
      <Select
        value={sortBy}
        onChange={ev => setSortBy(Number(ev.target.value))}
      >
        <option value={SORT_OPTIONS.DEFAULT}>Por defecto</option>
        <option value={SORT_OPTIONS.NAME}>Por nombre</option>
        <option value={SORT_OPTIONS.TIME}>Por tiempo</option>
      </Select>
    </form>
  );
};

export default ManagerToolbar;
