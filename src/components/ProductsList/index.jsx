import React from "react";
import useApi from "../../hooks/useApi";
import { API_URL } from "../../shared/url";
import FetchError from "../FetchError";
import Loader from "../Loader";
import ProductCard from "../ProductCard";
import * as S from "./index.styles";

function ProductsList() {
  const { products, isLoading, isError } = useApi(API_URL);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <FetchError message="We could not load any products, please refresh the page or contact our support" />
    );
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
