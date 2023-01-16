import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../component/category-preview/category-preview.component';
import Spinner from '../../component/spinner/spinner.component';
import {
  selectCategoriesMap,
  selectCategoriesisLoding,
} from '../../store/categories/categories.selector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoding = useSelector(selectCategoriesisLoding);

  return (
    <Fragment>
      {isLoding ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
