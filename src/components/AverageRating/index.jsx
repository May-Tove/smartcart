import React, { useState, useEffect } from "react";
import { RatingStars } from "../RatingStars";
import * as S from "./index.styles";

/**
 * Renders the average rating of a list of reviews as stars and a number of reviews
 * @param {Array} props.reviews - The list of reviews to calculate the average rating
 * @returns {JSX.Element} - The JSX for the AverageRating component
 */
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
    <S.RatingContainer>
      <RatingStars rating={averageRating} />
      <span>({reviews.length} reviews)</span>
    </S.RatingContainer>
  );
}
