import { type Product } from "@/server/db/schema";

export interface CartItem {
  product: Product;
  productId: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  deleteFromCart: (productId: number) => void;
  incrementCartItem: (productId: number) => void;
  decrementCartItem: (productId: number) => void;
  resetCart: () => void;
}
