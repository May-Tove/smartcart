import React from "react";
import * as S from "./index.styles";

export function ProductPrice({ price, discountedPrice }) {
  return (
    <S.PriceContainer>
      <S.DiscountedPrice>
        {discountedPrice < price && `kr${discountedPrice}`}
      </S.DiscountedPrice>
      <S.Price isValid={price === discountedPrice}>kr{price}</S.Price>
    </S.PriceContainer>
  );
}

export function ProductDiscount({ price, discountedPrice }) {
  const discount = Math.round(((price - discountedPrice) / price) * 100);

  return (
    <S.DiscountAmount isOnSale={discountedPrice < price}>
      {discountedPrice < price && `${discount}% OFF`}
    </S.DiscountAmount>
  );
}
