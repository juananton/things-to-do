import RecipesManager from './Manager';

const RECIPES = [
  {
    id: 0,
    name: 'Lentejas',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '1h',
    category: 'principal',
  },
  {
    id: 1,
    name: 'Yogur con frutas',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30min',
    category: 'dessert',
  },
  {
    id: 2,
    name: 'Bacalao con pimientos',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '1h',
    category: 'principal',
  },
  {
    id: 3,
    name: 'Carne con verduras',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30min',
    category: 'snack',
  },
];

function App() {
  return <RecipesManager recipes={RECIPES} />;
}

export default App;
