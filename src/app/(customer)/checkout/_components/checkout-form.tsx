"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  type CheckoutSchemaType,
  checkoutSchema,
} from "@/lib/validations/checkout-form-validation";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CheckoutForm = () => {
  const form = useForm<CheckoutSchemaType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      address: "",
      cardNumber: "",
      city: "",
      cvc: "",
      email: "",
      expirationMonth: "",
      expirationYear: "",
      firstName: "",
      lastName: "",
      zip: "",
    },
  });

  const onSubmit = () => {
    console.log("first");
  };

  return (
    <Form {...form}>
      <div className="@container" id="checkout-form" tabIndex={-1}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-6 gap-x-4 gap-y-6 @lg:gap-6"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="First name"
                    {...field}
                    autoComplete="given-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Last name"
                    {...field}
                    autoComplete="family-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} autoComplete="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Address"
                    {...field}
                    autoComplete="street-address"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Stockholm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>ZIP code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123 45"
                    {...field}
                    autoComplete="postal-code"
                    inputMode="numeric"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem className="col-span-6 @lg:col-span-3">
                <FormLabel>Card number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="1234 5678 1234 5678"
                    {...field}
                    autoComplete="cc-number"
                    inputMode="numeric"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expirationMonth"
            render={({ field }) => (
              <FormItem className="col-span-2 @lg:col-span-1">
                <FormLabel>Exp month</FormLabel>
                <FormControl>
                  <Input
                    placeholder="01"
                    {...field}
                    autoComplete="cc-exp-month"
                    inputMode="numeric"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="expirationYear"
            render={({ field }) => (
              <FormItem className="col-span-2 @lg:col-span-1">
                <FormLabel>Exp year</FormLabel>
                <FormControl>
                  <Input
                    placeholder="23"
                    {...field}
                    autoComplete="cc-exp-year"
                    inputMode="numeric"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvc"
            render={({ field }) => (
              <FormItem className="col-span-2 @lg:col-span-1">
                <FormLabel>CVC code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123"
                    {...field}
                    autoComplete="cc-csc"
                    inputMode="numeric"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-6 flex justify-end gap-4">
            <Button
              type="submit"
              variant="secondary"
              className="order-last px-10 font-semibold"
            >
              Order
            </Button>
            <Button asChild variant="outline">
              <Link href="/shop">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default CheckoutForm;
