import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BookDetails from "./components/BookDetails.jsx";
import CartPage from './components/CartPage.jsx';
import { BookProvider } from './context/BookContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import CheckoutPage from "./components/CheckoutPage.jsx";


function AppContent() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BookProvider>
      <CartProvider>
        <Router>
          <AppContent />
        </Router>
        </CartProvider>
    </BookProvider>
  );
}

export default App;
