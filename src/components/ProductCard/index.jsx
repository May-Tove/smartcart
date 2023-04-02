import React from "react";
import { Link } from "react-router-dom";
import AverageRating from "../AverageRating";
import { PrimaryButton } from "../Button/index.styles";
import { ProductDiscount, ProductPrice } from "../ProductPrice";
import * as S from "./index.styles";

/**
 * A component that displays a card with information about a product.
 * @param {Object} props - The component props (product).
 * @returns {JSX.Element} A component that displays a card with information about a product.
 */
const ProductCard = ({
  product: { imageUrl, title, price, discountedPrice, reviews, id },
}) => {
  return (
    <S.ProductWrapper>
      <S.ProductImage src={imageUrl} alt={title} />
      <ProductDiscount discountedPrice={discountedPrice} price={price} />
      <S.CardBody>
        <S.CardHeader>
          <S.ProductHeading>{title}</S.ProductHeading>
          <AverageRating reviews={reviews} />
        </S.CardHeader>
        <S.CardFooter>
          <Link to={`/Product/${id}`}>
            <PrimaryButton>View</PrimaryButton>
          </Link>
          <ProductPrice discountedPrice={discountedPrice} price={price} />
        </S.CardFooter>
      </S.CardBody>
    </S.ProductWrapper>
  );
};

export default ProductCard;
