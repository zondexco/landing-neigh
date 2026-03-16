"use client";

import { User, Briefcase, Shield, Lock, Mail } from "lucide-react";
import {
  CardDescription,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CopyButton } from "@/components/copy-button";

const sharedPin = "111 111";

const credentials = [
  {
    role: "Usuario",
    email: "user@nap.com",
    icon: User,
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    role: "Empleado",
    email: "staff@nap.com",
    icon: Briefcase,
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    role: "Administrador",
    email: "admin@nap.com",
    icon: Shield,
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export function CredentialsSection() {
  return (
    <section className="w-full space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground text-center uppercase tracking-widest">
        Credenciales de la demo
      </h2>

      <Card className="border-border/60 bg-linear-to-br from-background via-background to-muted/30">
        <CardHeader className="gap-4 pb-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <CardTitle className="text-base sm:text-lg">Accesos de presentacion</CardTitle>
              <CardDescription>
                Todos los perfiles usan el mismo PIN. Sientete libre de usar el que quieras para probar la app.
              </CardDescription>
            </div>

            <div className="rounded-xl border border-border/50 bg-background/80 px-4 py-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <Lock className="h-3.5 w-3.5 shrink-0" />
                <span>PIN compartido</span>
              </div>
              <div
                className="mt-1 text-lg font-semibold tracking-[0.35em] text-foreground select-none"
                style={{ WebkitUserSelect: "none", userSelect: "none" }}
              >
                {sharedPin}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-3 md:grid-cols-3">
            {credentials.map((cred) => {
              const Icon = cred.icon;
              return (
                <div
                  key={cred.email}
                  className="rounded-xl border border-border/50 bg-background/70 p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted ${cred.iconColor}`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{cred.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Mail className="h-3 w-3 shrink-0" />
                      <span>Correo</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-background px-3 py-2">
                      <code className="min-w-0 text-[13px] font-mono font-medium">
                        {cred.email}
                      </code>
                      <CopyButton value={cred.email} label="Copiar correo" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
