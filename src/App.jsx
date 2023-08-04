import RecipesManager from './Manager';
import { CATEGORIES } from './constants/categories';

const DATA = [
  {
    id: 0,
    name: 'Lentejas',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '45',
    category: CATEGORIES.CAT1,
  },
  {
    id: 1,
    name: 'Yogur con frutas',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30',
    category: CATEGORIES.CAT2,
  },
  {
    id: 2,
    name: 'Bacalao con pimientos',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '25',
    category: CATEGORIES.CAT1,
  },
  {
    id: 3,
    name: 'Verduras con bacalao',
    ingredients: 'Listado de ingredientes',
    preparation: 'Instrucciones de preparación',
    time: '30',
    category: CATEGORIES.CAT3,
  },
];

function App() {
  return <RecipesManager rawData={DATA} />;
}

export default App;
