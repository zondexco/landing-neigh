import { BookOpen, Globe } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground text-center uppercase tracking-widest">
        Acceder a la app
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://drive.google.com/drive/folders/1gysbJ9BI9DBP6ePyiVr0oy0bg2RcBGCU"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 rounded-lg px-6 text-base font-medium border border-input bg-background text-foreground shadow-sm hover:bg-accent transition-colors"
        >
          <BookOpen className="h-5 w-5 shrink-0" />
          Abrir Documentacion
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
