// BookDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {BookContext} from '../context/BookContext';

const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }

    console.log(book.name);

    return (
        <div className="book-details">
            <h2 className="book-name">{book.name}</h2>
            <p className="book-author">Cocina: {book.author}</p>
            <p className="bookt-rating">Calificación: {book.rating} / 5</p>
        </div>
    );
}

export default BookDetails;