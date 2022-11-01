import React from 'react';
import './BurgerView.css';

interface Props {

}

const BurgerView: React.FC<Props> = () =>{
  return(
    <div className="burger-view">
      <div className="Burger">
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
        <div className="BreadBottom"></div>
      </div>
    </div>
  )

}

export default BurgerView;