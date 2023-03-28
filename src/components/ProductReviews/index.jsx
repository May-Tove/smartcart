import React from "react";
import { RatingStars } from "../RatingStars";
import * as S from "./index.styles";

export function ReviewSection({ reviews }) {
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
}
