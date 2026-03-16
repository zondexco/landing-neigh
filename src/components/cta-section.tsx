import { BookOpen, ChevronDown, Code2, Globe } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground text-center uppercase tracking-widest">
        Acceder a la app
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://napp.cris.ac"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 rounded-lg px-6 text-base font-medium bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          <Globe className="h-5 w-5 shrink-0" />
          Abrir en el navegador
        </a>

        <details className="group relative w-full sm:w-auto">
          <summary className="flex w-full sm:w-auto cursor-pointer list-none items-center justify-center gap-2.5 h-12 rounded-lg border border-input bg-background px-6 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-accent group-open:bg-accent">
            <BookOpen className="h-5 w-5 shrink-0" />
            Documentacion
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
          </summary>

          <div className="mt-2 w-full rounded-lg border border-border bg-background p-2 shadow-lg sm:absolute sm:right-0 sm:mt-3 sm:w-64">
            <a
              href="https://drive.google.com/drive/folders/1gysbJ9BI9DBP6ePyiVr0oy0bg2RcBGCU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <BookOpen className="h-4 w-4 shrink-0" />
              Documentacion actual
            </a>

            <a
              href="https://github.com/orgs/zondexco/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-accent"
            >
              <Code2 className="h-4 w-4 shrink-0" />
              Codigo fuente
            </a>
          </div>
        </details>
      </div>
    </section>
  );
}
