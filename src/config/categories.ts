import { type categoryEnum } from "@/server/schema";

type CategoryInfo = {
  label: string;
  image: string;
};
type Category = Record<(typeof categoryEnum.enumValues)[number], CategoryInfo>;

export const categories: Category = {
  dessert: {
    label: "Dessert",
    image: "",
  },
  fruit: {
    label: "Fruit",
    image: "",
  },
  berry: {
    label: "Berry",
    image: "",
  },
  drink: {
    label: "Drink",
    image: "",
  },
};

Object.freeze(categories);
