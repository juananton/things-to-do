import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import IconButton from '../buttons/IconButton';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPages }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages || totalPages === 0;

  return (
    <div className={style.wrapper}>
      <IconButton
        disabled={isFirstPage}
        icon={ArrowLeftIcon}
        onClick={() => setPage(page - 1)}
      />
      <p>
        Página {page} de {totalPages || 1}
      </p>
      <IconButton
        disabled={isLastPage}
        icon={ArrowRightIcon}
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
};

export default PageSelector;
