import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      {/* links */}
      <ul className='navbar__links'>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fa fa-shopping-cart"></i>
            <span>
            Cart
            <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>

        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* hamburger menu */}
    </div>
  );
};

export default Navbar;
