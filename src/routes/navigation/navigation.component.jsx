import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss'

import {ReactComponent as Crwn} from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContex } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";


const Navigation = () => {

  const { currentUser } = useContext(UserContex)
  const { isCardShow } = useContext(CartContext)

  const handlerSignOut = async () => {
    await signOutUser()

  }

  return(
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwn className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='shop'>SHOP</Link>
          { currentUser ?

              <span className="nav-link" onClick={handlerSignOut}> SIGN OUT </span>
            :
              <Link className="nav-link" to='auth'>SING IN</Link>
          }
          <CardIcon />
        </div>
        {isCardShow && <CartDropDown /> }
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;