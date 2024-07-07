import "@/styles/globals.css";

import { LoadFontForLocal } from "@/components/utils/font-loader";
import { locales } from "@/config/i18n.config";
import { getFontClassName, getFontFamily } from "@/utils/intl/style";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { cn } from "shadcn/lib/utils";

export const metadata: Metadata = {
  title: "Sophisticated Next App",
  description: "Crafted with Next.js and TypeScript by al-imam.",
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        style={{ fontFamily: getFontFamily(locale as "en") }}
        className={cn(getFontClassName(locale as "en", "base"))}
      >
        <LoadFontForLocal />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
