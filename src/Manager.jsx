import List from './List';
import style from './Manager.module.css';
import ManagerToolbar from './ManagerToolbar';
import Pagination from './Pagination';
import { useData } from './lib/hooks/useData';
import { useFilters } from './lib/hooks/useFilters';

const Manager = () => {
  const { filters, setSearch, setFilterBy, setPage, setItemsPerPage } =
    useFilters();

  const { paginatedData, totalPages } = useData(filters);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Recetas</h1>
      <ManagerToolbar
        search={filters.search}
        setSearch={setSearch}
        filterBy={filters.filterBy}
        setFilterBy={setFilterBy}
      />
      <List paginatedData={paginatedData} />
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
