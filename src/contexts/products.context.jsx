import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

export const ProductsContaxt = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProcucts] = useState(PRODUCTS);

  const value = { products, setProcucts };
  return (
    <ProductsContaxt.Provider value={value}>
      {children}
    </ProductsContaxt.Provider>
  );
};
