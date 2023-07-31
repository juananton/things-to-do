import RecipesList from './recipesList';

const RECIPES = [
  {
    name: 'Lentejas',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '1h',
  },
  {
    name: 'Ensalada de pollo',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30min',
  },
  {
    name: 'Bacalao con pimientos',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '1h',
  },
  {
    name: 'Carne con verduras',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30min',
  },
];

function App() {
  return <RecipesList recipes={RECIPES} />;
}

export default App;
