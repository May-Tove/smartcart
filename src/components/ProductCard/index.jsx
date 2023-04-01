import React from "react";
import { Link } from "react-router-dom";
import { AverageRating } from "../AverageRating";
import { PrimaryButton } from "../Button/index.styles";
import { ProductDiscount, ProductPrice } from "../ProductPrice";
import * as S from "./index.styles";

function ProductCard({
  product: { imageUrl, title, price, discountedPrice, reviews, id },
}) {
  return (
    <S.ProductWrapper>
      <S.ProductImage src={imageUrl} alt={title} />
      <ProductDiscount discountedPrice={discountedPrice} price={price} />
      <S.CardBody>
        <S.ProductHeading>{title}</S.ProductHeading>
        <AverageRating reviews={reviews} />
        <S.CardFooter>
          <Link to={`/Product/${id}`}>
            {" "}
            <PrimaryButton>View</PrimaryButton>
          </Link>
          <ProductPrice discountedPrice={discountedPrice} price={price} />
        </S.CardFooter>
      </S.CardBody>
    </S.ProductWrapper>
  );
}

export default ProductCard;
