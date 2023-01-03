import { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  const { cartItem } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>go to cart</Button>
    </div>
  );
};

export default CartDropDown;
