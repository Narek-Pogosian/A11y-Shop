import "server-only";
import { db } from "../db";
import { products } from "../db/schema";
import { eq } from "drizzle-orm";

export async function getProducts() {
  return db.query.products.findMany();
}

export async function getProductBySlug(slug: string) {
  return db.query.products.findFirst({ where: eq(products.slug, slug) });
}
