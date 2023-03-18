import React from "react";
import { CgShoppingBag } from "react-icons/cg";
import * as S from "./index.styles.js";

export const CartIcon = () => {
  return (
    <S.Cart>
      <CgShoppingBag aria-label="Shopping bag icon" />
      <S.CartOverlay></S.CartOverlay>
    </S.Cart>
  );
};
