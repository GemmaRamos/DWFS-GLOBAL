import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

export const useCart = () => {
    const { cart, setCart } = useContext(CartContext);

    // Añadir libro
    const addToCart = (book) => {
        setCart(prev =>
            prev.some(item => item.book.id === book.id)
                ? prev.map(item =>
                    item.book.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
                : [...prev, { book, quantity: 1 }]
        );
    };

    // Incrementar
    const increaseQuantity = (bookId) => {
        setCart(prev =>
            prev.map(item =>
                item.book.id === bookId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrementar
    const decreaseQuantity = (bookId) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.book.id === bookId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    // 🔢 Total de artículos
    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    // 💰 Total del precio
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.book.price * item.quantity,
        0
    );

    return {
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        totalPrice
    };
};
