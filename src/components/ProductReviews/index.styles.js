import styled from "styled-components";

export const ReviewsHeading = styled.h3`
  margin-top: 2rem;
`;

export const ReviewsContainer = styled.div`
  padding: 1rem;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.grey};

  & h4 {
    font-weight: bold;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Rating = styled.span`
  font-weight: bold;
  font-size: 14px;
`;
