import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CardItem from '../card-item/card-item.componet';

import {CartDropdownContainer, CardItems, EmptyMessage} from './cart-dropdown.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


const CartDropDown = () => {

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handlerRedirectCheckout = () => {

    navigate('/checkout');
    dispatch(setIsCartOpen(false))
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