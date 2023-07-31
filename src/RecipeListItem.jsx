import Category from './Category';
import style from './RecipeListItem.module.css';

const RecipeListItem = ({ recipe }) => {
  return (
    <div className={style.row}>
      <div className={style.data}>
        <span className={style.name}>{recipe.name}</span>
        <span>{recipe.time}</span>
      </div>
      <div className={style.category}>
        <Category category={recipe.category} />
      </div>
      <div className={style.tools}>
        <span>Edit</span>
      </div>
    </div>
  );
};

export default RecipeListItem;
