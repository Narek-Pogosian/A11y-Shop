import "server-only";
import { db } from "../db";

export async function getProducts() {
  return db.query.products.findMany();
}
