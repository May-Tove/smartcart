import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { API_URL } from "../../shared/url";
import { AverageRating } from "../AverageRating";
import { PrimaryButton } from "../Button/index.styles";
import { ProductDiscount, ProductPrice } from "../ProductPrice";
import { ReviewSection } from "../ProductReviews";
import * as S from "./index.styles";

function ProductDetails() {
  let { id } = useParams();
  const { products, isLoading, isError } = useApi(`${API_URL}/${id}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(products);

  return (
    <S.DetailsContainer>
      <S.ProductImage src={products.imageUrl} alt={products.title} />
      <S.ProductInfoContainer>
        <h1>{products.title}</h1>

        <ProductDiscount
          price={products.price}
          discountedPrice={products.discountedPrice}
        />
        <ProductPrice
          price={products.price}
          discountedPrice={products.discountedPrice}
        />
        <p>{products.description}</p>
        <PrimaryButton>Add to Cart</PrimaryButton>
        <ReviewSection reviews={products.reviews} />
      </S.ProductInfoContainer>
    </S.DetailsContainer>
  );
}

export default ProductDetails;
/*        <AverageRating reviews={products.reviews} />*/
