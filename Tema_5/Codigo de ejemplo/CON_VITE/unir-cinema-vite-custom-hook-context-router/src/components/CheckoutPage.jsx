import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div className="home-page">
                <h2>No hay libros en el carrito</h2>
            </div>
        );
    }

    const handlePayment = () => {
        alert('¡Pedido realizado con éxito!');
        clearCart();
        navigate('/');
    };

    return (
        <div className="home-page checkout-page">
            <h1>Checkout</h1>

            <div className="checkout-summary">
                {cart.map(({ book, quantity }) => (
                    <div key={book.id} className="checkout-item">
                        <h3>{book.title}</h3>
                        <p><strong>Precio:</strong> {book.price} €</p>
                        <p><strong>Cantidad:</strong> {quantity}</p>
                        <p><strong>Subtotal:</strong> {(book.price * quantity).toFixed(2)} €</p>
                    </div>
                ))}
            </div>

            <div className="checkout-total">
                <h2>Total: {totalPrice.toFixed(2)} €</h2>
            </div>

            <button onClick={handlePayment} className="nav-button">
                Realizar pago
            </button>
        </div>
    );
};

export default CheckoutPage;
