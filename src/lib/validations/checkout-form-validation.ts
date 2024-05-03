import { z } from "zod";

export const checkoutSchema = z.object({
  firstname: z.string().min(1, "Please enter your first name").trim(),
  lastname: z.string().min(1, "Please enter your last name").trim(),
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  address: z.string().min(1, "Please enter your address").trim(),
  city: z.string().min(1, "Please enter your city").trim(),
  zip: z
    .string()
    .regex(/^\d{3}(?:\s?\d{2})$/, { message: "Invalid ZIP code" })
    .trim(),
  cardNumber: z
    .string()
    .regex(/^(\d{4}\s?){4}$/, { message: "Invalid card number" })
    .trim(),
  expirationMonth: z
    .string()
    .regex(/^(0[1-9]|1[0-2])$/, { message: "Invalid" })
    .trim(),
  expirationYear: z
    .string()
    .regex(/^(2[3-9]|3[0-9])$/, { message: "Invalid" })
    .trim(),
  cvc: z
    .string()
    .regex(/^\d{3}$/)
    .trim(),
});
