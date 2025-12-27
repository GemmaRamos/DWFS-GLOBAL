import React from 'react';
import BookSearcher from './BookSearcher.jsx';
import BookCard from './BookCard.jsx';
import { useBooks } from '../hooks/useBooks.js';

const HomePage = () => {
    const { books } = useBooks();

    return (
        <div className="home-page">
            <BookSearcher />
            <div className="book-container">
                {books.length === 0 ? (
                    <p>No se han encontrado libros.</p>
                ) : (
                    books.map((book) => <BookCard key={book.id} book={book} />)
                )}
            </div>
        </div>
    );
};

export default HomePage;
