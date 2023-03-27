import { create } from "zustand";

/**
 * Provides state and functions to manage the shopping cart for the customer.
 * @param {function} set - Function that sets the state of the cart
 * @returns {Object} An object that contains the current cart, functions to add, decrease quantity and remove products from the cart, and to clear the cart.
 */
const useCartStore = create((set) => ({
  cart: [],

  addProductToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cart];
      const index = state.cart.findIndex((product) => product.id === item.id);
      if (index === -1) {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      } else {
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity + 1,
        };
        return { cart: updatedCart };
      }
    }),
  clearCart: () => set({ cart: [] }),
  decreaseQuantityFromCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cart];
      const index = state.cart.findIndex((product) => product.id === item.id);
      if (index !== -1) {
        if (updatedCart[index].quantity > 1) {
          updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity - 1,
          };
        } else {
          updatedCart.splice(index, 1);
        }
        return { cart: updatedCart };
      }
    }),
  removeProductFromCart: (product) =>
    set((state) => ({ cart: state.cart.filter((item) => item !== product) })),
}));

/**
 * A hook that provides access to the cart state and its actions.
 * @returns {Object} An object with cart state and actions to modify it.
 */
export function useCart() {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const decreaseQuantityFromCart = useCartStore(
    (state) => state.decreaseQuantityFromCart
  );
  const removeProductFromCart = useCartStore(
    (state) => state.removeProductFromCart
  );

  function addToCart(item) {
    addProductToCart(item);
  }

  function decreaseFromCart(item) {
    decreaseQuantityFromCart(item);
  }

  function removeFromCart(product) {
    removeProductFromCart(product);
  }

  return {
    cart,
    addToCart,
    clearCart,
    decreaseFromCart,
    removeFromCart,
  };
}
