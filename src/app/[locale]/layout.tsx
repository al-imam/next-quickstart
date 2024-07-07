import "@/styles/globals.css";

import { LoadFontForLocal } from "@/components/utils/font-loader";
import { Locale, locales } from "@/config/i18n.config";
import { getClassNameByLocal, getFontFamily } from "@/utils/intl/style";
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
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale as string);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        style={{ fontFamily: getFontFamily(locale) }}
        className={cn(getClassNameByLocal(locale, "subtitle"), {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <LoadFontForLocal />
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
