"use server";

import { registerSchema } from "@/lib/validations/auth-schemas";
import { actionClient } from ".";
import { db } from "../db";
import { users } from "../schema";
import bcrypt from "bcrypt";

export const register = actionClient(registerSchema, async (inputs) => {
  const hashedPassword = bcrypt.hashSync(inputs.password, 10);

  await db.insert(users).values({
    id: crypto.randomUUID(),
    email: inputs.email,
    name: inputs.firstName + " " + inputs.lastName,
    hashedPassword,
  });

  return { success: true };
});
