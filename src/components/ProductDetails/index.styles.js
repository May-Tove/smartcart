import styled from "styled-components";

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  width: 100%;
  position: relative;
  gap: 3rem;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 700px;
  object-fit: cover;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
