import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import FinanceProvider from "@/context";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finance App",
  description: "Manage your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.className} bg-beige-100 antialiased`}>
        <FinanceProvider>{children}</FinanceProvider>
      </body>
    </html>
  );
}
