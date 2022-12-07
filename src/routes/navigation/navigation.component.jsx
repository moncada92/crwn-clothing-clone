import { Link, Outlet } from "react-router-dom";
import './navigation.styles.scss'

import {ReactComponent as Crwn} from "../../assets/crown.svg";


const Navigation = () => {
  return(
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwn className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='shop'>SHOP</Link>
          <Link className="nav-link" to='auth'>SING IN</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;