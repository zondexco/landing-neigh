import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center gap-5">
      <div className="relative">
        <div className="absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-lg" />
        <Image
          src="/assets/icons/icon_192.png"
          alt="Neighborhood"
          width={96}
          height={96}
          className="relative rounded-2xl shadow-lg"
          priority
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          ¡Bienvenido a Neighborhood!
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Accede a la demo en vivo con las credenciales de abajo
        </p>
      </div>
    </section>
  );
}
