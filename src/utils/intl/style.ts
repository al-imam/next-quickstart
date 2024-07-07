import { fontsConfig, FontStyleName } from "@/utils/intl/fonts";

const fontCache = new Map<string, boolean>();

export function getFontConfig(locale: keyof typeof fontsConfig) {
  return fontsConfig[locale] ?? fontsConfig.en;
}

export function getFontStyle(locale: keyof typeof fontsConfig, level: FontStyleName) {
  const config = fontsConfig[locale][level];

  if (typeof window === "undefined" || typeof FontFace === "undefined") {
    return config;
  }

  const cacheKey = `${locale}-${config.font.name}`;

  if (fontCache.has(cacheKey)) {
    return config;
  }

  fontCache.set(cacheKey, true);
  config.variable.forEach(variable => {
    document.documentElement.style.setProperty(variable, `${config.font.name}, sans-serif`);
  });

  return config;
}

export function getFontClassName(locale: keyof typeof fontsConfig, level: FontStyleName) {
  return getFontStyle(locale, level).className;
}

export function getFontFamily(locale: keyof typeof fontsConfig, level: FontStyleName = "base") {
  return getFontStyle(locale, level).font.name;
}

export function getFontInlineStyle(locale: keyof typeof fontsConfig, level: FontStyleName) {
  return getFontStyle(locale, level).style;
}
