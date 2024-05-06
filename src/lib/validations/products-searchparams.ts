import { categoryEnum } from "@/server/db/schema";
import { z } from "zod";

export const producSeachFormSchema = z.object({
  category: z.enum([...categoryEnum.enumValues, ""]).optional(),
  minPrice: z
    .string()
    .regex(/^([0-9]|[1-9][0-9]{1,2}|100)$/, { message: "Hello" })
    .optional(),
  maxPrice: z
    .string()
    .regex(/^([0-9]|[1-9][0-9]{1,2}|100)$/, { message: "Hello" })
    .optional(),
});

export const productsSearchParamsSchema = producSeachFormSchema.extend({
  category: z.enum(categoryEnum.enumValues).optional(),
  orderBy: z
    .union([z.literal("category"), z.literal("price"), z.literal("createdAt")])
    .optional(),
  dir: z.union([z.literal("asc"), z.literal("desc")]).optional(),
  page: z
    .string()
    .regex(/^(?:100|\d{1,2})$/)
    .optional(),
});

export type ProductSearchFormType = z.infer<typeof producSeachFormSchema>;
export type ProductsSearchParams = z.infer<typeof productsSearchParamsSchema>;
