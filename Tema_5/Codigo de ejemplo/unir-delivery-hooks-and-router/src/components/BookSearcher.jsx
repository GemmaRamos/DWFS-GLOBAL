import React from 'react';
import { useBooks } from '../hooks/useBooks';

// Componente SOLO de entrada de búsqueda
const BookSearcher = () => {
    const { title, changeTitle } = useBooks();

    return (
        <div className="book-searcher">
            <label htmlFor="book-title-input">
                Busca un libro por título:
            </label>

            <input
                id="book-title-input"
                type="text"
                value={title}
                onChange={(e) => changeTitle(e.target.value)}
                placeholder="Ej: Cien años de soledad"
            />
        </div>
    );
};

export default BookSearcher;
