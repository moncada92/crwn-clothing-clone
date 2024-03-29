import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import './product-card.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCard } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product}) => {
  
  const { name, price, imageUrl} = product;
  
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);

  const handlerItemAddToCart = () => {
    console.log('product', product);
    dispatch(addItemToCard(cartItems, product))
  }

  return (
    <div className="product-card-container">
      <img src={ imageUrl } alt={`${name}`} />
      <div className="footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={(handlerItemAddToCart)} >Add to card</Button>
    </div>
  );
};

export default ProductCard;