import { categoryEnum } from "@/server/schema";
import { z } from "zod";

export const productSeachFormSchema = z.object({
  category: z.enum([...categoryEnum.enumValues, ""]).optional(),
  minPrice: z
    .string()
    .regex(/^([0-9]|[1-9][0-9]{1,2}|100)$/, {
      message: "Needs to be between 0 to 100",
    })
    .optional(),
  maxPrice: z
    .string()
    .regex(/^([0-9]|[1-9][0-9]{1,2}|100)$/, {
      message: "Needs to be between 0 to 100",
    })
    .optional(),
});

export const productsSearchParamsSchema = productSeachFormSchema.extend({
  category: z.enum(categoryEnum.enumValues).optional(),
  orderBy: z
    .union([z.literal("name"), z.literal("price"), z.literal("createdAt")])
    .optional(),
  dir: z.union([z.literal("asc"), z.literal("desc")]).optional(),
  page: z
    .string()
    .regex(/^(?:100|\d{1,2})$/)
    .optional(),
});

export type ProductSearchFormType = z.infer<typeof productSeachFormSchema>;
export type ProductsSearchParams = z.infer<typeof productsSearchParamsSchema>;
