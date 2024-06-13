"use client";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  registerSchema,
  type RegisterSchemaType,
} from "@/lib/validations/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { register } from "@/server/actions/register";
import { useAction } from "next-safe-action/hooks";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

function RegisterForm() {
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);

  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { execute, status } = useAction(register, {
    async onSuccess() {
      setIsSigningIn(true);
      const res = await signIn("credentials", {
        email: form.getValues().email,
        password: form.getValues().password,
        redirect: false,
      });
      setIsSigningIn(false);

      if (res?.ok) {
        router.push("/");
        router.refresh();
      }
    },
  });

  function onSubmit(values: RegisterSchemaType) {
    if (isSigningIn) return;
    execute(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-2 gap-4 @container"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="col-span-2 @md:col-span-1">
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
            <FormItem className="col-span-2 @md:col-span-1">
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
            <FormItem className="col-span-2">
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
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2 @md:col-span-1">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="col-span-2 @md:col-span-1">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="col-span-2 mt-2"
          aria-disabled={isSigningIn}
        >
          {status === "executing" || isSigningIn ? (
            <Loader className="animate-spin" />
          ) : (
            "Register"
          )}
        </Button>
        <div className="col-span-2 text-center text-sm font-semibold">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-brand-500 hover:underline">
            Sign in here
          </Link>
        </div>
      </form>
    </Form>
  );
}

export default RegisterForm;
