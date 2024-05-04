"use client";

import { type CartItemType } from "@/context/cart-context/cart.types";

const CART_KEY = "food-cart";

type StorageKey = typeof CART_KEY;

const getFromLocalStorage = (key: StorageKey) => {
  const data = localStorage.getItem(key);
  return data ? (JSON.parse(data) as unknown) : null;
};

const saveToLocalStorage = (key: StorageKey, data: unknown) => {
  const stringifiedData = JSON.stringify(data);
  localStorage.setItem(key, stringifiedData);
};

export const getCartFromLocalStorage = () => {
  const data = getFromLocalStorage("food-cart") as CartItemType[] | null;
  return data ?? [];
};

export const saveCartInLocalStorage = (cart: CartItemType[]) => {
  saveToLocalStorage("food-cart", cart);
};
