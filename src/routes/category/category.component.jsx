import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContaxt } from '../../contexts/categories.context';
import ProductCard from '../../component/product-card/product-card-component';
import './category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContaxt);
  const [product, setProduct] = useState(categoriesMap[category]);

  useEffect(() => {
    setProduct(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {product &&
          product.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
