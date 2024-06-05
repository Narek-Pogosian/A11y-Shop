import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(1, "Please enter your last name").trim(),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;
