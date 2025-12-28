import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart.js';

const BookCard = ({ book }) => {
    const { addToCart } = useCart();

    return (
        <div className="book">
            <div className="book-left">
                <div className="book-left-data">
                    <h2>{book.title}</h2>
                    <p><strong>Autor:</strong> {book.author}</p>
                    <p><strong>Género:</strong> {book.genre}</p>
                    <p><strong>Precio:</strong> {book.price} €</p>
                    <p><strong>Valoración:</strong> ⭐ {book.rating}</p>
                </div>
                <div className="book-actions">
                    <Link to={`/book/${book.id}`} className="nav-button">
                        Ver detalles
                    </Link>
                    <button
                        className="nav-button"
                        onClick={() => addToCart(book)}
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
            <div className="book-right">
                <img src={book.cover} alt={book.title} />
            </div>
        </div>
    );
};

export default BookCard;
