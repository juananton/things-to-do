import { useData } from '../lib/hooks/useData';
import { useFilters } from '../lib/hooks/useFilters';
import List from './List';
import style from './Manager.module.css';
import ManagerToolbar from './ManagerToolbar';
import Pagination from './Pagination';
import Button from './buttons/Button';

const Manager = () => {
  const {
    filters,
    setSearch,
    setFilterBy,
    setSortBy,
    setPage,
    setItemsPerPage,
  } = useFilters();

  const { paginatedData, totalPages, error, loading } = useData(filters);

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <h1 className={style.title}>Things to do</h1>{' '}
        <Button kind='primary'>New thing</Button>
      </header>
      <ManagerToolbar
        search={filters.search}
        setSearch={setSearch}
        filterBy={filters.filterBy}
        setFilterBy={setFilterBy}
        sortBy={filters.sortBy}
        setSortBy={setSortBy}
      />
      <List paginatedData={paginatedData} error={error} loading={loading} />
      <Pagination
        page={filters.page}
        itemsPerPage={filters.itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Manager;
