import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout-item.styles.scss'

const CheckoutItem = ({checkoutItem}) => {

  const { removeItemToCard, addItemToCard, clearItemToCart} = useContext(CartContext)

  const {id, imageUrl, name, price, quantity } = checkoutItem;

  const clearItemHandler = () => clearItemToCart(id)
  const addItemHandler = () => addItemToCard(checkoutItem)
  const removeItemHandler = () => removeItemToCard(checkoutItem)

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