import styled from "styled-components";

export const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const CartOverlay = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
