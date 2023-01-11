import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../component/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContaxt);
  const categoriesMap = useSelector(selectCategoriesMap);

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
