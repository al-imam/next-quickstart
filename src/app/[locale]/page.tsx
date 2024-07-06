import { LocaleSwitcher } from "@/components/layouts/locale-switcher";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("welcome");

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <main className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t("title")}</h1>
        <p className="mb-4 text-lg">{t("description")}</p>
        <LocaleSwitcher />
      </main>
    </div>
  );
}
