import React from 'react';
import IngredientsList from "../../Components/IngredientsList/IngredientsList";
import BurgerView from "../../Components/BurgerView/BurgerView";
import './App.css';



function App() {
  return (
    <div className="App">
      <IngredientsList/>
      <BurgerView/>
    </div>
  );
}

export default App;
