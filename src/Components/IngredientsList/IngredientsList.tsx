import React from 'react';
import './IngredientsList.css';

interface Props {

}

const IngredientsList: React.FC<Props> = () =>{
  return(
    <div className="ingreds">
      <p>Ingredients:</p>
      <p>Meat</p>
      <p>Salad</p>
    </div>
  )

}

export default IngredientsList;