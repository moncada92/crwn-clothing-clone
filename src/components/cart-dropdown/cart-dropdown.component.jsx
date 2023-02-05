import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.componet';

import {CartDropdownContainer, CardItems, EmptyMessage} from './cart-dropdown.styles.jsx';


const CartDropDown = () => {


  const { cartItems, setIsCardShow } = useContext(CartContext);
  const navigate = useNavigate()

  const handlerRedirectCheckout = () => {

    navigate('/checkout');
    setIsCardShow(false)
  }

  return (
    <CartDropdownContainer>
      <CardItems>
        { cartItems.length ? 
          cartItems.map((item) => (
            <CardItem key={item.id} cardItem={item} />
          ))
          : <EmptyMessage>Your Cart is Empty</EmptyMessage>
        }
      </CardItems>
      <Button onClick={handlerRedirectCheckout}> GO TO CHECKOUT </Button>
      
    </CartDropdownContainer>
  );
};

export default CartDropDown;