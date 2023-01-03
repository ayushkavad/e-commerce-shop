import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>go to cart</Button>
    </div>
  );
};

export default CartDropDown;
