import React, {useState} from 'react';
import BurgerView from "../../Components/BurgerView/BurgerView";
import './App.css';
import meatImage from '../../assets/meat.png';
import saladImage from '../../assets/salad.png';
import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/bacon.png';

function App() {
   const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0, id: 'item1'},
    {name: 'Salad', count: 0, id: 'item2'},
    {name: 'Cheese', count: 0, id: 'item3'},
    {name: 'Bacon', count: 0, id: 'item4'},
  ])

  const [count, setCount] = useState(0);

  const changeCount = (id: string) =>{
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id ? {
        ...ingredient,
        count: ingredient.count ++,
      }: ingredient;
    }));
    setCount(count);
    console.log('item1 ' + ingredients[0].count + ' item2 ' + ingredients[1].count +  ' item3 ' + ingredients[2].count + ' item4 ' + ingredients[3].count);
  };


  const remove = (id: string) =>{
     setIngredients( prev => prev.map(ingredient => {
       return ingredient.id === id ? {
         ...ingredient,
         count: ingredient.count = 0,
       }: ingredient;
     }));
  };



  return (
    <div className="App">
      <div className="ingreds">
        <p>Ingredients:</p>
        <div>
          <button onClick={() =>changeCount('item1')} className="product-btn"> <img src={meatImage} className="product"/> {ingredients[0].name}</button>
          <span className="item">x{ingredients[0].count}</span>
          <button onClick={() =>remove('item1')}>Remove</button>
        </div>
        <div>
          <button onClick={() =>changeCount('item2')} className="product-btn"><img src={saladImage} className="product"/>{ingredients[1].name}</button>
          <span className="item">x{ingredients[1].count}</span>
          <button onClick={() =>remove('item2')}>Remove</button>
        </div>
        <div>
          <button onClick={() =>changeCount('item3')} className="product-btn"><img src={cheeseImage} className="product"/>{ingredients[2].name}</button>
          <span className="item">x{ingredients[2].count}</span>
          <button onClick={() =>remove('item3')}>Remove</button>
        </div>
        <div>
          <button onClick={() =>changeCount('item4')} className="product-btn"><img src={baconImage} className="product"/>{ingredients[3].name}</button>
          <span className="item">x{ingredients[3].count}</span>
          <button onClick={() =>remove('item4')}>Remove</button>
        </div>
      </div>
      <BurgerView
      amount={30}/>
    </div>
  );
}

export default App;
