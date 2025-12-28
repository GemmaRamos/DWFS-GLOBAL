import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { BookProvider } from './context/BookContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import GlobalRouter from "./routes/GlobalRouter.jsx";

function App() {
  return (
    <BookProvider>
      <CartProvider>
          <GlobalRouter></GlobalRouter>
          <Footer />
        </CartProvider>
    </BookProvider>
  );
}

export default App;
