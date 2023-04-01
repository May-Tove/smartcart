import React from "react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../Button/index.styles";
import * as S from "./index.styles";

/**
 * Renders a success message when a customer's order has been confirmed.
 * @returns {JSX.Element} A JSX.Element containing a message that the order is confirmed, thanking the customer for shopping and a button to go back to the shop.
 */
const CheckoutSuccessMessage = () => {
  return (
    <S.CheckoutWrapper>
      <h1>Your order is confirmed</h1>
      <p>Thank you for shopping at Smartcart! Your order is on its way</p>
      <Link to={"/"}>
        <PrimaryButton>Back to shop</PrimaryButton>
      </Link>
    </S.CheckoutWrapper>
  );
};

export default CheckoutSuccessMessage;
