import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
  const [cartContent, setCartContent] = useState([]);

  const addElementToCart = (item, quantity) => {
    //if there is already the item in the list I simply add the new quantity to the old one

    if (cartContent.find((cartItem) => cartItem.id === item.id)) {
      const currentItem = cartContent.find(
        (cartItem) => cartItem.id === item.id
      );
      setCartContent((currentCart) => [
        ...currentCart.filter((cartItem) => cartItem.id !== item.id),
        {
          ...currentItem,
          quantity: currentItem.quantity + parseInt(quantity),
        },
      ]);
    } else {
      setCartContent((currentCart) => [...currentCart, { ...item, quantity }]);
    }

    alert(`Added ${quantity} elements to the cart!`);
  };

  const removeElementFromCart = (id) => {
    setCartContent((currentCart) => [
      ...currentCart.filter((item) => item.id !== id),
    ]);
  };

  console.log(cartContent);

  return (
    <CartContext.Provider
      value={{ cartContent, addElementToCart, removeElementFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
