import RecipesManager from './Manager';

const RECIPES = [
  {
    name: 'Lentejas',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '1h',
    category: 'principal',
  },
  {
    name: 'Yogur con frutas',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30min',
    category: 'dessert',
  },
  {
    name: 'Bacalao con pimientos',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '1h',
    category: 'principal',
  },
  {
    name: 'Carne con verduras',
    ingredientes: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30min',
    category: 'snack',
  },
];

function App() {
  return <RecipesManager recipes={RECIPES} />;
}

export default App;
