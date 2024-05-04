"use client";

import { createContext, useCallback, useEffect, useReducer } from "react";
import { type CartItemType, type CartContextType } from "./cart.types";
import {
  getCartFromLocalStorage,
  saveCartInLocalStorage,
} from "@/lib/local-storage";
import { cartReducer } from "./cart-reducer";

export const CartContext = createContext<CartContextType | null>(null);

const initialCart =
  typeof window !== "undefined" ? getCartFromLocalStorage() ?? [] : [];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    saveCartInLocalStorage(cartItems);
  }, [cartItems]);

  const addToCart = useCallback((item: CartItemType) => {
    dispatch({ type: "ADD", item });
  }, []);

  const deleteFromCart = useCallback((productId: number) => {
    dispatch({ type: "DELETE", productId });
  }, []);

  const incrementCartItem = useCallback((productId: number) => {
    dispatch({ type: "INCREMENT", productId });
  }, []);

  const decrementCartItem = useCallback((productId: number) => {
    dispatch({ type: "DECREMENT", productId });
  }, []);

  const resetCart = useCallback(() => {
    dispatch({ type: "RESET" });
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decrementCartItem,
        deleteFromCart,
        incrementCartItem,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
