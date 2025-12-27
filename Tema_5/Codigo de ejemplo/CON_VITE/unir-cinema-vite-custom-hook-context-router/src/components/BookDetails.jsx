import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks.js';
import { useCart } from '../hooks/useCart.js';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById } = useBooks();
  const { addToCart } = useCart();

  const book = getBookById(id);

  if (!book) {
    return (
        <div className="home-page">
          <div className="book-details">
            <h1>Libro no encontrado</h1>
            <Link to="/" className="nav-button">Volver al inicio</Link>
          </div>
        </div>
    );
  }

  return (
      <div className="home-page">
        <div className="book-details">
          <button
              onClick={() => navigate(-1)}
              className="nav-button"
              style={{ marginBottom: '1rem' }}
          >
            ← Volver
          </button>

          <h1>{book.title}</h1>

          {/* Primera línea: autor, género, editorial, fecha */}
          <div className="book-info-line">
            <div><strong>Autor:</strong> {book.author}</div>
            <div><strong>Género:</strong> {book.genre}</div>
            <div><strong>Editorial:</strong> {book.publisher}</div>
            <div><strong>Fecha de Publicación:</strong> {book.publicationDate}</div>
          </div>

          {/* Valoración */}
          <div className="book-field"><strong>Valoración:</strong> ⭐ {book.rating}</div>

          {/* Precio */}
          <div className="book-field"><strong>Precio:</strong> {book.price} €</div>

          {/* Stock */}
          <div className="book-field"><strong>Stock:</strong> {book.stock}</div>

          {/* Resumen */}
          <div className="book-summary">
            <h3>Resumen:</h3>
            <p>{book.summary}</p>
          </div>

          {/* Reseñas */}
          <div className="book-reviews">
            <h3>Reseñas de clientes:</h3>
            <ul>
              {book.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
              ))}
            </ul>
          </div>
          {/* Botón Añadir al carrito */}
          <button
              className="nav-button"
              onClick={() => addToCart(book)}
              style={{ margin: '1rem 0' }}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
  );
};

export default BookDetails;
