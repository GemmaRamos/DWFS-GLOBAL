import React from "react";
import { FaBookOpen , FaShoppingCart } from "react-icons/fa";

export const Header = () => {
    return (
        <header className="header">
            <div className="header-left">
                <FaBookOpen  className="header-icon" />
                <h1 className="header-title">Relatos de Papel</h1>
            </div>

            <button className="cart-button" aria-label="Carrito de compra">
                <FaShoppingCart />
                <span className="cart-text">Carrito</span>
            </button>
        </header>
    );
};