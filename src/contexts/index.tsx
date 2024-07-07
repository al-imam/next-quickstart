import { LoadFontForLocal } from "@/components/utils/font-loader";
import { ThemeProvider } from "@/contexts/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export async function Provider({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LoadFontForLocal />
      <ThemeProvider
        themes={["light", "dark"]}
        attribute="class"
        defaultTheme="system"
        enableColorScheme
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
