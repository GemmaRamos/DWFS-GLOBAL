import { useContext } from 'react';
import { booksData } from '../data/booksData';
import { BookContext } from "../context/BookContext.jsx";

// Hook para manejar libros
export const useBooks = () => {
  const { title, changeTitle } = useContext(BookContext);

  // Filtra libros según el título
  const books = title.trim() === ''
      ? booksData       // muestra todos si no hay búsqueda
      : booksData.filter(book =>
          book.title.toLowerCase().includes(title.toLowerCase())
      );

  const getBookById = (id) => booksData.find(book => book.id === Number(id));

  const getAllBooks = () => booksData;

  return {
    // Estado
    title,
    // Acciones
    changeTitle,
    // Datos derivados
    books,
    getBookById,
    getAllBooks
  };
};
