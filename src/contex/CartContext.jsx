import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (product) => {
        setCartItem(prev => [...prev, product]);
        console.log(cartItem);

    };

    return (
        <CartContext.Provider value={{ cartItem, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
