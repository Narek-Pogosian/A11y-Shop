import { type ProductsSearchParams } from "../lib/validations/products-searchparams";

export interface SortOptionValue {
  orderBy: ProductsSearchParams["orderBy"];
  dir: ProductsSearchParams["dir"];
}

interface SortOptionsData {
  value: SortOptionValue | "";
  label: string;
}

export const sortOptions: SortOptionsData[] = [
  { value: { orderBy: "createdAt", dir: "desc" }, label: "Release Descending" },
  { value: { orderBy: "createdAt", dir: "asc" }, label: "Release Ascending" },
  { value: { orderBy: "price", dir: "desc" }, label: "Price Descending" },
  { value: { orderBy: "price", dir: "asc" }, label: "Price Ascending" },
  { value: { orderBy: "name", dir: "desc" }, label: "Name Descending" },
  { value: { orderBy: "name", dir: "asc" }, label: "Name Ascending" },
];
