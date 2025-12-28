import React from 'react';
import { useCart } from '../hooks/useCart.js';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const {
        cart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice
    } = useCart();

    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="home-page">
                <h2>El carrito está vacío</h2>
                <Link to="/" className="nav-button">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="home-page cart-page">
            <button
                onClick={() => navigate(-1)}
                className="nav-button"
            >
                ← Volver
            </button>
            <h1>Carrito de compra</h1>

            {cart.map(({ book, quantity }) => (
                <div key={book.id} className="cart-item">
                    <h3>{book.title}</h3>

                    <p><strong>Precio:</strong> {book.price} €</p>
                    <p>
                        <strong>Subtotal:</strong>{' '}
                        {(book.price * quantity).toFixed(2)} €
                    </p>

                    <div className="cart-actions">
                        <button onClick={() => decreaseQuantity(book.id)}>−</button>
                        <span className="cart-quantity">{quantity}</span>
                        <button onClick={() => increaseQuantity(book.id)}>+</button>
                    </div>
                </div>
            ))}

            <div className="cart-total">
                <h2>Total: {totalPrice.toFixed(2)} €</h2>
            </div>
            <button
                className="nav-button"
                onClick={() => navigate('/checkout')}
            >
                Checkout
            </button>
        </div>
    );
};

export default CartPage;
