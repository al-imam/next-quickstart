import { localePrefix, locales, pathnames } from "@/config";
import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const { Link, getPathname, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix,
});
