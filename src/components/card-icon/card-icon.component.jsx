
import React from 'react';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles'
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CardIcon = () => {

  const  IsCartOpen = useSelector(selectIsCartOpen);
  const  cartCount = useSelector(selectCartCount);
  const  dispatch = useDispatch()

  const handlerShowCart = () => {
    dispatch(setIsCartOpen(!IsCartOpen))
  }

  return (
    <CartIconContainer onClick={handlerShowCart}>
      <ShoppingIcon  className='shopping-icon'/>
      <ItemCount>{ cartCount }</ItemCount>
    </CartIconContainer>
  );
};

export default CardIcon;