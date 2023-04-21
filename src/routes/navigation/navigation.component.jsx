import { Link, Outlet } from "react-router-dom";
import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './navigation.styles'

import {ReactComponent as Crwn} from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";


const Navigation = () => {

  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser)

  const handlerSignOut = async () => {
    await signOutUser()

  }

  return(
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Crwn className="logo" />
        </LogoContainer>
        <NavLinks>
          <Link className="nav-link" to='shop'>SHOP</Link>
          { currentUser ?

              <NavLink as='span' className="nav-link" onClick={handlerSignOut}> SIGN OUT </NavLink>
            :
              <NavLink to='auth'>SING IN</NavLink>
          }
          <CardIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown /> }
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;