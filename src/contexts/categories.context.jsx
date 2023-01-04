import { createContext, useEffect, useState } from 'react';

import {
  getCatagoriesAndDocument,
  addCollectionsAndDocument,
} from '../utils/firebase/firebase.utils.js';

import SHOP_DATA from '../shop-data';

export const CategoriesContaxt = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const catagoryMap = await getCatagoriesAndDocument();
      setCategoriesMap(catagoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContaxt.Provider value={value}>
      {children}
    </CategoriesContaxt.Provider>
  );
};
