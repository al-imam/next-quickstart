import { locales } from "@/config";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as "en")) notFound();

  return {
    messages: (await (locale === "en" ? import("./messages/en.json") : import(`./messages/${locale}.json`))).default,
  };
});
