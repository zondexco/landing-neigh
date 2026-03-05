import { Globe } from "lucide-react";

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M1 1.7C0.6 2.4 0.4 3.4 0.4 4.8V35.1C0.4 36.5 0.6 37.5 1 38.2L20.9 20L1 1.7Z" fill="#00A0FF" />
      <path d="M27.5 26.1L20.9 20L1 38.2C1.8 39.3 3.3 39.4 5.2 38.4L27.5 26.1Z" fill="#FF3A44" />
      <path d="M27.9 13.8L5.2 1.5C3.3 0.5 1.8 0.6 1 1.7L20.9 20L27.9 13.8Z" fill="#FFC107" />
      <path d="M35.6 19.9C35.6 18.6 34.8 17.3 33.2 16.4L27.9 13.8L20.9 20L27.5 26.1L33.2 23.1C34.9 22.3 35.6 21 35.6 19.9Z" fill="#00C853" />
    </svg>
  );
}

export function CtaSection() {
  return (
    <section className="w-full space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground text-center uppercase tracking-widest">
        Acceder a la app
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://play.google.com/store/apps/details?id=dev.paral.neighborhood"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 rounded-lg px-6 text-base font-medium border border-input bg-background text-foreground shadow-sm hover:bg-accent transition-colors"
        >
          <GooglePlayIcon className="h-5 w-5 shrink-0" />
          Descargar en Play Store
        </a>

        <a
          href="https://napp.cris.ac"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 rounded-lg px-6 text-base font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <Globe className="h-5 w-5 shrink-0" />
          Abrir en el navegador
        </a>
      </div>
    </section>
  );
}
