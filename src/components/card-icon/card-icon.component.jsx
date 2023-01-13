
import React from 'react';
import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart.context';

import './cart-icon.styles.scss'


const CardIcon = () => {

  const { isCardShow, setIsCardShow, cartCounter } = useContext(CartContext)

  const handlerShowCart = () => {
    setIsCardShow(!isCardShow)
  }

  return (
    <div className='cart-icon-container ' onClick={handlerShowCart}>
      <ShoppingIcon  className='shopping-icon'/>
      <span className='item-count'>{ cartCounter }</span>
    </div>
  );
};

export default CardIcon;