import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--ff-inter" });

export const metadata: Metadata = {
  title: "Sophisticated Next App",
  description: "Crafted with Next.js and TypeScript by al-imam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.variable].join(" ")}>{children}</body>
    </html>
  );
}
