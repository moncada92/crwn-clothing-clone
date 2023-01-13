import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';

import './product-card.styles.scss'

const ProductCard = ({product}) => {
  
  const { name, price, imageUrl} = product;
  
  const { addItemToCard } = useContext(CartContext)

  const handlerItemAddToCart = () => {
    addItemToCard(product)
  }

  return (
    <div className="product-card-container">
      <img src={ imageUrl } alt={`${name}`} />
      <div className="footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
      <Button buttonType='inverted' onClick={(handlerItemAddToCart)} >Add to card</Button>
    </div>
  );
};

export default ProductCard;