import { Locale } from "@/config/i18n.config";
import { getFontByLocale } from "@/utils/intl/style";
import { useLocale } from "next-intl";

export function LoadFontForLocal() {
  const lang = useLocale() as Locale;
  const fontConfig = getFontByLocale(lang);

  return (
    <style
      id="dynamic-font-loader"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: fontConfig._fonts
          .map(
            font => `
              @font-face {
                font-family: "${font.name}";
                ${font.weight ? `font-weight: ${font.weight};` : ""}
                src: url("/fonts/${font.path}") format("${font.type}");
              }
            `
          )
          .join("\n"),
      }}
    />
  );
}
