import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useCart } from "../../hooks/useCart";
import { PrimaryButton } from "../Button/index.styles";
import { CgTrash, CgCloseO } from "react-icons/cg";
import * as S from "./index.styles";

/**
 * A component that displays a list of items in the shopping cart and provides functionality to manipulate items in the cart.
 * @returns {JSX.Element} The JSX element representing the cart list.
 */
function CartList() {
  const { cart, addToCart, clearCart, decreaseFromCart, removeFromCart } =
    useCart();

  // Set the total price for the entire cart
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0)
    );
  }, [cart]);

  // Format the total price to correct currency
  const totalPriceInCart = formatCurrency(total);

  // Set total number of items that are in the cart
  const [totalItems, setTotalItems] = useState();

  useEffect(() => {
    setTotalItems(cart.reduce((acc, curr) => acc + Number(curr.quantity), 0));
  }, [cart]);

  return (
    <>
      {totalItems === 0 ? (
        <>
          <S.EmptyCartMessage>Oh no! Your cart is empty</S.EmptyCartMessage>
          <Link to={"/"}>
            <PrimaryButton>Go to shop</PrimaryButton>
          </Link>
        </>
      ) : (
        <S.CartPageWrapper>
          <S.ListWrapper>
            <S.CartHeader>
              <h3>Your cart - {totalItems} items</h3>
              <S.ClearButton onClick={clearCart}>
                <CgCloseO /> Clear cart
              </S.ClearButton>
            </S.CartHeader>

            {cart.map((item) => {
              const itemPrice = formatCurrency(item.discountedPrice);

              return (
                <S.Item key={item.id}>
                  <S.ProductDetails>
                    {" "}
                    <S.ItemImg src={item.imageUrl} alt="" />
                    <div>
                      <h4>{item.title}</h4>
                      <span>{itemPrice}</span>
                      <S.QytContainer>
                        <button onClick={() => decreaseFromCart(item)}>
                          -
                        </button>
                        <span> {item.quantity}</span>

                        <button onClick={() => addToCart(item)}>+</button>
                      </S.QytContainer>
                    </div>
                  </S.ProductDetails>

                  <S.RemoveButton onClick={() => removeFromCart(item)}>
                    <CgTrash /> Remove
                  </S.RemoveButton>
                </S.Item>
              );
            })}
          </S.ListWrapper>

          <S.OrderSummaryWrapper>
            <h3>Checkout Summary</h3>
            <S.OrderSummary>
              <S.Subtotal>
                <span>Subtotal:</span>
                <span>{totalPriceInCart}</span>
              </S.Subtotal>
              <S.Shipping>
                <span>Shipping:</span>
                <span>Free</span>
              </S.Shipping>
            </S.OrderSummary>

            <S.TotalPrice>
              <span>Total:</span>
              <span>{totalPriceInCart}</span>
            </S.TotalPrice>
            <Link to={"/CheckoutSuccess"}>
              <PrimaryButton onClick={clearCart}>Checkout</PrimaryButton>
            </Link>
          </S.OrderSummaryWrapper>
        </S.CartPageWrapper>
      )}
    </>
  );
}

export default CartList;
