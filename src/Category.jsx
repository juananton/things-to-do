import style from './Category.module.css';

const Category = ({ category }) => {
  const CATEGORIES = {
    principal: ['Principal', style.principal],
    dessert: ['Postre', style.dessert],
    snack: ['Snack', style.snack],
  };

  const [categoryName, categoryClassName] = CATEGORIES[category];

  return (
    <span className={`${style.category} ${categoryClassName}`}>
      {categoryName}
    </span>
  );
};

export default Category;
