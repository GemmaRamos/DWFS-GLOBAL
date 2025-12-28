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
            <Link to="/books" className="nav-button">Volver al inicio</Link>
          </div>
        </div>
    );
  }

  return (
      <div className="home-page">
        <div className="book-details">

          {/* Botón volver y título */}
          <button onClick={() => navigate(-1)} className="nav-button back-button">
            ← Volver
          </button>
          <h1>{book.title}</h1>


          {/* Valoración, precio, stock y foto */}
          <div className="book-main">
            <div className="book-left">
              {/* Primera línea: autor, género, editorial, fecha, páginas */}
              <div className="book-info-line">
                <div><strong>Autor:</strong> {book.author}</div>
                <div><strong>Género:</strong> {book.genre}</div>
                <div><strong>Editorial:</strong> {book.publisher}</div>
                <div><strong>Fecha:</strong> {book.publicationDate}</div>
                <div><strong>Páginas:</strong> {book.pages}</div>
              </div>
              <div className="book-field"><strong>Valoración:</strong> ⭐ {book.rating}</div>
              <div className="book-field"><strong>Precio:</strong> {book.price} €</div>
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

              {/* Botón añadir al carrito */}
              <div className="book-actions">
              <button className="nav-button add-cart" onClick={() => addToCart(book)}>
                Añadir al carrito
              </button>
              </div>
            </div>
            <div className="book-right">
              <img src={book.cover} alt={book.title} />
            </div>
          </div>


        </div>
      </div>
  );
};

export default BookDetails;
