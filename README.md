# fase-valtodent-web

Portada demo de la web de Clínicas FASE-Valtodent (Valdetorres de Jarama). Astro + Tailwind CSS 4.
Tipografías Outfit y Figtree, servidas desde la propia web.

**Es una demostración:** lleva `noindex`, los datos están sin confirmar y las fotos son provisionales.

## Datos pendientes

Todo lo no confirmado con la clínica está en `src/site.ts`, marcado como `PENDIENTE`: teléfonos,
dirección, horario, especialidades, razón social y número de registro sanitario.

## Comandos

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Comprueba tipos y compila en `dist/` |
| `npm run deploy` | Compila con la ruta base de GitHub Pages y publica en la rama `gh-pages` |
| `npm run preview:lan` | Compila y deja la web en `.preview/` para el servidor temporal de la red local |

## Despliegue

Se publica en GitHub Pages desde la rama `gh-pages` con `npm run deploy`. La web cuelga de
`/fase-valtodent-web/`, por eso el script define `ASTRO_SITE` y `ASTRO_BASE` al compilar. En local
no hace falta: se sirve desde la raíz.

No hay despliegue automático con GitHub Actions: el token de `gh` no tiene el permiso `workflow`.
Se puede activar con `gh auth refresh -s workflow`.

Alojamiento definitivo previsto: Netlify (ver la guía visual en el repositorio de la agencia).

## Material de marca

Colores, tipografía, logo y fotos: `clients/fase-valtodent/` en el repositorio de la agencia.
