import React, {useState} from 'react';
import IngredientsList from "../../Components/IngredientsList/IngredientsList";
import BurgerView from "../../Components/BurgerView/BurgerView";
import './App.css';



function App() {
   const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: 'item1'},
    {name: 'Salad', count: 0, id: 'item2'},
    {name: 'Cheese', count: 0, id: 'item3'},
    {name: 'Bacon', count: 0, id: 'item4'}
  ])

  const changeCount = (id: string) =>{
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id ? {
        ...ingredient,
        count: ingredient.count + 1,
      }: ingredient;
    }));
  };

  const remove = (id: string) =>{
     setIngredients( prev => prev.map(ingredients => {
       return ingredients.id === id ? {
         ...ingredients,
         count: ingredients.count = 0,
       }: ingredients;
     }));
     console.log('The item was removed');
  };

  return (
    <div className="App">
      <div>
        <IngredientsList
          changeCount={() =>changeCount}
          remove={() =>remove}/>
      </div>
      <BurgerView/>
    </div>
  );
}

export default App;
