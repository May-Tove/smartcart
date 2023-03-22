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
              <S.RatingContainer>
                <span>
                  {" "}
                  <RatingStars rating={rating} />
                </span>
                <S.Rating>{rating.toFixed(1)}</S.Rating>
              </S.RatingContainer>
              <p>{description}</p>
            </S.ReviewsContainer>
          ))}
        </div>
      )}
      {!hasReviews && <p>This product has no reviews yet</p>}
    </>
  );
}
