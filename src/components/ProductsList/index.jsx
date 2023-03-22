import React from "react";
import useApi from "../../hooks/useApi";
import { API_URL } from "../../shared/url";
import ProductCard from "../ProductCard";
import * as S from "./index.styles";

function ProductsList() {
  const { products, isLoading, isError } = useApi(API_URL);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <h2>Our Products</h2>
      <S.ListContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.ListContainer>
    </>
  );
}

export default ProductsList;
