import { createContext, useEffect, useState } from 'react';

import { addCollectionsAndDocument } from '../utils/firebase/firebase.utils.js';

export const ProductsContaxt = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProcucts] = useState([]);

  const value = { products, setProcucts };
  return (
    <ProductsContaxt.Provider value={value}>
      {children}
    </ProductsContaxt.Provider>
  );
};
