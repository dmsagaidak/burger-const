import React, {useState} from 'react';
import BurgerView from "../../Components/BurgerView/BurgerView";
import {Ingredient} from '../../types'
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

  const INGREDIENTS: Ingredient[] = [
    {name: 'Meat', price: 80, image: meatImage},
    {name: 'Salad', price: 10, image: saladImage},
    {name: 'Cheese', price: 50, image: cheeseImage},
    {name: 'Bacon', price: 60, image: baconImage}
  ];

  const [count, setCount] = useState(0);

  const changeCount = (id: string) =>{
    setIngredients(prev => prev.map(ingredient => {
      return ingredient.id === id ? {
        ...ingredient,
        count: ingredient.count ++,
      }: ingredient;
    }));
    setCount(count);
  };

  const remove = (id: string) =>{
     setIngredients( prev => prev.map(ingredient => {
       return ingredient.id === id ? {
         ...ingredient,
         count: ingredient.count = 0,
       }: ingredient;
     }));
  };

const getPrice = ingredients.reduce((acc, {count}, index) => acc + count * INGREDIENTS[index].price, 30)

  return (
    <div className="App">
      <div className="container">
        <p>Ingredients:</p>
        <div className="cont">
          <button onClick={() =>changeCount('item1')} className="product-btn"> <img src={INGREDIENTS[0].image} className="product"/> {ingredients[0].name}</button>
          <span className="item">x{ingredients[0].count}</span>
          <button onClick={() =>remove('item1')}>Remove</button>
        </div>
        <div className="cont">
          <button onClick={() =>changeCount('item2')} className="product-btn"><img src={INGREDIENTS[1].image} className="product"/>{ingredients[1].name}</button>
          <span className="item">x{ingredients[1].count}</span>
          <button onClick={() =>remove('item2')}>Remove</button>
        </div>
        <div className="cont">
          <button onClick={() =>changeCount('item3')} className="product-btn"><img src={INGREDIENTS[2].image} className="product"/>{ingredients[2].name}</button>
          <span className="item">x{ingredients[2].count}</span>
          <button onClick={() =>remove('item3')}>Remove</button>
        </div>
        <div className="cont">
          <button onClick={() =>changeCount('item4')} className="product-btn"><img src={INGREDIENTS[3].image} className="product"/>{ingredients[3].name}</button>
          <span className="item">x{ingredients[3].count}</span>
          <button onClick={() =>remove('item4')}>Remove</button>
        </div>
      </div>
      <BurgerView
      amount={getPrice}/>
    </div>
  );
}

export default App;
