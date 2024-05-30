import { type InferSelectModel, sql } from "drizzle-orm";
import {
  decimal,
  pgEnum,
  pgTableCreator,
  serial,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `accessible-shop_${name}`);

export const categoryEnum = pgEnum("category", [
  "fruit",
  "berry",
  "dessert",
  "drink",
]);

export const products = createTable(
  "product",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    slug: varchar("slug", { length: 256 }).unique().notNull(),
    description: varchar("description", { length: 1024 }).notNull(),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    category: categoryEnum("category").notNull(),
    image: varchar("image", { length: 256 }),
    altText: varchar("altText", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (product) => ({
    slugIndex: uniqueIndex("slug_idx").on(product.slug),
  }),
);

export type Product = InferSelectModel<typeof products>;
