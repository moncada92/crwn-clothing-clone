import React from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss'
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {

  const totalPriceCart = useSelector(selectCartTotal);
  const cartItems = useSelector(selectCartItems);



  return (
    <div className='checkout-container'>
      <div className="checkout-header">
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span> Quantity</span>
        </div>
        <div className='header-block'>
          <span> Price</span>
        </div>
        <div className='header-block'>
          <span> Remove</span>
        </div>
      </div>
      { cartItems &&
        cartItems.map((item) => (
            <CheckoutItem key={item.id}  checkoutItem={item} />
        ))
      }
      <span className='total'>Total: {totalPriceCart}</span>
    </div>
  );
};

export default Checkout;