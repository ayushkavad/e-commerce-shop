import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItem, productToAdd) => {
  console.log(cartItem);
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItem.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItem]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
    console.log(cartItem, productToAdd);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItem,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
