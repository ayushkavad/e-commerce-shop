import { Fragment, useContext } from 'react';
import { CategoriesContaxt } from '../../contexts/categories.context';
import ProductCard from '../../component/product-card/product-card-component';
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContaxt);
  console.log(categoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
