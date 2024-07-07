import { locales } from "@/config/i18n.config";

export type FontStyleName = "title" | "base" | "subtitle";

export type FontConfig = {
  className: string;
  style: Partial<CSSStyleDeclaration>;
  variable: string[];
  font: { name: string } | { name: string; path: string; type: string };
};

export const fontsConfig = {
  en: {
    title: {
      className: "font-roboto text-3xl",
      style: {},
      variable: ["--font-title", "--ff-roboto"],
      font: { name: "roboto" },
    },

    base: {
      className: "font-roboto text-base",
      style: {},
      variable: ["--font-base", "--ff-roboto"],
      font: { name: "roboto" },
    },

    subtitle: {
      className: "font-roboto text-xl",
      style: {},
      variable: ["--font-subtitle", "--ff-roboto"],
      font: { name: "roboto" },
    },
  },

  bn: {
    title: {
      className: "font-bold text-3xl font-kalpurush",
      style: {},
      variable: ["--font-title", "--ff-kalpurush"],
      font: { name: "kalpurush", path: "kalpurush.ttf", type: "truetype" },
    },

    base: {
      className: "font-normal text-base font-kalpurush",
      style: {},
      variable: ["--font-base", "--ff-kalpurush"],
      font: { name: "kalpurush", path: "kalpurush.ttf", type: "truetype" },
    },

    subtitle: {
      className: "font-semibold text-xl font-kalpurush",
      variable: ["--font-subtitle", "--ff-kalpurush"],
      style: {},
      font: { name: "kalpurush", path: "kalpurush.ttf", type: "truetype" },
    },
  },
} satisfies Record<(typeof locales)[number], Record<FontStyleName, FontConfig>>;
