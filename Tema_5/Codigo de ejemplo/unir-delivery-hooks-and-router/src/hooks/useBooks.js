import {useEffect, useState} from "react";

export const useBooks = () => {

    const [books, setBooks] = useState([]);
    /**
     * Se hace uso de useEffect para definir un efecto de montaje que traerá la información de ingredientes
     * del back-end en el primer renderizado.
     */
    useEffect(() => {
        setTimeout(() => {
            setBooks([
                {id: "1", name: "Nueva Italiana", author: "Italiana", rating: 4.5},
                {id: "2", name: "El Parterre", author: "Española", rating: 4.9},
                {id: "3", name: "Rey Sushi", author: "Japonés", rating: 4.2},
                {id: "4", name: "Dale taco", author: "Mexicana", rating: 4.7},
                {id: "5", name: "Cookery", author: "Americana", rating: 4.1},
                {id: "6", name: "Chumy Restaurante, donde Jose", author: "Castiza", rating: 3.6},
            ]);
        }, 2500);
    }, []);

    return books;
}