import { type CartItemType } from "./cart.types";

export type CartActionType =
  | { type: "ADD"; item: CartItemType }
  | { type: "DELETE"; productId: number }
  | { type: "INCREMENT"; productId: number }
  | { type: "DECREMENT"; productId: number }
  | { type: "RESET" };

export const cartReducer = (
  state: CartItemType[],
  action: CartActionType,
): CartItemType[] => {
  switch (action.type) {
    case "ADD": {
      const index = state.findIndex(
        (product) => product.productId === action.item.productId,
      );

      if (index === -1) {
        return [...state, action.item];
      }

      return state.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            quantity: product.quantity + action.item.quantity,
          };
        } else {
          return product;
        }
      });
    }

    case "DELETE": {
      return [
        ...state.filter((product) => product.productId !== action.productId),
      ];
    }

    case "INCREMENT": {
      return state.map((product) => {
        if (product.productId === action.productId && product.quantity < 99) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
    }

    case "DECREMENT": {
      return state.map((product) => {
        if (product.productId === action.productId && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
    }

    case "RESET": {
      return [];
    }

    default: {
      return state;
    }
  }
};
