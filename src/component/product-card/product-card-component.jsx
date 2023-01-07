import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASS } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-cart.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addProductToCart}
      >
        add to cart
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
