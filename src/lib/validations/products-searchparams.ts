import { categoryEnum } from "@/server/db/schema";
import { z } from "zod";

export const productsSearchParamsSchema = z.object({
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

export type ProductsSearchParams = z.infer<typeof productsSearchParamsSchema>;
