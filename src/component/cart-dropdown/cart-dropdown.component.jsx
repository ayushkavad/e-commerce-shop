import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import {
  CartDropdownContainer,
  CartItems,
  ButtonComponent,
} from './cart-dropdown.styles';

const CartDropDown = () => {
  const { cartItem } = useContext(CartContext);

  const navigate = useNavigate();

  const toToCheckoutPage = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      <ButtonComponent as={Button} onClick={toToCheckoutPage}>
        go to cart
      </ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
