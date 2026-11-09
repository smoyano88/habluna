# Habluna — Español para conectar

Sitio bilingüe de clases personales de español online con Sergio Moyano. Inglés en `/` y `/en`, español en `/es`. Incluye diseño responsive, expresiones interactivas, preguntas frecuentes y contacto por correo.

## Desarrollo

Requiere Node.js 20 o superior. No necesita dependencias de terceros.

```sh
npm run dev
```

Abrir http://localhost:4173. Después de editar, ejecutar `npm run build` y recargar el navegador.

## Publicación

Importar este repositorio en Vercel, con preset **Other**. El archivo `vercel.json` define `npm run build` y la salida `dist`. Cada push a `main` genera un despliegue de producción.

- `content.mjs`: todos los textos en inglés y español.
- `build.mjs`: plantillas HTML, SEO y generación de páginas.
- `public/style.css`: identidad visual y adaptación móvil.
- `public/app.js`: menú, expresiones y formulario.
- `public/*.webp`: imágenes optimizadas. Los originales están en `assets/originals`.
- `SITE_URL`: dominio de producción para canonical, Open Graph y sitemap. Predeterminado: https://habluna.vercel.app. Actualizar si se conecta un dominio propio.

El formulario **no envía datos a un servidor**: abre un borrador `mailto:` en el dispositivo del visitante. El visitante debe enviarlo con su aplicación de correo. Dirección actual: `smoyano1988@gmail.com`.

No se incluyen precios, reseñas, enlaces de reserva o redes sociales no confirmados. Para añadirlos, actualizar `content.mjs` y las plantillas correspondientes.
