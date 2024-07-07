import "@/styles/globals.css";

import { Locale, locales } from "@/config/i18n.config";
import { Provider } from "@/contexts";
import { getClassNameByLocal, getFontFamily } from "@/utils/intl/style";
import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { cn } from "shadcn/lib/utils";

export const metadata: Metadata = {
  title: "Sophisticated Next App",
  description: "Crafted with Next.js and TypeScript by al-imam.",
};

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        style={{ fontFamily: getFontFamily(locale) }}
        className={cn(getClassNameByLocal(locale, "subtitle"), "bg-background text-foreground", {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
