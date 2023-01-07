import { connectFirestoreEmulator } from 'firebase/firestore';
import { createContext, useEffect, useState, useReducer } from 'react';

const addCartItem = (cartItem, productToAdd) => {
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

const removeCartItem = (cartItem, cartItemToRemove) => {
  const existingCartItem = cartItem.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItem.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItem.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItem, cartItemToCleat) => {
  return cartItem.filter((cartItem) => cartItem.id !== cartItemToCleat.id);
};

const CART_ACTION_TYPE = {
  IS_CART_OPEN: 'IS_CART_OPEN',
  CART_ITEM: 'CART_ITEM',
  CART_COUNT: 'CART_COUNT',
  CART_TOTAL: 'CART_TOTAL',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPE.CART_ITEM:
      return {
        ...state,
        cartItem: payload,
      };
    case CART_ACTION_TYPE.CART_COUNT:
      return {
        ...state,
        cartCount: payload,
      };
    case CART_ACTION_TYPE.CART_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItem: [],
  cartCount: 0,
  cartTotal: 0,
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  totalItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItem, setCartItem] = useState([]);
  // console.log(cartItem);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const [{ isCartOpen, cartItem, cartCount, cartTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (isCartOpen) => {
    dispatch({ type: CART_ACTION_TYPE.IS_CART_OPEN, payload: isCartOpen });
  };

  const setCartItem = (cartItem) => {
    dispatch({ type: CART_ACTION_TYPE.CART_ITEM, payload: cartItem });
  };

  const setCartCount = (newCartCount) => {
    dispatch({ type: CART_ACTION_TYPE.CART_COUNT, payload: newCartCount });
  };

  const setCartTotal = (totalCartItem) => {
    dispatch({ type: CART_ACTION_TYPE.CART_TOTAL, payload: totalCartItem });
  };

  useEffect(() => {
    const newCartCount = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItem]);

  useEffect(() => {
    const totalCartItem = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(totalCartItem);
  }, [cartItem]);

  const addItemToCart = (productToAdd) => {
    setCartItem(addCartItem(cartItem, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItem(removeCartItem(cartItem, cartItemToRemove));
  };

  const clearItemToCart = (cartItemToRemove) => {
    setCartItem(clearCartItem(cartItem, cartItemToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemToCart,
    cartTotal,
    cartItem,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
