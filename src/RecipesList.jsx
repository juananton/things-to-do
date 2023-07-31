import RecipeListItem from './RecipeListItem';
import style from './RecipesList.module.css';

const RecipesList = ({ recipes }) => {
  const recipesRendered =
    recipes.length > 0 ? (
      recipes.map(recipe => (
        <RecipeListItem key={recipe.name} recipe={recipe} />
      ))
    ) : (
      <p>No hay recetas</p>
    );
  return (
    <div className={style.wrapper}>
      <h1>Recetas</h1>
      {recipesRendered}
    </div>
  );
};

export default RecipesList;
