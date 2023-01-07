import { Fragment, useContext } from 'react';

import CategoryPreview from '../../component/category-preview/category-preview.component';
import { CategoriesContaxt } from '../../contexts/categories.context';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContaxt);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
