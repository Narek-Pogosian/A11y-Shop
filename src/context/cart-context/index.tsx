import { createContext, useCallback, useReducer } from "react";
import { type CartItem, type CartContextType } from "./cart.types";
import { getCartFromLocalStorage } from "@/lib/local-storage";
import { cartReducer } from "./cart-reducer";

export const CartContext = createContext<CartContextType | null>(null);

const initialCart =
  typeof window !== "undefined" ? getCartFromLocalStorage() ?? [] : [];

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCart);

  const addToCart = useCallback((item: CartItem) => {
    dispatch({ type: "ADD", item });
  }, []);

  const deleteFromCart = useCallback((productId: string) => {
    dispatch({ type: "DELETE", productId });
  }, []);

  const incrementCartItem = useCallback((productId: string) => {
    dispatch({ type: "INCREMENT", productId });
  }, []);

  const decrementCartItem = useCallback((productId: string) => {
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
