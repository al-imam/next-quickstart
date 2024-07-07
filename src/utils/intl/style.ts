import { Locale } from "@/config/i18n.config";
import { fontsConfig, FontStyleName } from "@/utils/intl/fonts";

export function getFontByLocale(locale: Locale) {
  return fontsConfig[locale] ?? fontsConfig.en;
}

export function getFontStyle(locale: Locale, level: FontStyleName = "base") {
  return fontsConfig[locale][level];
}

export function getClassNameByLocal(locale: Locale, level: FontStyleName) {
  return getFontStyle(locale, level).className;
}

export function getFontFamily(locale: Locale) {
  return getFontByLocale(locale)
    ._fonts.map(font => font.name)
    .join(", ");
}

export function getFontInlineStyle(locale: Locale, level: FontStyleName) {
  const config = getFontStyle(locale, level);
  return config.style ?? {};
}
