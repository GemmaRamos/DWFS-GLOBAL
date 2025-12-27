import React, {useContext} from 'react';
import '../styles/styles.css';
import {Book} from "../components/Book";
import {BookContext} from "../context/BookContext";
import {LinearProgress} from "@mui/material";

export const Overview = () => {

    const { books } = useContext(BookContext);

    return (
        <div>
            <h2 className="center-text">Libros encontrados</h2>
            <div className="book-container">

                {
                    /**
                     * Por cada libro conocido
                     * Se crea un Book con la informacion del libro
                     *
                     * Si los datos aun no se han recogido (lista de size 0) del back-end, se muestra un Spinner.
                     */
                    books.length > 0 ? (
                        books.map((book, index) => (
                            <Book
                                key={index}
                                id={book.id}
                                name={book.name}
                                author={book.author}
                                rating={book.rating}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary"/>
                    )
                }

                {}
            </div>
        </div>
    );
}