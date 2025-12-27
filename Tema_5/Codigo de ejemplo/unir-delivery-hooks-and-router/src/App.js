import React, {useEffect, useState} from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import {BookContext} from "./context/BookContext";
import {Footer} from "./components/Footer";
import {useBooks} from "./hooks/useBooks";

function App() {

    const books = useBooks();

    return (
        <BookContext.Provider value={{books}}>
            <GlobalRouter></GlobalRouter>
            <Footer />
        </BookContext.Provider>
    );
}

export default App;
