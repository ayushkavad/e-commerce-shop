import { createContext, useEffect, useState } from 'react';

export const CategoriesContaxt = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContaxt.Provider value={value}>
      {children}
    </CategoriesContaxt.Provider>
  );
};
