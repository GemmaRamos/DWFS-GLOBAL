    import React from 'react';
    import {Link} from "react-router-dom";
    import useRedirection from "../hooks/useRedirection";

    function Landing() {

        useRedirection("/books", 5000); // Redireccionamos a la vista de busqueda de libros en 5 segundos

        return (
            <div className="landing">
                    <Link to={"/books"}> {/* Añadimos un enlace a la vista de busqueda de libros */}
                        <h1>Relatos de Papel</h1>
                    </Link>
                    <span className="laser-pointer"></span> {/* Puntero láser original */}
                    <span className="laser-pointer-reverse"></span> {/* Nuevo puntero láser en sentido contrario */}
            </div>
        );
    }

    export default Landing;
