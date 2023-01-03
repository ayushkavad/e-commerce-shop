import Button from '../button/button.component';
import './product-cart.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="card">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">add to cart</Button>
    </div>
  );
};

export default ProductCard;
