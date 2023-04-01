import React from "react";
import RatingStars from "../RatingStars";
import * as S from "./index.styles";

/**
 * A component that displays a list of reviews for a product.
 * @param {Object[]} reviews - An array of review objects.
 */
const ReviewSection = ({ reviews }) => {
  const hasReviews = reviews && reviews.length > 0;

  return (
    <>
      <S.ReviewsHeading>Reviews</S.ReviewsHeading>
      {hasReviews && (
        <div>
          {reviews.map(({ username, rating, description }, index) => (
            <S.ReviewsContainer key={index}>
              <h4>{username}</h4>
              <RatingStars rating={rating} />
              <p>{description}</p>
            </S.ReviewsContainer>
          ))}
        </div>
      )}
      {!hasReviews && <p>This product has no reviews yet</p>}
    </>
  );
};

export default ReviewSection;
