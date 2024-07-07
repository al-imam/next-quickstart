import { locales } from "@/config/i18n.config";

export type FontStyleName = "title" | "base" | "subtitle";

export type FontConfig = {
  className: string;
  style?: Partial<CSSStyleDeclaration>;
  variable: string[];
};

export type Font = { name: string; path: string; type: string; weight?: `${number}` };

export const fontsConfig = {
  en: {
    _fonts: [],

    title: {
      className: "font-roboto text-3xl",
      variable: ["--font-title", "--ff-roboto"],
    },

    base: {
      className: "font-roboto text-base",
      variable: ["--font-base", "--ff-roboto"],
    },

    subtitle: {
      className: "font-roboto text-base",
      variable: ["--font-subtitle", "--ff-roboto"],
    },
  },

  bn: {
    _fonts: [{ path: "kalpurush.ttf", type: "truetype", name: "kalpurush" }],

    title: {
      className: "text-3xl font-kalpurush",
      variable: ["--font-title", "--ff-kalpurush"],
    },

    base: {
      className: "text-base font-kalpurush",
      variable: ["--font-base", "--ff-kalpurush"],
    },

    subtitle: {
      className: "text-base font-kalpurush",
      variable: ["--font-subtitle", "--ff-kalpurush"],
    },
  },
} as Record<(typeof locales)[number], Record<FontStyleName, FontConfig> & { _fonts: Font[] }>;
