import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 pt-4 border-t border-border/40">
      {/* Light mode header — hidden in dark */}
      <Image
        src="/assets/headers/header_light.png"
        alt="Paral Dev"
        width={120}
        height={32}
        className="block dark:hidden opacity-50 hover:opacity-70 transition-opacity h-6 w-auto"
      />
      {/* Dark mode header — hidden in light */}
      <Image
        src="/assets/headers/header_dark.png"
        alt="Paral Dev"
        width={120}
        height={32}
        className="hidden dark:block opacity-50 hover:opacity-70 transition-opacity h-6 w-auto"
      />
      <p className="text-xs text-muted-foreground/60">
        Neighborhood &middot; Presentación Demo
      </p>
    </footer>
  );
}
