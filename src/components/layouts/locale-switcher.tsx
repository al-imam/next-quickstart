import { LocaleSwitcherSelect } from "@/components/layouts/locale-switcher-select";
import { locales } from "@/config/i18n.config";
import { useLocale, useTranslations } from "next-intl";

// example component it showcases how to use intl hooks
export function LocaleSwitcher() {
  const t = useTranslations("locale-switcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map(cur => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
