import { type Product } from "@/server/db/schema";

export interface CartItemType {
  product: Product;
  productId: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  deleteFromCart: (productId: number) => void;
  incrementCartItem: (productId: number) => void;
  decrementCartItem: (productId: number) => void;
  resetCart: () => void;
}
