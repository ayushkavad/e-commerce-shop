import ProductCard from '../product-card/product-card-component';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
  Heading,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <Heading>
        <Title to={title}>{title.toUpperCase()}</Title>
      </Heading>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
