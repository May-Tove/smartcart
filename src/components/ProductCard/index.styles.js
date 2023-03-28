import styled from "styled-components";

export const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.shadows.boxShadow};
  height: fit-content;
  position: relative;
`;

export const CardBody = styled.div`
  background-color: white;
  border-radius: 0 0 10px 10px;
  padding: 1rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

export const ProductHeading = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 0.4rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;
