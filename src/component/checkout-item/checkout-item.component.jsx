import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decrementCartItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
