import { getFontStyle } from "@/utils/intl/style";
import { useLocale } from "next-intl";

export function LoadFontForLocal() {
  const lang = useLocale();
  const style = getFontStyle(lang as "bn", "base");

  return (
    "path" in style.font && (
      <style
        id="dynamic-font-loader"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
              @font-face {
                font-family: "${style.font.name}";
                src: url("/fonts/${style.font.path}") format("${style.font.type}");
              }
            `,
        }}
      />
    )
  );
}
