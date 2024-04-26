import { ThemeProvider } from "@/components/providers";
import "@/globals.css";

import { Libre_Franklin } from "next/font/google";

const inter = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "A11y Shop",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
