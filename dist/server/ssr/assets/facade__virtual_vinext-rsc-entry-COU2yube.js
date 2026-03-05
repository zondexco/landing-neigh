import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import React__default, { createElement, forwardRef } from "react";
import { u as usePathname, g as getLayoutSegmentContext } from "../index.js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import "../__vite_rsc_assets_manifest.js";
import "react-dom";
import "react-dom/server.edge";
import "node:async_hooks";
class ErrorBoundary extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    if (error && typeof error === "object" && "digest" in error) {
      const digest = String(error.digest);
      if (digest === "NEXT_NOT_FOUND" || // legacy compat
      digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;") || digest.startsWith("NEXT_REDIRECT;")) {
        throw error;
      }
    }
    return { error };
  }
  reset = () => {
    this.setState({ error: null });
  };
  render() {
    if (this.state.error) {
      const FallbackComponent = this.props.fallback;
      return jsx(FallbackComponent, { error: this.state.error, reset: this.reset });
    }
    return this.props.children;
  }
}
class NotFoundBoundaryInner extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = { notFound: false, previousPathname: props.pathname };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.pathname !== state.previousPathname && state.notFound) {
      return { notFound: false, previousPathname: props.pathname };
    }
    return { notFound: state.notFound, previousPathname: props.pathname };
  }
  static getDerivedStateFromError(error) {
    if (error && typeof error === "object" && "digest" in error) {
      const digest = String(error.digest);
      if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;404")) {
        return { notFound: true };
      }
    }
    throw error;
  }
  render() {
    if (this.state.notFound) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
function NotFoundBoundary({ fallback, children }) {
  const pathname = usePathname();
  return jsx(NotFoundBoundaryInner, { pathname, fallback, children });
}
function LayoutSegmentProvider({ depth, children }) {
  const ctx = getLayoutSegmentContext();
  if (!ctx) {
    return children;
  }
  return createElement(ctx.Provider, { value: depth }, children);
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef(
    ({ className, ...props }, ref) => createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$a = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$a);
const __iconNode$9 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$9);
const __iconNode$8 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$8);
const __iconNode$7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$7);
const __iconNode$6 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$5);
const __iconNode$4 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function GooglePlayIcon({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 36 40",
      fill: "none",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M1 1.7C0.6 2.4 0.4 3.4 0.4 4.8V35.1C0.4 36.5 0.6 37.5 1 38.2L20.9 20L1 1.7Z", fill: "#00A0FF" }),
        /* @__PURE__ */ jsx("path", { d: "M27.5 26.1L20.9 20L1 38.2C1.8 39.3 3.3 39.4 5.2 38.4L27.5 26.1Z", fill: "#FF3A44" }),
        /* @__PURE__ */ jsx("path", { d: "M27.9 13.8L5.2 1.5C3.3 0.5 1.8 0.6 1 1.7L20.9 20L27.9 13.8Z", fill: "#FFC107" }),
        /* @__PURE__ */ jsx("path", { d: "M35.6 19.9C35.6 18.6 34.8 17.3 33.2 16.4L27.9 13.8L20.9 20L27.5 26.1L33.2 23.1C34.9 22.3 35.6 21 35.6 19.9Z", fill: "#00C853" })
      ]
    }
  );
}
function CtaSection() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full space-y-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-muted-foreground text-center uppercase tracking-widest", children: "Acceder a la app" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://play.google.com/store/apps/details?id=dev.paral.neighborhood",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 rounded-lg px-6 text-base font-medium border border-input bg-background text-foreground shadow-sm hover:bg-accent transition-colors",
          children: [
            /* @__PURE__ */ jsx(GooglePlayIcon, { className: "h-5 w-5 shrink-0" }),
            "Descargar en Play Store"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://napp.cris.ac",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 rounded-lg px-6 text-base font-medium border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 shrink-0" }),
            "Abrir en el navegador"
          ]
        }
      )
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border border-border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-5 pb-3", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-5 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-5 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
function CopyButton({ value, label = "Copiar" }) {
  const [copied, setCopied] = React.useState(false);
  const markCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const legacyCopy = (text) => {
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
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "relative z-10 shrink-0 inline-flex items-center justify-center h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors active:scale-95 cursor-pointer pointer-events-auto",
      onClick: handleCopy,
      "data-copy-value": value,
      "data-copy-label": label,
      "aria-label": `${label}: ${value}`,
      title: copied ? "¡Copiado!" : label,
      children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-success" }) : /* @__PURE__ */ jsx(Copy, { className: "h-3.5 w-3.5" })
    }
  );
}
const credentials = [
  {
    role: "Usuario",
    email: "user@nap.com",
    pin: "123 456",
    icon: User,
    accent: "from-blue-500/10 to-blue-500/5 dark:from-blue-400/10 dark:to-blue-400/5",
    iconColor: "text-blue-600 dark:text-blue-400"
  },
  {
    role: "Empleado",
    email: "staff@nap.com",
    pin: "777 777",
    icon: Briefcase,
    accent: "from-amber-500/10 to-amber-500/5 dark:from-amber-400/10 dark:to-amber-400/5",
    iconColor: "text-amber-600 dark:text-amber-400"
  },
  {
    role: "Administrador",
    email: "admin@nap.com",
    pin: "888 888",
    icon: Shield,
    accent: "from-emerald-500/10 to-emerald-500/5 dark:from-emerald-400/10 dark:to-emerald-400/5",
    iconColor: "text-emerald-600 dark:text-emerald-400"
  }
];
function CredentialsSection() {
  return /* @__PURE__ */ jsxs("section", { className: "w-full space-y-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-muted-foreground text-center uppercase tracking-widest", children: "Credenciales de la demo" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: credentials.map((cred) => {
      const Icon2 = cred.icon;
      return /* @__PURE__ */ jsxs(
        Card,
        {
          className: `relative overflow-hidden bg-gradient-to-br ${cred.accent} border-border/60`,
          children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background/80 ${cred.iconColor}`,
                  children: /* @__PURE__ */ jsx(Icon2, { className: "h-4 w-4" })
                }
              ),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: cred.role })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Correo" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-background/60 border border-border/40 px-3 py-2", children: [
                  /* @__PURE__ */ jsx("code", { className: "text-[13px] font-mono font-medium min-w-0", children: cred.email }),
                  /* @__PURE__ */ jsx(CopyButton, { value: cred.email, label: "Copiar correo" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "PIN" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-background/60 border border-border/40 px-3 py-2", children: [
                  /* @__PURE__ */ jsx(
                    "code",
                    {
                      className: "text-sm font-mono font-medium tracking-widest select-none flex-1 min-w-0",
                      style: { WebkitUserSelect: "none", userSelect: "none" },
                      children: cred.pin
                    }
                  ),
                  /* @__PURE__ */ jsx(Lock, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground/40" })
                ] })
              ] })
            ] })
          ]
        },
        cred.email
      );
    }) })
  ] });
}
var nestedKeys = /* @__PURE__ */ new Set(["style"]);
var isNewReact = "use" in React;
var fixedMap = {
  srcset: "srcSet",
  fetchpriority: isNewReact ? "fetchPriority" : "fetchpriority"
};
var camelize = (key) => {
  if (key.startsWith("data-") || key.startsWith("aria-")) {
    return key;
  }
  return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};
function camelizeProps(props) {
  return Object.fromEntries(
    Object.entries(props).map(([k, v]) => [
      camelize(k),
      nestedKeys.has(k) && v && typeof v !== "string" ? camelizeProps(v) : v
    ])
  );
}
var getSizes = (width, layout) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size, image width is the max size,
    // otherwise it's the width of the screen
    case `constrained`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case `fixed`:
      return `${width}px`;
    // Image is always the width of the screen
    case `fullWidth`:
      return `100vw`;
    default:
      return void 0;
  }
};
var pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
var getStyle = ({
  width,
  height,
  aspectRatio,
  layout,
  objectFit = "cover",
  background
}) => {
  const styleEntries = [
    ["object-fit", objectFit]
  ];
  if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:") || background?.startsWith("/")) {
    styleEntries.push(["background-image", `url(${background})`]);
    styleEntries.push(["background-size", "cover"]);
    styleEntries.push(["background-repeat", "no-repeat"]);
  } else {
    styleEntries.push(["background", background]);
  }
  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push([
      "aspect-ratio",
      aspectRatio ? `${aspectRatio}` : void 0
    ]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push([
      "aspect-ratio",
      aspectRatio ? `${aspectRatio}` : void 0
    ]);
    styleEntries.push(["height", pixelate(height)]);
  }
  return Object.fromEntries(
    styleEntries.filter(([, value]) => value)
  );
};
var DEFAULT_RESOLUTIONS = [
  6016,
  // 6K
  5120,
  // 5K
  4480,
  // 4.5K
  3840,
  // 4K
  3200,
  // QHD+
  2560,
  // WQXGA
  2048,
  // QXGA
  1920,
  // 1080p
  1668,
  // Various iPads
  1280,
  // 720p
  1080,
  // iPhone 6-8 Plus
  960,
  // older horizontal phones
  828,
  // iPhone XR/11
  750,
  // iPhone 6-8
  640
  // older and lower-end phones
];
var LOW_RES_WIDTH = 24;
var getBreakpoints = ({
  width,
  layout,
  resolutions = DEFAULT_RESOLUTIONS
}) => {
  if (layout === "fullWidth") {
    return resolutions;
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  if (layout === "fixed") {
    return [width, doubleWidth];
  }
  if (layout === "constrained") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      // Filter out any resolutions that are larger than the double-res image
      ...resolutions.filter((w) => w < doubleWidth)
    ];
  }
  return [];
};
var getSrcSetEntries = ({
  src,
  width,
  layout = "constrained",
  height,
  aspectRatio,
  breakpoints,
  format
}) => {
  breakpoints ||= getBreakpoints({ width, layout });
  return breakpoints.sort((a, b2) => a - b2).map((bp) => {
    let transformedHeight;
    if (height && aspectRatio) {
      transformedHeight = Math.round(bp / aspectRatio);
    }
    return {
      url: src,
      width: bp,
      height: transformedHeight,
      format
    };
  });
};
var getSrcSet = (options) => {
  let { src, transformer, operations } = options;
  if (!transformer) {
    return "";
  }
  return getSrcSetEntries(options).map(({ url: _2, ...transform2 }) => {
    const url = transformer(
      src,
      { ...operations, ...transform2 },
      options.options
    );
    return `${url?.toString()} ${transform2.width}w`;
  }).join(",\n");
};
function transformSharedProps({
  width,
  height,
  priority,
  layout = "constrained",
  aspectRatio,
  ...props
}) {
  width = width && Number(width) || void 0;
  height = height && Number(height) || void 0;
  if (priority) {
    props.loading ||= "eager";
    props.fetchpriority ||= "high";
  } else {
    props.loading ||= "lazy";
    props.decoding ||= "async";
  }
  if (props.alt === "") {
    props.role ||= "presentation";
  }
  if (aspectRatio) {
    if (width) {
      if (height) ;
      else {
        height = Math.round(width / aspectRatio);
      }
    } else if (height) {
      width = Math.round(height * aspectRatio);
    } else ;
  } else if (width && height) {
    aspectRatio = width / height;
  } else ;
  return {
    width,
    height,
    aspectRatio,
    layout,
    ...props
  };
}
function transformBaseImageProps(props) {
  let {
    src,
    transformer,
    background,
    layout,
    objectFit,
    breakpoints,
    width,
    height,
    aspectRatio,
    unstyled,
    operations,
    options,
    ...transformedProps
  } = transformSharedProps(props);
  if (transformer && background === "auto") {
    const lowResHeight = aspectRatio ? Math.round(LOW_RES_WIDTH / aspectRatio) : void 0;
    const lowResImage = transformer(
      src,
      {
        width: LOW_RES_WIDTH,
        height: lowResHeight
      },
      options
    );
    if (lowResImage) {
      background = lowResImage.toString();
    }
  }
  const styleProps = {
    width,
    height,
    aspectRatio,
    layout,
    objectFit,
    background
  };
  transformedProps.sizes ||= getSizes(width, layout);
  if (!unstyled) {
    transformedProps.style = {
      ...getStyle(styleProps),
      ...transformedProps.style
    };
  }
  if (transformer) {
    transformedProps.srcset = getSrcSet({
      src,
      width,
      height,
      aspectRatio,
      layout,
      breakpoints,
      transformer,
      operations,
      options
    });
    const transformed = transformer(
      src,
      { ...operations, width, height },
      options
    );
    if (transformed) {
      src = transformed;
    }
    if (layout === "fullWidth" || layout === "constrained") {
      width = void 0;
      height = void 0;
    }
  }
  return {
    ...transformedProps,
    src: src?.toString(),
    width,
    height
  };
}
function normalizeImageType(type) {
  if (!type) {
    return {};
  }
  if (type.startsWith("image/")) {
    return {
      format: type.slice(6),
      mimeType: type
    };
  }
  return {
    format: type,
    mimeType: `image/${type === "jpg" ? "jpeg" : type}`
  };
}
function transformBaseSourceProps({
  media,
  type,
  ...props
}) {
  let {
    src,
    transformer,
    layout,
    breakpoints,
    width,
    height,
    aspectRatio,
    sizes,
    loading,
    decoding,
    operations,
    options,
    ...rest
  } = transformSharedProps(props);
  if (!transformer) {
    return {};
  }
  const { format, mimeType } = normalizeImageType(type);
  sizes ||= getSizes(width, layout);
  const srcset = getSrcSet({
    src,
    width,
    height,
    aspectRatio,
    layout,
    breakpoints,
    transformer,
    format,
    operations,
    options
  });
  const transformed = transformer(
    src,
    { ...operations, width, height },
    options
  );
  if (transformed) {
    src = transformed;
  }
  const returnObject = {
    ...rest,
    sizes,
    srcset
  };
  if (media) {
    returnObject.media = media;
  }
  if (mimeType) {
    returnObject.type = mimeType;
  }
  return returnObject;
}
const domains = {
  "images.ctfassets.net": "contentful",
  "cdn.builder.io": "builder.io",
  "images.prismic.io": "imgix",
  "www.datocms-assets.com": "imgix",
  "cdn.sanity.io": "imgix",
  "images.unsplash.com": "imgix",
  "cdn.shopify.com": "shopify",
  "s7d1.scene7.com": "scene7",
  "ip.keycdn.com": "keycdn",
  "assets.caisy.io": "bunny",
  "images.contentstack.io": "contentstack",
  "ucarecdn.com": "uploadcare",
  "imagedelivery.net": "cloudflare_images",
  "wsrv.nl": "wsrv"
};
const subdomains = {
  "imgix.net": "imgix",
  "wp.com": "wordpress",
  "files.wordpress.com": "wordpress",
  "b-cdn.net": "bunny",
  "storyblok.com": "storyblok",
  "kc-usercontent.com": "kontent.ai",
  "cloudinary.com": "cloudinary",
  "kxcdn.com": "keycdn",
  "imgeng.in": "imageengine",
  "imagekit.io": "imagekit",
  "cloudimg.io": "cloudimage",
  "ucarecdn.com": "uploadcare",
  "supabase.co": "supabase",
  "graphassets.com": "hygraph"
};
const paths = {
  "/cdn-cgi/image/": "cloudflare",
  "/cdn-cgi/imagedelivery/": "cloudflare_images",
  "/_next/image": "nextjs",
  "/_vercel/image": "vercel",
  "/is/image": "scene7",
  "/_ipx/": "ipx",
  "/_image": "astro",
  "/.netlify/images": "netlify",
  "/storage/v1/object/public/": "supabase",
  "/storage/v1/render/image/public/": "supabase",
  "/v1/storage/buckets/": "appwrite"
};
function roundIfNumeric(value) {
  if (!value) {
    return value;
  }
  const num = Number(value);
  if (isNaN(num)) {
    return value;
  }
  return Math.round(num);
}
const toRelativeUrl = (url) => {
  const { pathname, search } = url;
  return `${pathname}${search}`;
};
const toCanonicalUrlString = (url) => {
  return url.hostname === "n" ? toRelativeUrl(url) : url.toString();
};
const toUrl = (url, base) => {
  return typeof url === "string" ? new URL(url, "http://n/") : url;
};
const escapeChar = (text) => text === " " ? "+" : "%" + text.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
const stripLeadingSlash = (str) => str?.startsWith("/") ? str.slice(1) : str;
const stripTrailingSlash = (str) => str?.endsWith("/") ? str.slice(0, -1) : str;
const addTrailingSlash = (str) => str?.endsWith("/") ? str : `${str}/`;
const createFormatter = (kvSeparator, paramSeparator) => {
  const encodedValueJoiner = escapeChar(kvSeparator);
  const encodedOperationJoiner = escapeChar(paramSeparator);
  function escape(value) {
    return encodeURIComponent(value).replaceAll(kvSeparator, encodedValueJoiner).replaceAll(paramSeparator, encodedOperationJoiner);
  }
  function format(key, value) {
    return `${escape(key)}${kvSeparator}${escape(String(value))}`;
  }
  return (operations) => {
    const ops = Array.isArray(operations) ? operations : Object.entries(operations);
    return ops.flatMap(([key, value]) => {
      if (value === void 0 || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value.map((v) => format(key, v));
      }
      return format(key, value);
    }).join(paramSeparator);
  };
};
const createParser = (kvSeparator, paramSeparator) => {
  if (kvSeparator === "=" && paramSeparator === "&") {
    return queryParser;
  }
  return (url) => {
    const urlString = url.toString();
    return Object.fromEntries(urlString.split(paramSeparator).map((pair) => {
      const [key, value] = pair.split(kvSeparator);
      return [decodeURI(key), decodeURI(value)];
    }));
  };
};
function clampDimensions(operations, maxWidth = 4e3, maxHeight = 4e3) {
  let { width, height } = operations;
  width = Number(width) || void 0;
  height = Number(height) || void 0;
  if (width && width > maxWidth) {
    if (height) {
      height = Math.round(height * maxWidth / width);
    }
    width = maxWidth;
  }
  if (height && height > maxHeight) {
    if (width) {
      width = Math.round(width * maxHeight / height);
    }
    height = maxHeight;
  }
  return { width, height };
}
function extractFromURL(url) {
  const parsedUrl = toUrl(url);
  const operations = Object.fromEntries(parsedUrl.searchParams.entries());
  for (const key in ["width", "height", "quality"]) {
    const value = operations[key];
    if (value) {
      const newVal = Number(value);
      if (!isNaN(newVal)) {
        operations[key] = newVal;
      }
    }
  }
  parsedUrl.search = "";
  return {
    operations,
    src: toCanonicalUrlString(parsedUrl)
  };
}
function normaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
  if (operations.format && operations.format in formatMap) {
    operations.format = formatMap[operations.format];
  }
  if (operations.width) {
    operations.width = roundIfNumeric(operations.width);
  }
  if (operations.height) {
    operations.height = roundIfNumeric(operations.height);
  }
  for (const k in keyMap) {
    if (!Object.prototype.hasOwnProperty.call(keyMap, k)) {
      continue;
    }
    const key = k;
    if (keyMap[key] === false) {
      delete operations[key];
      continue;
    }
    if (keyMap[key] && operations[key]) {
      operations[keyMap[key]] = operations[key];
      delete operations[key];
    }
  }
  for (const k in defaults) {
    if (!Object.prototype.hasOwnProperty.call(defaults, k)) {
      continue;
    }
    const key = k;
    const value = defaults[key];
    if (!operations[key] && value !== void 0) {
      if (keyMap[key] === false) {
        continue;
      }
      const resolvedKey = keyMap[key] ?? key;
      if (resolvedKey in operations) {
        continue;
      }
      operations[resolvedKey] = value;
    }
  }
  return operations;
}
const invertMap = (map) => Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
function denormaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
  const invertedKeyMap = invertMap(keyMap);
  const invertedFormatMap = invertMap(formatMap);
  const ops = normaliseOperations({
    keyMap: invertedKeyMap,
    formatMap: invertedFormatMap,
    defaults
  }, operations);
  if (ops.width) {
    ops.width = roundIfNumeric(ops.width);
  }
  if (ops.height) {
    ops.height = roundIfNumeric(ops.height);
  }
  const q = Number(ops.quality);
  if (!isNaN(q)) {
    ops.quality = q;
  }
  return ops;
}
const queryParser = (url) => {
  const parsedUrl = toUrl(url);
  return Object.fromEntries(parsedUrl.searchParams.entries());
};
function createOperationsGenerator({ kvSeparator = "=", paramSeparator = "&", ...options } = {}) {
  const formatter = createFormatter(kvSeparator, paramSeparator);
  return (operations) => {
    const normalisedOperations = normaliseOperations(options, operations);
    return formatter(normalisedOperations);
  };
}
function createOperationsParser({ kvSeparator = "=", paramSeparator = "&", defaults: _2, ...options } = {}) {
  const parser = createParser(kvSeparator, paramSeparator);
  return (url) => {
    const operations = url ? parser(url) : {};
    return denormaliseOperations(options, operations);
  };
}
function createOperationsHandlers(config) {
  const operationsGenerator2 = createOperationsGenerator(config);
  const operationsParser2 = createOperationsParser(config);
  return { operationsGenerator: operationsGenerator2, operationsParser: operationsParser2 };
}
function paramToBoolean(value) {
  if (value === void 0 || value === null) {
    return void 0;
  }
  try {
    return Boolean(JSON.parse(value?.toString()));
  } catch {
    return Boolean(value);
  }
}
const removeUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
function createExtractAndGenerate(extract2, generate2) {
  return ((src, operations, options) => {
    const base = extract2(src, options);
    if (!base) {
      return generate2(src, operations, options);
    }
    return generate2(base.src, {
      ...base.operations,
      ...removeUndefined(operations)
    }, {
      // deno-lint-ignore no-explicit-any
      ...base.options,
      ...options
    });
  });
}
const cdnDomains = new Map(Object.entries(domains));
const cdnSubdomains = Object.entries(subdomains);
const cdnPaths = Object.entries(paths);
function getProviderForUrl(url) {
  return getProviderForUrlByDomain(url) || getProviderForUrlByPath(url);
}
function getProviderForUrlByDomain(url) {
  if (typeof url === "string" && !url.startsWith("https://")) {
    return false;
  }
  const { hostname } = toUrl(url);
  const cdn = cdnDomains.get(hostname);
  if (cdn) {
    return cdn;
  }
  return cdnSubdomains.find(([subdomain]) => hostname.endsWith(subdomain))?.[1] || false;
}
function getProviderForUrlByPath(url) {
  const { pathname } = toUrl(url);
  return cdnPaths.find(([path]) => pathname.startsWith(path))?.[1] || false;
}
const VIEW_URL_SUFFIX = "/view?";
const PREVIEW_URL_SUFFIX = "/preview?";
const { operationsGenerator: operationsGenerator$o, operationsParser: operationsParser$j } = createOperationsHandlers({
  keyMap: {
    format: "output"
  },
  kvSeparator: "=",
  paramSeparator: "&"
});
const generate$q = (src, modifiers) => {
  const url = toUrl(src.toString().replace(VIEW_URL_SUFFIX, PREVIEW_URL_SUFFIX));
  const projectParam = url.searchParams.get("project") ?? "";
  const operations = operationsGenerator$o(modifiers);
  url.search = operations;
  url.searchParams.append("project", projectParam);
  return toCanonicalUrlString(url);
};
const extract$q = (url) => {
  if (getProviderForUrlByPath(url) !== "appwrite") {
    return null;
  }
  const parsedUrl = toUrl(url);
  const operations = operationsParser$j(parsedUrl);
  delete operations.project;
  const projectParam = parsedUrl.searchParams.get("project") ?? "";
  parsedUrl.search = "";
  parsedUrl.searchParams.append("project", projectParam);
  const sourceUrl = parsedUrl.href;
  return {
    src: sourceUrl,
    operations
  };
};
const transform$r = createExtractAndGenerate(extract$q, generate$q);
const DEFAULT_ENDPOINT = "/_image";
const { operationsParser: operationsParser$i, operationsGenerator: operationsGenerator$n } = createOperationsHandlers({
  keyMap: {
    format: "f",
    width: "w",
    height: "h",
    quality: "q"
  },
  defaults: {
    fit: "cover"
  }
});
const generate$p = (src, modifiers, options) => {
  const url = toUrl(`${stripTrailingSlash(options?.baseUrl ?? "")}${options?.endpoint ?? DEFAULT_ENDPOINT}`);
  const operations = operationsGenerator$n(modifiers);
  url.search = operations;
  url.searchParams.set("href", src.toString());
  return toCanonicalUrlString(url);
};
const extract$p = (url) => {
  const parsedUrl = toUrl(url);
  const src = parsedUrl.searchParams.get("href");
  if (!src) {
    return null;
  }
  parsedUrl.searchParams.delete("href");
  const operations = operationsParser$i(parsedUrl);
  return {
    src,
    operations,
    options: { baseUrl: parsedUrl.origin }
  };
};
const transform$q = (src, operations, options = {}) => {
  const url = toUrl(src);
  if (url.pathname !== (options?.endpoint ?? DEFAULT_ENDPOINT)) {
    return generate$p(src, operations, options);
  }
  const base = extract$p(src);
  if (!base) {
    return generate$p(src, operations, options);
  }
  options.baseUrl ??= base.options.baseUrl;
  return generate$p(base.src, {
    ...base.operations,
    ...operations
  }, options);
};
const operationsGenerator$m = createOperationsGenerator({
  defaults: {
    fit: "cover",
    format: "webp",
    sharp: true
  }
});
const extract$o = extractFromURL;
const generate$o = (src, modifiers) => {
  const operations = operationsGenerator$m(modifiers);
  const url = toUrl(src);
  url.search = operations;
  return toCanonicalUrlString(url);
};
const transform$p = createExtractAndGenerate(extract$o, generate$o);
const operationsGenerator$l = createOperationsGenerator({
  keyMap: {
    format: "output"
  }
});
const extract$n = extractFromURL;
const generate$n = (src, modifiers) => {
  const operations = operationsGenerator$l(modifiers);
  const url = toUrl(src);
  url.search = operations;
  return toCanonicalUrlString(url);
};
const extractAndGenerate$1 = createExtractAndGenerate(extract$n, generate$n);
const transform$o = (src, operations) => {
  const { width, height } = operations;
  if (width && height) {
    operations.aspect_ratio ??= `${Math.round(Number(width))}:${Math.round(Number(height))}`;
  }
  return extractAndGenerate$1(src, operations);
};
const { operationsGenerator: operationsGenerator$k, operationsParser: operationsParser$h } = createOperationsHandlers({
  keyMap: {
    "format": "f"
  },
  defaults: {
    format: "auto",
    fit: "cover"
  },
  formatMap: {
    jpg: "jpeg"
  },
  kvSeparator: "=",
  paramSeparator: ","
});
const generate$m = (src, operations, options) => {
  const modifiers = operationsGenerator$k(operations);
  const url = toUrl(options?.domain ? `https://${options.domain}` : "/");
  url.pathname = `/cdn-cgi/image/${modifiers}/${stripLeadingSlash(src.toString())}`;
  return toCanonicalUrlString(url);
};
const extract$m = (url, options) => {
  if (getProviderForUrlByPath(url) !== "cloudflare") {
    return null;
  }
  const parsedUrl = toUrl(url);
  const [, , , modifiers, ...src] = parsedUrl.pathname.split("/");
  const operations = operationsParser$h(modifiers);
  return {
    src: toCanonicalUrlString(toUrl(src.join("/"))),
    operations,
    options: {
      domain: options?.domain ?? (parsedUrl.hostname === "n" ? void 0 : parsedUrl.hostname)
    }
  };
};
const transform$n = createExtractAndGenerate(extract$m, generate$m);
const cloudflareImagesRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
const imagedeliveryRegex = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
const { operationsGenerator: operationsGenerator$j, operationsParser: operationsParser$g } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h",
    format: "f"
  },
  defaults: {
    fit: "cover"
  },
  kvSeparator: "=",
  paramSeparator: ","
});
function formatUrl(options, transformations) {
  const { host, accountHash, imageId } = options;
  if (!host || !accountHash || !imageId) {
    throw new Error("Missing required Cloudflare Images options");
  }
  const pathSegments = [
    "https:/",
    ...host === "imagedelivery.net" ? [host] : [host, "cdn-cgi", "imagedelivery"],
    accountHash,
    imageId,
    transformations
  ].filter(Boolean);
  return pathSegments.join("/");
}
const generate$l = (_src, operations, options = {}) => {
  const transformations = operationsGenerator$j(operations);
  const url = formatUrl(options, transformations);
  return toCanonicalUrlString(toUrl(url));
};
const extract$l = (url) => {
  const parsedUrl = toUrl(url);
  const matches = [
    ...parsedUrl.toString().matchAll(cloudflareImagesRegex),
    ...parsedUrl.toString().matchAll(imagedeliveryRegex)
  ];
  if (!matches[0]?.groups) {
    return null;
  }
  const { host, accountHash, imageId, transformations } = matches[0].groups;
  const operations = operationsParser$g(transformations || "");
  const options = { host, accountHash, imageId };
  return {
    src: formatUrl(options),
    operations,
    options
  };
};
const transform$m = (src, operations, options = {}) => {
  const extracted = extract$l(src);
  if (!extracted) {
    throw new Error("Invalid Cloudflare Images URL");
  }
  const newOperations = { ...extracted.operations, ...operations };
  return generate$l(extracted.src, newOperations, {
    ...extracted.options,
    ...options
  });
};
const { operationsGenerator: operationsGenerator$i, operationsParser: operationsParser$f } = createOperationsHandlers({
  keyMap: {
    format: "force_format",
    width: "w",
    height: "h",
    quality: "q"
  },
  defaults: {
    org_if_sml: 1
  }
});
const generate$k = (src, modifiers = {}, { token } = {}) => {
  if (!token) {
    throw new Error("Token is required for Cloudimage URLs" + src);
  }
  let srcString = src.toString();
  srcString = srcString.replace(/^https?:\/\//, "");
  if (srcString.includes("?")) {
    modifiers.ci_url_encoded = 1;
    srcString = encodeURIComponent(srcString);
  }
  const operations = operationsGenerator$i(modifiers);
  const url = new URL(`https://${token}.cloudimg.io/`);
  url.pathname = srcString;
  url.search = operations;
  return url.toString();
};
const extract$k = (src, options = {}) => {
  const url = toUrl(src);
  if (getProviderForUrl(url) !== "cloudimage") {
    return null;
  }
  const operations = operationsParser$f(url);
  let originalSrc = url.pathname;
  if (operations.ci_url_encoded) {
    originalSrc = decodeURIComponent(originalSrc);
    delete operations.ci_url_encoded;
  }
  options.token ??= url.hostname.replace(".cloudimg.io", "");
  return {
    src: `${url.protocol}/${originalSrc}`,
    operations,
    options
  };
};
const transform$l = createExtractAndGenerate(extract$k, generate$k);
const publicRegex = /https?:\/\/(?<host>res\.cloudinary\.com)\/(?<cloudName>[a-zA-Z0-9-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
const privateRegex = /https?:\/\/(?<host>(?<cloudName>[a-zA-Z0-9-]+)-res\.cloudinary\.com|[a-zA-Z0-9.-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
const { operationsGenerator: operationsGenerator$h, operationsParser: operationsParser$e } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h",
    format: "f",
    quality: "q"
  },
  defaults: {
    format: "auto",
    c: "lfill"
  },
  kvSeparator: "_",
  paramSeparator: ","
});
function formatCloudinaryUrl({ host, cloudName, assetType, deliveryType, signature, transformations, version, id }) {
  const isPublic = host === "res.cloudinary.com";
  return [
    "https:/",
    host,
    isPublic ? cloudName : void 0,
    assetType,
    deliveryType,
    signature,
    transformations,
    version,
    id
  ].filter(Boolean).join("/");
}
function parseCloudinaryUrl(url) {
  let matches = url.toString().match(publicRegex);
  if (!matches?.length) {
    matches = url.toString().match(privateRegex);
  }
  if (!matches?.length) {
    return null;
  }
  return matches.groups || {};
}
const transform$k = (src, operations) => {
  const group = parseCloudinaryUrl(src.toString());
  if (!group) {
    return src.toString();
  }
  const existing = operationsParser$e(group.transformations || "");
  group.transformations = operationsGenerator$h({
    ...existing,
    ...operations
  });
  return formatCloudinaryUrl(group);
};
const operationsGenerator$g = createOperationsGenerator({
  keyMap: {
    format: "fm",
    width: "w",
    height: "h",
    quality: "q"
  },
  defaults: {
    fit: "fill"
  }
});
const generate$j = (src, modifiers) => {
  const operations = operationsGenerator$g(modifiers);
  const url = new URL(src);
  url.search = operations;
  return toCanonicalUrlString(url);
};
const extract$j = extractFromURL;
const extractAndGenerate = createExtractAndGenerate(extract$j, generate$j);
const transform$j = (src, operations) => {
  const { width, height } = clampDimensions(operations, 4e3, 4e3);
  return extractAndGenerate(src, {
    ...operations,
    width,
    height
  });
};
const operationsGenerator$f = createOperationsGenerator({
  defaults: {
    auto: "webp",
    disable: "upscale"
  }
});
const generate$i = (src, operations, { baseURL = "https://images.contentstack.io/" } = {}) => {
  if (operations.width && operations.height) {
    operations.fit ??= "crop";
  }
  const modifiers = operationsGenerator$f(operations);
  const url = toUrl(src);
  if (url.hostname === "n") {
    url.protocol = "https:";
    url.hostname = new URL(baseURL).hostname;
  }
  url.search = modifiers;
  return toCanonicalUrlString(url);
};
const extract$i = (url) => {
  const { src, operations } = extractFromURL(url) ?? {};
  if (!operations || !src) {
    return null;
  }
  const { origin } = toUrl(url);
  return {
    src,
    operations,
    options: {
      baseURL: origin
    }
  };
};
const transform$i = createExtractAndGenerate(extract$i, generate$i);
const operationsGenerator$e = createOperationsGenerator({
  defaults: {
    withoutEnlargement: true,
    fit: "cover"
  }
});
const generate$h = (src, operations) => {
  if (Array.isArray(operations.transforms)) {
    operations.transforms = JSON.stringify(operations.transforms);
  }
  const modifiers = operationsGenerator$e(operations);
  const url = toUrl(src);
  url.search = modifiers;
  return toCanonicalUrlString(url);
};
const extract$h = (url) => {
  const base = extractFromURL(url);
  if (base?.operations?.transforms && typeof base.operations.transforms === "string") {
    try {
      base.operations.transforms = JSON.parse(base.operations.transforms);
    } catch {
      return null;
    }
  }
  return base;
};
const transform$h = createExtractAndGenerate(extract$h, generate$h);
const hygraphRegex = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-zA-Z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-zA-Z0-9]+)$/;
createOperationsHandlers({
  keyMap: {
    width: "width",
    height: "height",
    format: "format"
  },
  defaults: {
    format: "auto",
    fit: "crop"
  }
});
const extract$g = (url) => {
  const parsedUrl = toUrl(url);
  const matches = parsedUrl.toString().match(hygraphRegex);
  if (!matches?.groups) {
    return null;
  }
  const { region, envId, handle, transformations } = matches.groups;
  const operations = {};
  if (transformations) {
    const parts = transformations.split("/");
    parts.forEach((part) => {
      const [operation, params] = part.split("=");
      if (operation === "resize" && params) {
        params.split(",").forEach((param) => {
          const [key, value] = param.split(":");
          if (key === "width" || key === "height") {
            operations[key] = Number(value);
          } else if (key === "fit") {
            operations.fit = value;
          }
        });
      } else if (operation === "output" && params) {
        params.split(",").forEach((param) => {
          const [key, value] = param.split(":");
          if (key === "format") {
            operations.format = value;
          }
        });
      } else if (operation === "auto_image") {
        operations.format = "auto";
      }
    });
  }
  return {
    src: `https://${region}.graphassets.com/${envId}/${handle}`,
    operations,
    options: {
      region,
      envId,
      handle
    }
  };
};
const generate$g = (src, operations, options = {}) => {
  const extracted = extract$g(src);
  if (!extracted) {
    throw new Error("Invalid Hygraph URL");
  }
  const { region, envId, handle } = {
    ...extracted.options,
    ...options
  };
  const transforms = [];
  if (operations.width || operations.height) {
    const resize = [];
    if (operations.width && operations.height) {
      resize.push("fit:crop");
    } else if (operations.fit) {
      resize.push(`fit:${operations.fit}`);
    }
    if (operations.width)
      resize.push(`width:${operations.width}`);
    if (operations.height)
      resize.push(`height:${operations.height}`);
    if (resize.length)
      transforms.push(`resize=${resize.join(",")}`);
  }
  if (operations.format === "auto" || !operations.format && !extracted.operations.format) {
    transforms.push("auto_image");
  } else if (operations.format) {
    transforms.push(`output=format:${operations.format}`);
  }
  const baseUrl = `https://${region}.graphassets.com/${envId}`;
  const transformPart = transforms.length > 0 ? "/" + transforms.join("/") : "";
  const finalUrl = toUrl(`${baseUrl}${transformPart}/${handle}`);
  return toCanonicalUrlString(finalUrl);
};
const transform$g = createExtractAndGenerate(extract$g, generate$g);
const { operationsGenerator: operationsGenerator$d, operationsParser: operationsParser$d } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h",
    format: "f"
  },
  defaults: {
    m: "cropbox"
  },
  kvSeparator: "_",
  paramSeparator: "/"
});
const generate$f = (src, operations) => {
  const modifiers = operationsGenerator$d(operations);
  const url = toUrl(src);
  url.searchParams.set("imgeng", modifiers);
  return toCanonicalUrlString(url);
};
const extract$f = (url) => {
  const parsedUrl = toUrl(url);
  const imgeng = parsedUrl.searchParams.get("imgeng");
  if (!imgeng) {
    return null;
  }
  const operations = operationsParser$d(imgeng);
  parsedUrl.searchParams.delete("imgeng");
  return {
    src: toCanonicalUrlString(parsedUrl),
    operations
  };
};
const transform$f = createExtractAndGenerate(extract$f, generate$f);
const { operationsGenerator: operationsGenerator$c, operationsParser: operationsParser$c } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h",
    format: "f",
    quality: "q"
  },
  defaults: {
    c: "maintain_ratio",
    fo: "auto"
  },
  kvSeparator: "-",
  paramSeparator: ","
});
const generate$e = (src, operations) => {
  const modifiers = operationsGenerator$c(operations);
  const url = toUrl(src);
  url.searchParams.set("tr", modifiers);
  return toCanonicalUrlString(url);
};
const extract$e = (url) => {
  const parsedUrl = toUrl(url);
  let trPart = null;
  let path = parsedUrl.pathname;
  if (parsedUrl.searchParams.has("tr")) {
    trPart = parsedUrl.searchParams.get("tr");
    parsedUrl.searchParams.delete("tr");
  } else {
    const pathParts = parsedUrl.pathname.split("/");
    const trIndex = pathParts.findIndex((part) => part.startsWith("tr:"));
    if (trIndex !== -1) {
      trPart = pathParts[trIndex].slice(3);
      path = pathParts.slice(0, trIndex).concat(pathParts.slice(trIndex + 1)).join("/");
    }
  }
  if (!trPart) {
    return null;
  }
  parsedUrl.pathname = path;
  const operations = operationsParser$c(trPart);
  return {
    src: toCanonicalUrlString(parsedUrl),
    operations
  };
};
const transform$e = createExtractAndGenerate(extract$e, generate$e);
const { operationsGenerator: operationsGenerator$b, operationsParser: operationsParser$b } = createOperationsHandlers({
  keyMap: {
    format: "fm",
    width: "w",
    height: "h",
    quality: "q"
  },
  defaults: {
    fit: "min",
    auto: "format"
  }
});
const extract$d = (url) => {
  const src = toUrl(url);
  const operations = operationsParser$b(url);
  src.search = "";
  return { src: toCanonicalUrlString(src), operations };
};
const generate$d = (src, operations) => {
  const modifiers = operationsGenerator$b(operations);
  const url = toUrl(src);
  url.search = modifiers;
  if (url.searchParams.has("fm") && url.searchParams.get("auto") === "format") {
    url.searchParams.delete("auto");
  }
  return toCanonicalUrlString(url);
};
const transform$d = createExtractAndGenerate(extract$d, generate$d);
const { operationsGenerator: operationsGenerator$a, operationsParser: operationsParser$a } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h",
    quality: "q",
    format: "f"
  },
  defaults: {
    f: "auto"
  },
  kvSeparator: "_",
  paramSeparator: ","
});
const generate$c = (src, operations, options) => {
  if (operations.width && operations.height) {
    operations.s = `${operations.width}x${operations.height}`;
    delete operations.width;
    delete operations.height;
  }
  const modifiers = operationsGenerator$a(operations);
  const baseURL = options?.baseURL ?? "/_ipx";
  const url = toUrl(baseURL);
  url.pathname = `${stripTrailingSlash(url.pathname)}/${modifiers}/${stripLeadingSlash(src.toString())}`;
  return toCanonicalUrlString(url);
};
const extract$c = (url) => {
  const parsedUrl = toUrl(url);
  const [, baseUrlPart, modifiers, ...srcParts] = parsedUrl.pathname.split("/");
  if (!modifiers || !srcParts.length) {
    return null;
  }
  const operations = operationsParser$a(modifiers);
  if (operations.s) {
    const [width, height] = operations.s.split("x").map(Number);
    operations.width = width;
    operations.height = height;
    delete operations.s;
  }
  return {
    src: "/" + srcParts.join("/"),
    operations,
    options: {
      baseURL: `${parsedUrl.origin}/${baseUrlPart}`
    }
  };
};
const transform$c = (src, operations, options) => {
  const url = toUrl(src);
  const baseURL = options?.baseURL;
  if (baseURL && url.toString().startsWith(baseURL) || url.pathname.startsWith("/_ipx")) {
    const extracted = extract$c(src);
    if (extracted) {
      return generate$c(extracted.src, { ...extracted.operations, ...operations }, { baseURL: extracted.options.baseURL });
    }
  }
  return generate$c(src, operations, { baseURL });
};
const BOOLEAN_PARAMS = [
  "enlarge",
  "flip",
  "flop",
  "negate",
  "normalize",
  "grayscale",
  "removealpha",
  "olrepeat",
  "progressive",
  "adaptive",
  "lossless",
  "nearlossless",
  "metadata"
];
const { operationsGenerator: operationsGenerator$9, operationsParser: operationsParser$9 } = createOperationsHandlers({
  defaults: {
    fit: "cover"
  },
  formatMap: {
    jpg: "jpeg"
  }
});
const generate$b = (src, operations) => {
  const url = toUrl(src);
  for (const key of BOOLEAN_PARAMS) {
    if (operations[key] !== void 0) {
      operations[key] = operations[key] ? 1 : 0;
    }
  }
  url.search = operationsGenerator$9(operations);
  return toCanonicalUrlString(url);
};
const extract$b = (url) => {
  const parsedUrl = toUrl(url);
  const operations = operationsParser$9(parsedUrl);
  for (const key of BOOLEAN_PARAMS) {
    if (operations[key] !== void 0) {
      operations[key] = paramToBoolean(operations[key]);
    }
  }
  parsedUrl.search = "";
  return {
    src: toCanonicalUrlString(parsedUrl),
    operations
  };
};
const transform$b = createExtractAndGenerate(extract$b, generate$b);
const { operationsGenerator: operationsGenerator$8, operationsParser: operationsParser$8 } = createOperationsHandlers({
  formatMap: {
    jpg: "jpeg"
  },
  keyMap: {
    format: "fm",
    width: "w",
    height: "h",
    quality: "q"
  }
});
const generate$a = (src, operations) => {
  const url = toUrl(src);
  if (operations.lossless !== void 0) {
    operations.lossless = operations.lossless ? 1 : 0;
  }
  if (operations.width && operations.height) {
    operations.fit = "crop";
  }
  url.search = operationsGenerator$8(operations);
  return toCanonicalUrlString(url);
};
const extract$a = (url) => {
  const parsedUrl = toUrl(url);
  const operations = operationsParser$8(parsedUrl);
  if (operations.lossless !== void 0) {
    operations.lossless = paramToBoolean(operations.lossless);
  }
  parsedUrl.search = "";
  return {
    src: toCanonicalUrlString(parsedUrl),
    operations
  };
};
const transform$a = createExtractAndGenerate(extract$a, generate$a);
const { operationsGenerator: operationsGenerator$7, operationsParser: operationsParser$7 } = createOperationsHandlers({
  defaults: {
    fit: "cover"
  },
  keyMap: {
    format: "fm",
    width: "w",
    height: "h",
    quality: "q"
  }
});
const generate$9 = (src, operations, options = {}) => {
  const url = toUrl(`${options.baseUrl || ""}/.netlify/images`);
  url.search = operationsGenerator$7(operations);
  url.searchParams.set("url", src.toString());
  return toCanonicalUrlString(url);
};
const extract$9 = (url) => {
  if (getProviderForUrlByPath(url) !== "netlify") {
    return null;
  }
  const parsedUrl = toUrl(url);
  const operations = operationsParser$7(parsedUrl);
  delete operations.url;
  const sourceUrl = parsedUrl.searchParams.get("url") || "";
  parsedUrl.search = "";
  return {
    src: sourceUrl,
    operations,
    options: {
      baseUrl: parsedUrl.hostname === "n" ? void 0 : parsedUrl.origin
    }
  };
};
const transform$9 = createExtractAndGenerate(extract$9, generate$9);
const { operationsGenerator: operationsGenerator$6, operationsParser: operationsParser$6 } = createOperationsHandlers({
  keyMap: {
    width: "w",
    quality: "q",
    height: false,
    format: false
  },
  defaults: {
    q: 75
  }
});
const generate$8 = (src, operations, options = {}) => {
  const url = toUrl(`${options.baseUrl || ""}/${options.prefix || "_vercel"}/image`);
  url.search = operationsGenerator$6(operations);
  url.searchParams.append("url", src.toString());
  return toCanonicalUrlString(url);
};
const extract$8 = (url, options = {}) => {
  if (!["vercel", "nextjs"].includes(getProviderForUrlByPath(url) || "")) {
    return null;
  }
  const parsedUrl = toUrl(url);
  const sourceUrl = parsedUrl.searchParams.get("url") || "";
  parsedUrl.searchParams.delete("url");
  const operations = operationsParser$6(parsedUrl);
  parsedUrl.search = "";
  return {
    src: sourceUrl,
    operations,
    options: {
      baseUrl: options.baseUrl ?? parsedUrl.origin
    }
  };
};
const transform$8 = createExtractAndGenerate(extract$8, generate$8);
const generate$7 = (src, operations, options = {}) => generate$8(src, operations, { ...options, prefix: "_next" });
const extract$7 = (url, options) => extract$8(url, options);
const transform$7 = createExtractAndGenerate(extract$7, generate$7);
const { operationsGenerator: operationsGenerator$5, operationsParser: operationsParser$5 } = createOperationsHandlers({
  keyMap: {
    width: "wid",
    height: "hei",
    quality: "qlt",
    format: "fmt"
  },
  defaults: {
    fit: "crop,0"
  }
});
const BASE = "https://s7d1.scene7.com/is/image/";
const generate$6 = (src, operations) => {
  const url = new URL(src, BASE);
  url.search = operationsGenerator$5(operations);
  return toCanonicalUrlString(url);
};
const extract$6 = (url) => {
  if (getProviderForUrl(url) !== "scene7") {
    return null;
  }
  const parsedUrl = new URL(url, BASE);
  const operations = operationsParser$5(parsedUrl);
  parsedUrl.search = "";
  return {
    src: parsedUrl.toString(),
    operations
  };
};
const transform$6 = createExtractAndGenerate(extract$6, generate$6);
const shopifyRegex = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/;
const { operationsGenerator: operationsGenerator$4, operationsParser: operationsParser$4 } = createOperationsHandlers({
  keyMap: {
    format: false
  }
});
const generate$5 = (src, operations) => {
  const url = toUrl(src);
  const basePath = url.pathname.replace(shopifyRegex, "$1$6");
  url.pathname = basePath;
  url.search = operationsGenerator$4(operations);
  return toCanonicalUrlString(url);
};
const extract$5 = (url) => {
  const parsedUrl = toUrl(url);
  const match = shopifyRegex.exec(parsedUrl.pathname);
  const operations = operationsParser$4(parsedUrl);
  if (match) {
    const [, , , width, height, crop] = match;
    if (width && height && !operations.width && !operations.height) {
      operations.width = parseInt(width, 10);
      operations.height = parseInt(height, 10);
    }
    if (crop) {
      operations.crop ??= crop;
    }
  }
  const basePath = parsedUrl.pathname.replace(shopifyRegex, "$1$6");
  parsedUrl.pathname = basePath;
  for (const key of ["width", "height", "crop", "pad_color", "format"]) {
    parsedUrl.searchParams.delete(key);
  }
  return {
    src: parsedUrl.toString(),
    operations
  };
};
const transform$5 = createExtractAndGenerate(extract$5, generate$5);
const storyBlokAssets = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/;
const storyBlokImg2 = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/;
const filterSplitterRegex = /:(?![^(]*\))/;
const splitFilters = (filters) => {
  if (!filters) {
    return {};
  }
  return Object.fromEntries(filters.split(filterSplitterRegex).map((filter) => {
    if (!filter)
      return [];
    const [key, value] = filter.split("(");
    return [key, value.replace(")", "")];
  }));
};
const generateFilters = (filters) => {
  if (!filters) {
    return void 0;
  }
  const filterItems = Object.entries(filters).map(([key, value]) => `${key}(${value ?? ""})`);
  if (filterItems.length === 0) {
    return void 0;
  }
  return `filters:${filterItems.join(":")}`;
};
const extract$4 = (url) => {
  const parsedUrl = toUrl(url);
  const regex = parsedUrl.hostname === "img2.storyblok.com" ? storyBlokImg2 : storyBlokAssets;
  const matches = regex.exec(parsedUrl.pathname);
  if (!matches || !matches.groups) {
    return null;
  }
  const { id, crop, width, height, filters, flipx, flipy } = matches.groups;
  const { format, ...filterMap } = splitFilters(filters ?? "");
  if (parsedUrl.hostname === "img2.storyblok.com") {
    parsedUrl.hostname = "a.storyblok.com";
  }
  const operations = Object.fromEntries([
    ["width", Number(width) || void 0],
    ["height", Number(height) || void 0],
    ["format", format],
    ["crop", crop],
    ["filters", filterMap],
    ["flipx", flipx],
    ["flipy", flipy]
  ].filter(([_2, value]) => value !== void 0));
  return {
    src: `${parsedUrl.origin}${id}`,
    operations
  };
};
const generate$4 = (src, operations) => {
  const url = toUrl(src);
  const { width = 0, height = 0, format, crop, filters = {}, flipx = "", flipy = "" } = operations;
  const size = `${flipx}${width}x${flipy}${height}`;
  if (format) {
    filters.format = format;
  }
  const parts = [
    url.pathname,
    "m",
    crop,
    size,
    generateFilters(filters)
  ].filter(Boolean);
  url.pathname = parts.join("/");
  return toCanonicalUrlString(url);
};
const transform$4 = createExtractAndGenerate(extract$4, generate$4);
const STORAGE_URL_PREFIX = "/storage/v1/object/public/";
const RENDER_URL_PREFIX = "/storage/v1/render/image/public/";
const isRenderUrl = (url) => url.pathname.startsWith(RENDER_URL_PREFIX);
const { operationsGenerator: operationsGenerator$3, operationsParser: operationsParser$3 } = createOperationsHandlers({});
const generate$3 = (src, operations) => {
  const url = toUrl(src);
  const basePath = url.pathname.replace(RENDER_URL_PREFIX, STORAGE_URL_PREFIX);
  url.pathname = basePath;
  if (operations.format && operations.format !== "origin") {
    delete operations.format;
  }
  url.search = operationsGenerator$3(operations);
  return toCanonicalUrlString(url).replace(STORAGE_URL_PREFIX, RENDER_URL_PREFIX);
};
const extract$3 = (url) => {
  const parsedUrl = toUrl(url);
  const operations = operationsParser$3(parsedUrl);
  const isRender = isRenderUrl(parsedUrl);
  const imagePath = parsedUrl.pathname.replace(RENDER_URL_PREFIX, "").replace(STORAGE_URL_PREFIX, "");
  if (!isRender) {
    return {
      src: toCanonicalUrlString(parsedUrl),
      operations
    };
  }
  return {
    src: `${parsedUrl.origin}${STORAGE_URL_PREFIX}${imagePath}`,
    operations
  };
};
const transform$3 = createExtractAndGenerate(extract$3, generate$3);
const uploadcareRegex = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)(?:\/(?<filename>[^\/]+)?)?/;
const { operationsGenerator: operationsGenerator$2, operationsParser: operationsParser$2 } = createOperationsHandlers({
  keyMap: {
    width: false,
    height: false
  },
  defaults: {
    format: "auto"
  },
  kvSeparator: "/",
  paramSeparator: "/-/"
});
const extract$2 = (url) => {
  const parsedUrl = toUrl(url);
  const match = uploadcareRegex.exec(parsedUrl.toString());
  if (!match || !match.groups) {
    return null;
  }
  const { host, uuid } = match.groups;
  const [, ...operationsString] = parsedUrl.pathname.split("/-/");
  const operations = operationsParser$2(operationsString.join("/-/") || "");
  if (operations.resize) {
    const [width, height] = operations.resize.split("x");
    if (width)
      operations.width = parseInt(width);
    if (height)
      operations.height = parseInt(height);
    delete operations.resize;
  }
  return {
    src: `https://${host}/${uuid}/`,
    operations,
    options: { host }
  };
};
const generate$2 = (src, operations, options = {}) => {
  const url = toUrl(src);
  const host = options.host || url.hostname;
  const match = uploadcareRegex.exec(url.toString());
  if (match?.groups) {
    url.pathname = `/${match.groups.uuid}/`;
  }
  operations.resize = operations.resize || `${operations.width ?? ""}x${operations.height ?? ""}`;
  delete operations.width;
  delete operations.height;
  const modifiers = addTrailingSlash(operationsGenerator$2(operations));
  url.hostname = host;
  url.pathname = stripTrailingSlash(url.pathname) + (modifiers ? `/-/${modifiers}` : "") + (match?.groups?.filename ?? "");
  return toCanonicalUrlString(url);
};
const transform$2 = createExtractAndGenerate(extract$2, generate$2);
const { operationsGenerator: operationsGenerator$1, operationsParser: operationsParser$1 } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h"
  },
  defaults: {
    crop: "1"
  }
});
const generate$1 = (src, operations) => {
  const url = toUrl(src);
  const { crop } = operations;
  if (typeof crop !== "undefined" && crop !== "0") {
    operations.crop = crop ? "1" : "0";
  }
  url.search = operationsGenerator$1(operations);
  return toCanonicalUrlString(url);
};
const extract$1 = (url) => {
  const parsedUrl = toUrl(url);
  const operations = operationsParser$1(parsedUrl);
  if (operations.crop !== void 0) {
    operations.crop = operations.crop === "1";
  }
  parsedUrl.search = "";
  return {
    src: toCanonicalUrlString(parsedUrl),
    operations
  };
};
const transform$1 = createExtractAndGenerate(extract$1, generate$1);
const { operationsGenerator, operationsParser } = createOperationsHandlers({
  keyMap: {
    width: "w",
    height: "h",
    format: "output",
    quality: "q"
  },
  defaults: {
    fit: "cover"
  }
});
const extract = (url) => {
  const urlObj = toUrl(url);
  const srcParam = urlObj.searchParams.get("url");
  if (!srcParam) {
    return null;
  }
  let src = srcParam;
  if (!src.startsWith("http://") && !src.startsWith("https://")) {
    src = "https://" + src;
  }
  urlObj.searchParams.delete("url");
  const operations = operationsParser(urlObj);
  return {
    src,
    operations
  };
};
const generate = (src, operations) => {
  const url = new URL("https://wsrv.nl/");
  const srcUrl = typeof src === "string" ? src : src.toString();
  const cleanSrc = srcUrl.replace(/^https?:\/\//, "");
  url.searchParams.set("url", cleanSrc);
  const params = operationsGenerator(operations);
  const searchParams = new URLSearchParams(params);
  for (const [key, value] of searchParams) {
    if (key !== "url") {
      url.searchParams.set(key, value);
    }
  }
  return toCanonicalUrlString(url);
};
const transform = createExtractAndGenerate(extract, generate);
const transformerMap = {
  appwrite: transform$r,
  astro: transform$q,
  "builder.io": transform$p,
  bunny: transform$o,
  cloudflare: transform$n,
  cloudflare_images: transform$m,
  cloudimage: transform$l,
  cloudinary: transform$k,
  contentful: transform$j,
  contentstack: transform$i,
  directus: transform$h,
  hygraph: transform$g,
  imageengine: transform$f,
  imagekit: transform$e,
  imgix: transform$d,
  ipx: transform$c,
  keycdn: transform$b,
  "kontent.ai": transform$a,
  netlify: transform$9,
  nextjs: transform$7,
  scene7: transform$6,
  shopify: transform$5,
  storyblok: transform$4,
  supabase: transform$3,
  uploadcare: transform$2,
  vercel: transform$8,
  wordpress: transform$1,
  wsrv: transform
};
function getTransformerForCdn(cdn) {
  if (!cdn) {
    return void 0;
  }
  return transformerMap[cdn];
}
function transformProps({
  cdn,
  fallback,
  operations = {},
  options,
  ...props
}) {
  cdn ??= getProviderForUrl(props.src) || fallback;
  if (!cdn) {
    return props;
  }
  const transformer = getTransformerForCdn(cdn);
  if (!transformer) {
    return props;
  }
  return transformBaseImageProps({
    ...props,
    operations: operations?.[cdn],
    options: options?.[cdn],
    transformer
  });
}
function transformSourceProps({
  cdn,
  fallback,
  operations,
  options,
  ...props
}) {
  cdn ??= getProviderForUrl(props.src) || fallback;
  if (!cdn) {
    return props;
  }
  const transformer = getTransformerForCdn(cdn);
  if (!transformer) {
    return props;
  }
  return transformBaseSourceProps({
    ...props,
    operations: operations?.[cdn],
    options: options?.[cdn],
    transformer
  });
}
var Image$1 = React.forwardRef(
  function Image2(props, ref) {
    const camelizedProps = camelizeProps(
      transformProps(props)
    );
    return /* @__PURE__ */ jsx("img", { ...camelizedProps, ref });
  }
);
React.forwardRef(
  function Source2(props, ref) {
    const camelizedProps = camelizeProps(
      transformSourceProps(
        props
      )
    );
    return /* @__PURE__ */ jsx("source", { ...camelizedProps, ref });
  }
);
function globToRegex(pattern, separator) {
  let regexStr = "^";
  const doubleStar = separator === "." ? ".+" : ".*";
  const singleStar = separator === "." ? "[^.]+" : "[^/]+";
  const parts = pattern.split("**");
  for (let i = 0; i < parts.length; i++) {
    if (i > 0) {
      regexStr += doubleStar;
    }
    const subParts = parts[i].split("*");
    for (let j = 0; j < subParts.length; j++) {
      if (j > 0) {
        regexStr += singleStar;
      }
      regexStr += subParts[j].replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    }
  }
  regexStr += "$";
  return new RegExp(regexStr);
}
function matchRemotePattern(pattern, url) {
  if (pattern.protocol !== void 0) {
    if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) {
      return false;
    }
  }
  if (pattern.port !== void 0) {
    if (pattern.port !== url.port) {
      return false;
    }
  }
  if (!globToRegex(pattern.hostname, ".").test(url.hostname)) {
    return false;
  }
  if (pattern.search !== void 0) {
    if (pattern.search !== url.search) {
      return false;
    }
  }
  const pathnamePattern = pattern.pathname ?? "**";
  if (!globToRegex(pathnamePattern, "/").test(url.pathname)) {
    return false;
  }
  return true;
}
function hasRemoteMatch(domains2, remotePatterns, url) {
  return domains2.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
}
const __imageRemotePatterns = (() => {
  try {
    return JSON.parse("[]");
  } catch {
    return [];
  }
})();
const __imageDomains = (() => {
  try {
    return JSON.parse("[]");
  } catch {
    return [];
  }
})();
const __hasImageConfig = __imageRemotePatterns.length > 0 || __imageDomains.length > 0;
const __imageDeviceSizes = (() => {
  try {
    return JSON.parse("[640,750,828,1080,1200,1920,2048,3840]");
  } catch {
    return [640, 750, 828, 1080, 1200, 1920, 2048, 3840];
  }
})();
function validateRemoteUrl(src) {
  if (!__hasImageConfig) {
    return { allowed: true };
  }
  let url;
  try {
    url = new URL(src, "http://n");
  } catch {
    return { allowed: false, reason: `Invalid URL: ${src}` };
  }
  if (hasRemoteMatch(__imageDomains, __imageRemotePatterns, url)) {
    return { allowed: true };
  }
  return {
    allowed: false,
    reason: `Image URL "${src}" is not configured in images.remotePatterns or images.domains in next.config.js. See: https://nextjs.org/docs/messages/next-image-unconfigured-host`
  };
}
function sanitizeBlurDataURL(url) {
  if (!url.startsWith("data:image/"))
    return void 0;
  if (/[)(}{\\'"\n\r]/.test(url))
    return void 0;
  return url;
}
function isRemoteUrl(src) {
  return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}
const RESPONSIVE_WIDTHS = __imageDeviceSizes;
function imageOptimizationUrl(src, width, quality = 75) {
  return `/_vinext/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
function generateSrcSet(src, originalWidth, quality = 75) {
  const widths = RESPONSIVE_WIDTHS.filter((w) => w <= originalWidth * 2);
  if (widths.length === 0)
    return `${imageOptimizationUrl(src, originalWidth, quality)} ${originalWidth}w`;
  return widths.map((w) => `${imageOptimizationUrl(src, w, quality)} ${w}w`).join(", ");
}
const Image = forwardRef(function Image22({ src: srcProp, alt, width, height, fill, priority, quality, placeholder, blurDataURL, loader, sizes, className, style, unoptimized: _unoptimized, overrideSrc: _overrideSrc, loading, ...rest }, ref) {
  const src = typeof srcProp === "string" ? srcProp : srcProp.src;
  const imgWidth = width ?? (typeof srcProp === "object" ? srcProp.width : void 0);
  const imgHeight = height ?? (typeof srcProp === "object" ? srcProp.height : void 0);
  const imgBlurDataURL = blurDataURL ?? (typeof srcProp === "object" ? srcProp.blurDataURL : void 0);
  if (loader) {
    const resolvedSrc = loader({ src, width: imgWidth ?? 0, quality: quality ?? 75 });
    return jsx("img", { ref, src: resolvedSrc, alt, width: fill ? void 0 : imgWidth, height: fill ? void 0 : imgHeight, loading: priority ? "eager" : loading ?? "lazy", decoding: "async", sizes, className, style: fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style } : style, ...rest });
  }
  if (isRemoteUrl(src)) {
    const validation = validateRemoteUrl(src);
    if (!validation.allowed) {
      {
        console.error(`[next/image] ${validation.reason}`);
        return null;
      }
    }
    const sanitizedBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
    const bg = placeholder === "blur" && sanitizedBlur ? `url(${sanitizedBlur})` : void 0;
    if (fill) {
      return jsx(Image$1, { src, alt, layout: "fullWidth", priority, sizes, className, background: bg });
    }
    if (imgWidth && imgHeight) {
      return jsx(Image$1, { src, alt, width: imgWidth, height: imgHeight, layout: "constrained", priority, sizes, className, background: bg });
    }
  }
  const imgQuality = quality ?? 75;
  const isSvg = src.endsWith(".svg");
  const skipOptimization = _unoptimized === true || isSvg && true;
  const srcSet = imgWidth && !fill && !skipOptimization ? generateSrcSet(src, imgWidth, imgQuality) : imgWidth && !fill ? RESPONSIVE_WIDTHS.filter((w) => w <= imgWidth * 2).map((w) => `${src} ${w}w`).join(", ") || `${src} ${imgWidth}w` : void 0;
  const optimizedSrc = skipOptimization ? src : imgWidth ? imageOptimizationUrl(src, imgWidth, imgQuality) : imageOptimizationUrl(src, RESPONSIVE_WIDTHS[0], imgQuality);
  const sanitizedLocalBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
  const blurStyle = placeholder === "blur" && sanitizedLocalBlur ? {
    backgroundImage: `url(${sanitizedLocalBlur})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  } : void 0;
  return jsx("img", { ref, src: optimizedSrc, alt, width: fill ? void 0 : imgWidth, height: fill ? void 0 : imgHeight, loading: priority ? "eager" : loading ?? "lazy", fetchPriority: priority ? "high" : void 0, decoding: "async", srcSet, sizes: sizes ?? (fill ? "100vw" : void 0), className, "data-nimg": fill ? "fill" : "1", style: fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...blurStyle, ...style } : { ...blurStyle, ...style }, ...rest });
});
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "flex flex-col items-center gap-3 pt-4 border-t border-border/40", children: [
    /* @__PURE__ */ jsx(
      Image,
      {
        src: "/assets/headers/header_light.png",
        alt: "Paral Dev",
        width: 120,
        height: 32,
        className: "block dark:hidden opacity-50 hover:opacity-70 transition-opacity h-6 w-auto"
      }
    ),
    /* @__PURE__ */ jsx(
      Image,
      {
        src: "/assets/headers/header_dark.png",
        alt: "Paral Dev",
        width: 120,
        height: 32,
        className: "hidden dark:block opacity-50 hover:opacity-70 transition-opacity h-6 w-auto"
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground/60", children: "Neighborhood · Presentación Demo" })
  ] });
}
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "flex flex-col items-center text-center gap-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br from-primary/20 to-primary/5 blur-lg" }),
      /* @__PURE__ */ jsx(
        Image,
        {
          src: "/assets/icons/icon_192.png",
          alt: "Neighborhood",
          width: 96,
          height: 96,
          className: "relative rounded-2xl shadow-lg",
          priority: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold tracking-tight", children: "¡Bienvenido a Neighborhood!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-base sm:text-lg max-w-md mx-auto leading-relaxed", children: "Accede a la demo en vivo con las credenciales de abajo" })
    ] })
  ] });
}
var M = (e, i, s, u, m, a, l, h) => {
  let d = document.documentElement, w = ["light", "dark"];
  function p(n) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
      k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
    }), R(n);
  }
  function R(n) {
    h && w.includes(n) && (d.style.colorScheme = n);
  }
  function c() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
    p(y);
  } catch (n) {
  }
};
var b = ["light", "dark"], I = "(prefers-color-scheme: dark)", O = typeof window == "undefined", x = React.createContext(void 0), U = { setTheme: (e) => {
}, themes: [] }, z = () => {
  var e;
  return (e = React.useContext(x)) != null ? e : U;
}, J = (e) => React.useContext(x) ? React.createElement(React.Fragment, null, e.children) : React.createElement(V, { ...e }), N = ["light", "dark"], V = ({ forcedTheme: e, disableTransitionOnChange: i = false, enableSystem: s = true, enableColorScheme: u = true, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R }) => {
  let [c, n] = React.useState(() => H(m, l)), [T, y] = React.useState(() => c === "system" ? E() : c), k = d ? Object.values(d) : a, S = React.useCallback((o) => {
    let r = o;
    if (!r) return;
    o === "system" && s && (r = E());
    let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g) => {
      g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
    };
    if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
      let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
      P.style.colorScheme = D;
    }
    C == null || C();
  }, [p]), f = React.useCallback((o) => {
    let r = typeof o == "function" ? o(c) : o;
    n(r);
    try {
      localStorage.setItem(m, r);
    } catch (v) {
    }
  }, [c]), A = React.useCallback((o) => {
    let r = E(o);
    y(r), c === "system" && s && !e && S("system");
  }, [c, e]);
  React.useEffect(() => {
    let o = window.matchMedia(I);
    return o.addListener(A), A(o), () => o.removeListener(A);
  }, [A]), React.useEffect(() => {
    let o = (r) => {
      r.key === m && (r.newValue ? n(r.newValue) : f(l));
    };
    return window.addEventListener("storage", o), () => window.removeEventListener("storage", o);
  }, [f]), React.useEffect(() => {
    S(e != null ? e : c);
  }, [e, c]);
  let Q = React.useMemo(() => ({ theme: c, setTheme: f, forcedTheme: e, resolvedTheme: c === "system" ? T : c, themes: s ? [...a, "system"] : a, systemTheme: s ? T : void 0 }), [c, f, e, T, s, a]);
  return React.createElement(x.Provider, { value: Q }, React.createElement(_, { forcedTheme: e, storageKey: m, attribute: h, enableSystem: s, enableColorScheme: u, defaultTheme: l, value: d, themes: a, nonce: p, scriptProps: R }), w);
}, _ = React.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
  let p = JSON.stringify([s, i, a, e, h, l, u, m]).slice(1, -1);
  return React.createElement("script", { ...w, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` } });
}), H = (e, i) => {
  if (O) return;
  let s;
  try {
    s = localStorage.getItem(e) || void 0;
  } catch (u) {
  }
  return s || i;
}, W = (e) => {
  let i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(i);
    }, 1);
  };
}, E = (e) => (e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
function ThemeToggle() {
  const { setTheme, resolvedTheme } = z();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };
  const icon = !mounted ? /* @__PURE__ */ jsx(Monitor, { className: "h-4 w-4" }) : isDark ? /* @__PURE__ */ jsx(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Sun, { className: "h-4 w-4" });
  const label = !mounted ? "Tema" : isDark ? "Modo oscuro" : "Modo claro";
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "h-9 w-9 inline-flex items-center justify-center rounded-full border border-input bg-background/80 backdrop-blur-sm shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer pointer-events-auto",
      onClick: toggleTheme,
      "data-theme-toggle": "true",
      "aria-label": `Cambiar tema — ${label}`,
      title: label,
      children: icon
    }
  );
}
function Home() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-dvh flex flex-col", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed top-4 right-4 z-50", children: /* @__PURE__ */ jsx(ThemeToggle, {}) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 flex flex-col items-center justify-center px-4 py-12 sm:py-16", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-2xl space-y-10", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(CredentialsSection, {}),
      /* @__PURE__ */ jsx(CtaSection, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] }) })
  ] });
}
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(J, { ...props, children });
}
const export_f29e6e234fea = {
  ErrorBoundary,
  NotFoundBoundary
};
const export_0deffcb8ffd7 = {
  LayoutSegmentProvider
};
const export_73d7a23e5015 = {
  default: Home
};
const export_41578ab9c9e0 = {
  ThemeProvider
};
export {
  export_0deffcb8ffd7,
  export_41578ab9c9e0,
  export_73d7a23e5015,
  export_f29e6e234fea
};
