import { type categoryEnum } from "@/server/db/schema";

type Category = Record<(typeof categoryEnum.enumValues)[number], string>;

export const categories: Category = {
  dessert: "Dessert",
  fruit: "Fruit",
  vegetable: "Vegetable",
};
