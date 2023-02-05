
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'


const CardIcon = () => {

  const { isCardShow, setIsCardShow, cartCounter } = useContext(CartContext)

  const handlerShowCart = () => {
    setIsCardShow(!isCardShow)
  }

  return (
    <CartIconContainer onClick={handlerShowCart}>
      <ShoppingIcon  className='shopping-icon'/>
      <ItemCount>{ cartCounter }</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;