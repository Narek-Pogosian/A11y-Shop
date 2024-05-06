import { type ProductsSearchParams } from "../validations/products-searchparams";

export interface SortOptionValue {
  orderBy: ProductsSearchParams["orderBy"];
  dir: ProductsSearchParams["dir"];
}

interface SortOptionsData {
  value: SortOptionValue | "";
  label: string;
}

export const sortOptions: SortOptionsData[] = [
  { value: { orderBy: "createdAt", dir: "desc" }, label: "Release Descending" }, // Default sorting option
  { value: { orderBy: "createdAt", dir: "asc" }, label: "Release Ascending" },
  { value: { orderBy: "price", dir: "desc" }, label: "Price Descending" },
  { value: { orderBy: "price", dir: "asc" }, label: "Price Ascending" },
  { value: { orderBy: "category", dir: "desc" }, label: "Category Descending" },
  { value: { orderBy: "category", dir: "asc" }, label: "Category Ascending" },
];
