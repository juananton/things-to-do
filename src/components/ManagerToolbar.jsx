import { ALL_CATEGORIES, CATEGORIES } from '../constants/categories';
import { SORT_OPTIONS } from '../constants/sortOptions';
import style from './ManagerToolbar.module.css';
import InputSearch from './form-controls/InputSearch';
import Select from './form-controls/Select';

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
        className={style.search}
        placeholder='Search...'
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      <div className={style.wrapper}>
        <Select
          className={style.categories}
          value={filterBy}
          onChange={ev => setFilterBy(ev.target.value)}
        >
          <option value={ALL_CATEGORIES}>{ALL_CATEGORIES}</option>
          {Object.values(CATEGORIES).map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </Select>
        <Select
          className={style.sort}
          value={sortBy}
          onChange={ev => setSortBy(Number(ev.target.value))}
        >
          <option value={SORT_OPTIONS.DATE}>By date</option>
          <option value={SORT_OPTIONS.NAME}>By name</option>
        </Select>
      </div>
    </form>
  );
};

export default ManagerToolbar;
