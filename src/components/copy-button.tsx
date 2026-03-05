"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  value: string;
  label?: string;
}

export function CopyButton({ value, label = "Copiar" }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const markCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const legacyCopy = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);
    return success;
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        markCopied();
        return;
      }

      const copiedWithLegacy = legacyCopy(value);
      if (copiedWithLegacy) {
        markCopied();
        return;
      }

      window.prompt("Copia manualmente este correo:", value);
    } catch {
      const copiedWithLegacy = legacyCopy(value);
      if (copiedWithLegacy) {
        markCopied();
        return;
      }

      window.prompt("Copia manualmente este correo:", value);
    }
  };

  return (
    <button
      type="button"
      className="relative z-10 shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors active:scale-95 cursor-pointer pointer-events-auto"
      onClick={handleCopy}
      data-copy-value={value}
      data-copy-label={label}
      aria-label={`${label}: ${value}`}
      title={copied ? "¡Copiado!" : label}
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-success" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
