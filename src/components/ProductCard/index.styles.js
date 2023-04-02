import styled from "styled-components";

export const ProductWrapper = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.shadows.boxShadow};
  height: fit-content;
  position: relative;
`;

export const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

export const CardBody = styled.div`
  background-color: ${(props) => props.theme.colors.white};
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
  font-size: 19px;
  margin-top: 0.4rem;
`;

export const CardFooter = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
