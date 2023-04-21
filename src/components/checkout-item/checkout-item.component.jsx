import React from 'react';

import './checkout-item.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCard, clearItemToCart, removeItemToCard } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({checkoutItem}) => {

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);

  const {id, imageUrl, name, price, quantity } = checkoutItem;

  const clearItemHandler = () => dispatch(clearItemToCart(cartItems, id))
  const addItemHandler = () => dispatch(addItemToCard(cartItems, checkoutItem))
  const removeItemHandler = () => dispatch(removeItemToCard(cartItems, checkoutItem))

  return (
    <div className='checkout-item-container'>
      <div className='image-container'> 
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'> 
        <div className='arrow' onClick={removeItemHandler}> &#10094; </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}> &#10095; </div>
      </span>
      <span className='price'> {price} </span>
      <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
    </div>
  );
};

export default CheckoutItem;