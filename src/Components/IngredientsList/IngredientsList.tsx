import React from 'react';
import {Ingredient} from "../../types";
import './IngredientsList.css';
import meatImage from '../../assets/meat.png';
import saladImage from '../../assets/salad.png';
import cheeseImage from '../../assets/cheese.png';
import baconImage from '../../assets/bacon.png';

interface Props extends React.PropsWithChildren {
  changeCount: React.MouseEventHandler;
  remove: React.MouseEventHandler;
}

const IngredientsList: React.FC<Props> = ({changeCount, remove}) =>{
  const ingredients: Ingredient[] = [
    {name: 'Meat', priceForUnit: 80, img: meatImage, count: 0},
    {name: 'Salad', priceForUnit: 10, img: saladImage, count: 0},
    {name: 'Cheese', priceForUnit: 50, img: cheeseImage, count: 0},
    {name: 'Bacon', priceForUnit: 60, img: baconImage, count: 0}
  ]

  return(
    <div className="ingreds">
      <p>Ingredients:</p>
      <div className="item-cont">
        <button onClick={changeCount} className="product-btn"><img src={ingredients[0].img} className="product"/>{ingredients[0].name}</button>
        <span className="item">x{ingredients[0].count}</span>
        <button onClick={remove}>Remove</button>
      </div>
      <div className="item-cont">
        <button onClick={changeCount} className="product-btn"><img src={ingredients[1].img} className="product"/> {ingredients[1].name}</button>
        <span className="item">x{ingredients[1].count}</span>
        <button onClick={remove}>Remove</button>
      </div>
      <div className="item-cont">
        <button onClick={changeCount} className="product-btn"><img src={ingredients[2].img} className="product"/>{ingredients[2].name}</button>
        <span className="item">x{ingredients[2].count}</span>
        <button onClick={remove}>Remove</button>
      </div>
      <div className="item-cont">
        <button onClick={changeCount} className="product-btn"><img src={ingredients[3].img} className="product"/>{ingredients[3].name}</button>
        <span className="item">x{ingredients[3].count}</span>
        <button onClick={remove}>Remove</button>
      </div>
    </div>
  )

}

export default IngredientsList;