import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.componet';

import './cart-dropdown.styles.scss';


const CartDropDown = () => {


  const { cartItems, setIsCardShow } = useContext(CartContext);
  const navigate = useNavigate()

  const handlerRedirectCheckout = () => {

    navigate('/checkout');
    setIsCardShow(false)
  }

  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
        {
          cartItems.map((item) => (
            <CardItem key={item.id} cardItem={item} />
          ))
        }
      </div>
      <Button onClick={handlerRedirectCheckout}> GO TO CHECKOUT </Button>
      
    </div>
  );
};

export default CartDropDown;