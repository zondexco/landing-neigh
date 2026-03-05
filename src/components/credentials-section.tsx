"use client";

import { User, Briefcase, Shield, Lock, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CopyButton } from "@/components/copy-button";

const credentials = [
  {
    role: "Usuario",
    email: "user@nap.com",
    pin: "123 456",
    icon: User,
    accent: "from-blue-500/10 to-blue-500/5 dark:from-blue-400/10 dark:to-blue-400/5",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    role: "Empleado",
    email: "staff@nap.com",
    pin: "777 777",
    icon: Briefcase,
    accent: "from-amber-500/10 to-amber-500/5 dark:from-amber-400/10 dark:to-amber-400/5",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    role: "Administrador",
    email: "admin@nap.com",
    pin: "888 888",
    icon: Shield,
    accent: "from-emerald-500/10 to-emerald-500/5 dark:from-emerald-400/10 dark:to-emerald-400/5",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export function CredentialsSection() {
  return (
    <section className="w-full space-y-4">
      <h2 className="text-sm font-medium text-muted-foreground text-center uppercase tracking-widest">
        Credenciales de la demo
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {credentials.map((cred) => {
          const Icon = cred.icon;
          return (
            <Card
              key={cred.email}
              className={`relative overflow-hidden bg-gradient-to-br ${cred.accent} border-border/60`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background/80 ${cred.iconColor}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-base">{cred.role}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="space-y-3">
                {/* Email — copiable */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Mail className="h-3 w-3 shrink-0" />
                    <span>Correo</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-background/60 border border-border/40 px-3 py-2">
                    <code className="text-[13px] font-mono font-medium min-w-0">
                      {cred.email}
                    </code>
                    <CopyButton value={cred.email} label="Copiar correo" />
                  </div>
                </div>

                {/* PIN — no copiable */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3 w-3 shrink-0" />
                    <span>PIN</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-background/60 border border-border/40 px-3 py-2">
                    <code
                      className="text-sm font-mono font-medium tracking-widest select-none flex-1 min-w-0"
                      style={{ WebkitUserSelect: "none", userSelect: "none" }}
                    >
                      {cred.pin}
                    </code>
                    <Lock className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
