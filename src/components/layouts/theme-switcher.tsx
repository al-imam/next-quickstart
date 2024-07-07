"use client";

import { useTheme } from "next-themes";

// example component that switches the themes use it as example to create your own
export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <select
      value={theme}
      onChange={e => setTheme(e.target.value)}
      aria-label="Select Theme"
      className="inline-flex rounded bg-transparent pr-2"
    >
      <option value="light">🌞 Light</option>
      <option value="dark">🌙 Dark</option>
    </select>
  );
}
