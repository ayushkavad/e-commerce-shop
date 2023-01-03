import { useContext } from 'react';
import { ProductsContaxt } from '../../contexts/products.context';
import ProductCard from '../../component/product-card/product-card-component';
import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContaxt);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
