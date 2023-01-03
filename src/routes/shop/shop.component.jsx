import { useContext } from 'react';
import { ProductsContaxt } from '../../contexts/products.context';

const Shop = () => {
  const { products } = useContext(ProductsContaxt);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
