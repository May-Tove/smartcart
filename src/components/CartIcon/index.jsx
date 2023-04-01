import React, { useState, useEffect } from "react";
import useCart from "../../hooks/useCart/index.jsx";
import { CgShoppingBag } from "react-icons/cg";
import * as S from "./index.styles.js";

/**
 * CartIcon component displays the shopping cart icon with the total number of items in the cart
 * @returns {JSX.Element} Returns JSX Element of CartIcon component
 */
const CartIcon = () => {
  const { cart } = useCart();

  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    setTotalItems(cart.reduce((acc, curr) => acc + Number(curr.quantity), 0));
  }, [cart]);
  return (
    <S.Cart>
      <CgShoppingBag aria-label="Shopping bag icon" />
      <S.CartOverlay>{totalItems}</S.CartOverlay>
    </S.Cart>
  );
};

export default CartIcon;
