import React from "react";
import BackButton from "../../components/BackButton";
import CartList from "../../components/CartList";

export const Checkout = () => {
  return (
    <main className="main-global-styling">
      <BackButton />
      <h1>Checkout</h1>
      <CartList />
    </main>
  );
};
