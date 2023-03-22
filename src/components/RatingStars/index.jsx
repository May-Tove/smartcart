import { useState, useEffect } from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

export function RatingStars({ rating }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const roundedRating = Math.round(rating * 2) / 2;
    const newStars = [];

    for (let i = 0; i < Math.floor(roundedRating); i++) {
      newStars.push(<IoMdStar key={i} />);
    }

    if (roundedRating % 1 !== 0) {
      newStars.push(<IoMdStarHalf key={newStars.length} />);
    }

    for (let i = newStars.length; i < 5; i++) {
      newStars.push(<IoMdStarOutline key={i} />);
    }

    setStars(newStars);
  }, [rating]);

  return <div>{stars}</div>;
}
