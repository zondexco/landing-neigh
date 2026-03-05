"use client";

import { CtaSection } from "@/components/cta-section";
import { CredentialsSection } from "@/components/credentials-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ThemeToggle } from "@/components/theme-toggle";

/* ───── Page ───── */
export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-2xl space-y-10">
          <HeroSection />
          <CredentialsSection />
          <CtaSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
