# Land Neigh

Landing page de presentación para Neighborhood, construida con React 19, Vinext, Tailwind CSS v4 y deploy sobre Cloudflare Workers.

## Requisitos

- Node.js 20+
- pnpm 10+
- Wrangler 4+ para deploy

## Instalación

```bash
pnpm install
```

## Ejecutar en local

```bash
pnpm dev
```

La app levanta en modo desarrollo con Vinext. La landing principal vive en [land-neigh/src/app/page.tsx](src/app/page.tsx).

## Scripts disponibles

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm deploy
```

- `pnpm dev`: entorno local de desarrollo.
- `pnpm build`: genera el build de cliente y worker.
- `pnpm start`: sirve el build generado localmente.
- `pnpm lint`: valida el código con ESLint.
- `pnpm deploy`: publica en Cloudflare Workers usando Wrangler.

## Estructura clave

- [land-neigh/src/app/page.tsx](src/app/page.tsx): composición principal de la landing.
- [land-neigh/src/components](src/components): secciones visuales como hero, credenciales, CTA y footer.
- [land-neigh/public/assets](public/assets): recursos estáticos de marca, headers, íconos y SEO.
- [land-neigh/worker/index.ts](worker/index.ts): entrypoint del worker para Cloudflare.
- [land-neigh/wrangler.jsonc](wrangler.jsonc): configuración de despliegue y assets.

## Deploy

El proyecto está preparado para desplegar en Cloudflare Workers con assets estáticos desde `dist/client`.

```bash
pnpm build
pnpm deploy
```

Antes de desplegar, asegúrate de tener autenticado Wrangler en tu entorno.

## Notas técnicas

- La UI está pensada como landing de demo y presentación.
- La app usa alias `@` apuntando a `src` definido en [land-neigh/vite.config.ts](vite.config.ts).
- El worker publica los assets generados por Vinext usando la configuración de [land-neigh/wrangler.jsonc](wrangler.jsonc).
