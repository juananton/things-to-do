import style from './RecipeListItem.module.css';

const RecipeListItem = ({ recipe }) => {
  return (
    <div className={style.row}>
      <div>
        <span className={style.name}>{recipe.name}</span>
        <span>{recipe.time}</span>
      </div>
      <div className={style.tools}>
        <span>Edit</span>
        <span>Delete</span>
      </div>
    </div>
  );
};

export default RecipeListItem;
