import React, { useState, useEffect } from "react";
import { RatingStars } from "../RatingStars";
import * as S from "./index.styles";

export function AverageRating({ reviews }) {
  const [averageRating, setAverageRating] = useState(0);

  // Calculate average rating whenever reviews change
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      setAverageRating(totalRating / reviews.length);
    }
  }, [reviews]);

  return (
    <>
      <S.RatingContainer>
        <S.Stars>
          {" "}
          <RatingStars rating={averageRating} />
        </S.Stars>
        <span>{averageRating.toFixed(1)}</span>
        <span>({reviews.length} reviews)</span>
      </S.RatingContainer>
    </>
  );
}
