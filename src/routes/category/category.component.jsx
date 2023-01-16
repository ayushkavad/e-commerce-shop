import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../component/product-card/product-card-component';
import {
  selectCategoriesMap,
  selectCategoriesisLoding,
} from '../../store/categories/categories.selector';
import Spinner from '../../component/spinner/spinner.component';

import { CategoryContainer, Heading } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [product, setProduct] = useState(categoriesMap[category]);
  const isLoding = useSelector(selectCategoriesisLoding);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Heading>{category.toUpperCase()}</Heading>
      {isLoding ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {product &&
            product.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
