import React from "react";
import { formatCurrency } from "../../utilities/formatCurrency";
import * as S from "./index.styles";

/**
 * Renders the price of a product, with optional discounted price.
 * @param {object} props - The props object.
 * @param {number} props.price - The original price of the product.
 * @param {number} props.discountedPrice - The discounted price of the product.
 * @returns {JSX.Element} - The JSX markup for the product price.
 */
export function ProductPrice({ price, discountedPrice }) {
  const originalPrice = formatCurrency(price);
  const onSalePrice = formatCurrency(discountedPrice);
  const isDiscounted = discountedPrice < price;

  return (
    <S.PriceContainer>
      {isDiscounted && <S.DiscountedPrice>{onSalePrice}</S.DiscountedPrice>}
      <S.Price isValid={!isDiscounted}>{originalPrice}</S.Price>
    </S.PriceContainer>
  );
}

/**
 * A component that displays the discount amount and percentage of a product.
 * @param {Object} props - The props object of the component.
 * @param {number} props.price - The original price of the product.
 * @param {number} props.discountedPrice - The discounted price of the product.
 * @returns {JSX.Element} A React JSX element that displays the discount amount and percentage of the product.
 */
export function ProductDiscount({ price, discountedPrice }) {
  const discount = Math.round(((price - discountedPrice) / price) * 100);

  return discountedPrice < price ? (
    <S.DiscountAmount isOnSale={true}>{`${discount}% OFF`}</S.DiscountAmount>
  ) : null;
}
