"use client";

// example component that switches the locales use it as example to create your own
import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useId, useTransition } from "react";
import { cn } from "shadcn/lib/utils";

export type LocaleSwitcherSelectProps = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export function LocaleSwitcherSelect({ children, defaultValue, label }: LocaleSwitcherSelectProps) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const id = useId();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <label
      htmlFor={id}
      className={cn("relative w-32 text-gray-400", {
        "transition-opacity [&:disabled]:opacity-30": isPending,
      })}
    >
      <p className="sr-only">{label}</p>
      <select
        id={id}
        className="inline-flex rounded bg-transparent pr-1"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
