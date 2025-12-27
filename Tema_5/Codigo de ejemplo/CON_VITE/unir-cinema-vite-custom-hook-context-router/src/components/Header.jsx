import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen , FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {useCart} from "../hooks/useCart.js";

const Header = () => {
    const navigate = useNavigate();
    const { totalItems } = useCart();

  return (
      <header className="header">
        <div className="header-left">
          <FaBookOpen  className="header-icon" />
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><h1 className="header-title">Relatos de Papel</h1></Link>
        </div>

        <button className="cart-button" onClick={() => navigate('/cart')} aria-label="Carrito de compra">
          <FaShoppingCart />
          <span className="cart-text">Carrito</span>
            {totalItems > 0 && (
                <span className="cart-count">{totalItems}</span>
            )}
        </button>
      </header>
  );
};

export default Header;
