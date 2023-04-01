import React from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApi from "../../hooks/useApi";
import useCart from "../../hooks/useCart";
import API_URL from "../../shared/url";
import AverageRating from "../AverageRating";
import { PrimaryButton } from "../Button/index.styles";
import { ProductDiscount, ProductPrice } from "../ProductPrice";
import ReviewSection from "../ProductReviews";
import FetchError from "../FetchError";
import Loader from "../Loader";
import * as S from "./index.styles";

/**
 * A component that displays details of a product.
 * @returns {JSX.Element} A component that displays details of a product.
 * */
const ProductDetails = () => {
  let { id } = useParams();
  const { products, isLoading, isError } = useApi(`${API_URL}/${id}`);
  const { addToCart } = useCart();

  const { title, imageUrl, reviews, description } = products;

  // Handles the click event when the user adds the product to the cart.
  const onAddToCartButtonClick = () => {
    addToCart(products);
    toast.success(`${products.title} is added to your cart!`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <FetchError
        message={
          "We could not load this product, please try refreshing the page"
        }
      />
    );
  }

  return (
    <S.DetailsContainer>
      <S.ProductImage src={imageUrl} alt={title} />
      <S.ProductInfoContainer>
        <h1>{title}</h1>
        <AverageRating reviews={reviews || []} />
        <ProductDiscount {...products} />
        <ProductPrice {...products} />
        <p>{description}</p>
        <PrimaryButton onClick={onAddToCartButtonClick}>
          Add to Cart
        </PrimaryButton>
        <ToastContainer />
        <ReviewSection reviews={reviews} />
      </S.ProductInfoContainer>
    </S.DetailsContainer>
  );
};

export default ProductDetails;
