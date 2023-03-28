import styled from "styled-components";

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.span`
  text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};
  color: ${(props) => (props.isValid ? "#454545" : "grey")};
  font-size: ${(props) => (props.isValid ? "16px" : "12px")};
  font-weight: ${(props) => (props.isValid ? "600" : "regular")};
  margin-left: ${(props) => (props.isValid ? "0" : "5px")};
`;

export const DiscountedPrice = styled.span`
  font-weight: 600;
`;

export const DiscountAmount = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e43a36;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  padding: 0.2rem 0.5rem;
  margin: 5px;
`;
