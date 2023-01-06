import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Allstyle,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const { addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);
  const incrementCartItem = () => {
    addItemToCart(cartItem);
  };

  const decrementCartItem = () => {
    removeItemToCart(cartItem);
  };

  const clearCartItem = () => {
    clearItemToCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Allstyle>{name}</Allstyle>

      <Allstyle>
        <div onClick={decrementCartItem}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={incrementCartItem}>&#10095;</div>
      </Allstyle>
      <Allstyle>{price}</Allstyle>
      <RemoveButton onClick={clearCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
