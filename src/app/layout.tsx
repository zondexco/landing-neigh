import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neighborhood — Demo en Vivo",
  description:
    "Accede a la demostración en vivo de Neighborhood. Credenciales y enlaces de acceso para la presentación.",
  metadataBase: new URL("https://lnap.cris.ac"),
  openGraph: {
    title: "Neighborhood — Demo en Vivo",
    description:
      "Accede a la demostración en vivo de Neighborhood. Credenciales y enlaces de acceso.",
    url: "https://lnap.cris.ac",
    siteName: "Neighborhood",
    images: [
      {
        url: "/assets/seo/seo_og.png",
        width: 1200,
        height: 630,
        alt: "Neighborhood Demo",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighborhood — Demo en Vivo",
    description:
      "Accede a la demostración en vivo de Neighborhood. Credenciales y enlaces de acceso.",
    images: ["/assets/seo/seo_twitter_card.png"],
  },
  icons: {
    icon: [
      { url: "/assets/icons/favicon.ico", sizes: "any" },
      { url: "/assets/icons/icon_32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icons/icon_16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/icons/icon_180.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const interactionFallbackScript = `
    (() => {
      const setTheme = (theme) => {
        const root = document.documentElement;
        const isDark = theme === "dark";
        root.classList.toggle("dark", isDark);
        root.style.colorScheme = isDark ? "dark" : "light";
        try {
          localStorage.setItem("theme", theme);
        } catch {}
      };

      const copyText = async (text) => {
        if (!text) return false;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
          }
        } catch {}

        try {
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
        } catch {
          return false;
        }
      };

      document.addEventListener("click", async (event) => {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const themeButton = target.closest("[data-theme-toggle='true']");
        if (themeButton) {
          const isDark = document.documentElement.classList.contains("dark");
          const nextTheme = isDark ? "light" : "dark";
          const nextThemeLabel = nextTheme === "dark" ? "Modo oscuro" : "Modo claro";
          setTheme(nextTheme);
          themeButton.setAttribute("title", nextThemeLabel);
          themeButton.setAttribute("aria-label", "Cambiar tema — " + nextThemeLabel);
          return;
        }

        const copyButton = target.closest("[data-copy-value]");
        if (!copyButton) return;

        const value = copyButton.getAttribute("data-copy-value") || "";
        const copied = await copyText(value);
        if (copied) {
          copyButton.setAttribute("title", "¡Copiado!");
          setTimeout(() => {
            copyButton.setAttribute("title", copyButton.getAttribute("data-copy-label") || "Copiar");
          }, 1600);
          return;
        }

        window.prompt("Copia manualmente este correo:", value);
      });
    })();
  `;

  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: interactionFallbackScript }} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
