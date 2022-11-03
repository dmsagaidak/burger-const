import React from 'react';
import './BurgerView.css';

interface Props {
  amount: number;
}

const BurgerView: React.FC<Props> = (props) =>{
  return(
    <div className="burger-view">
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="BreadBottom"></div>
        <p>Price: {props.amount}</p>
      </div>
    </div>
  )

}

export default BurgerView;