import styled from "styled-components";

export const CartPageWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

/* CART LIST */
export const ListWrapper = styled.div`
  width: 100%;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.2px solid lightgrey;
  padding-bottom: 1rem;
`;

export const ClearButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  color: red;
  text-transform: uppercase;
`;

export const ItemImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Item = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  grid-gap: 10px;
  border-bottom: 0.2px solid lightgrey;
  padding: 1rem 0 1rem 0;
  width: 100%;
`;

export const ProductDetails = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
`;

export const QytContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  border: 0.2px solid grey;
  padding: 0 0.5rem;
  width: fit-content;
  margin-top: 1rem;

  & button {
    cursor: pointer;
    font-size: 19px;
    border: none;
    background-color: transparent;
  }
`;

export const RemoveButton = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 3px 10px;
  width: fit-content;
  border-radius: 5px;
  background-color: #e1ded6;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.grey};
    transition: all 0.3s ease;
  }
`;

/* CHECKOUT SUMMARY */
export const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  & h3 {
    border-bottom: 0.2px solid lightgrey;
    padding-bottom: 1rem;
  }

  & button {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem 0;
`;

export const Subtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Shipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalPrice = styled.div`
  font-weight: bold;
  border-top: 0.2px solid lightgrey;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

/* EMPTY CART */
export const EmptyCartMessage = styled.p`
  margin: 1rem 0;
`;
