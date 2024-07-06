import { LocalePrefix, Pathnames } from "next-intl/routing";

export const defaultLocale = "en";
export const locales = ["en", "bn"] as const;
export const pathnames: Pathnames<typeof locales> = {};

export const localePrefix: LocalePrefix<typeof locales> = "as-needed";