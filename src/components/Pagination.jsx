import style from './Pagination.module.css';
import PageSelector from './form-controls/PageSelector';
import Select from './form-controls/Select';

const Pagination = ({
  page,
  itemsPerPage,
  setPage,
  setItemsPerPage,
  totalPages,
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.itemsPerPage}>
        <Select
          value={itemsPerPage}
          onChange={e => setItemsPerPage(Number(e.target.value))}
        >
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </Select>
        <p>Items per page</p>
      </div>
      <PageSelector page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Pagination;
