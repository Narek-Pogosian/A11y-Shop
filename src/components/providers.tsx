"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
// import { SessionProvider as NextSessionProvider } from "next-auth/react";
// import { type SessionProviderProps } from "next-auth/react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

// export function SessionProvider({ children, ...props }: SessionProviderProps) {
//   return <NextSessionProvider {...props}>{children}</NextSessionProvider>;
// }
