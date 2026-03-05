"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const icon = !mounted ? (
    <Monitor className="h-4 w-4" />
  ) : isDark ? (
      <Moon className="h-4 w-4" />
    ) : (
      <Sun className="h-4 w-4" />
    );

  const label = !mounted
    ? "Tema"
    : isDark
      ? "Modo oscuro"
      : "Modo claro";

  return (
    <button
      type="button"
      className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-input bg-background/80 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer pointer-events-auto"
      onClick={toggleTheme}
      data-theme-toggle="true"
      aria-label={`Cambiar tema — ${label}`}
      title={label}
    >
      {icon}
    </button>
  );
}
