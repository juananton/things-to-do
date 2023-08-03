import style from './Category.module.css';
import { CATEGORIES } from './constants/categories';

const CATEGORY_STYLES = {
  [CATEGORIES.CAT1]: [CATEGORIES.CAT1, style.principal],
  [CATEGORIES.CAT2]: [CATEGORIES.CAT2, style.dessert],
  [CATEGORIES.CAT3]: [CATEGORIES.CAT3, style.snack],
};

const Category = ({ category }) => {
  const [categoryName, categoryClassName] = CATEGORY_STYLES[category];

  return (
    <span className={`${style.category} ${categoryClassName}`}>
      {categoryName}
    </span>
  );
};

export default Category;
