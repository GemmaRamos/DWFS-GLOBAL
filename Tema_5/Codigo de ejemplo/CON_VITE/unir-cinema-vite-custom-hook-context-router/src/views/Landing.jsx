import React from 'react';
import { Link } from 'react-router-dom';
import useRedirection from '../hooks/useRedirection';

function Landing() {
    // Redireccionamos automáticamente a la vista de búsqueda de libros en 5 segundos
    useRedirection('/books', 5000);

    return (
        <div className="landing">
            <Link to="/books" className="landing-title">
                <h1>Relatos de Papel</h1>
            </Link>

            <p>
                Bienvenido a tu biblioteca digital.
            </p>

            <span className="landing-redirect">
        Accediendo a la página principal...
      </span>
        </div>
    );
}

export default Landing;
