# Primer mes con Edith ❤️

Sitio estático: no requiere npm, Vite ni compilación.

## Subir a GitHub

Descomprime el ZIP y sube **todos los archivos sueltos** al nivel principal del repositorio (incluidos .webp, .mp3 y .mp4). No subas el ZIP.

## Publicar con Netlify

En Netlify, importa el repositorio desde GitHub. En Build settings deja **Build command vacío** y configura **Publish directory** como `.` (raíz). Si ya tenías un sitio Vite, borra la orden `npm run build` de Site configuration → Build & deploy → Build settings, o crea un sitio nuevo.

También puedes publicar en GitHub Pages desde Settings → Pages → Deploy from a branch → main / (root).

## Editar

- `index.html`: estructura base.
- `style.css`: estilos y animaciones.
- `main.js`: textos, fotos, razones y fecha en el objeto CONFIG al inicio.
- Fotos, video y MP3: están todos en la raíz junto con index.html.

Fecha de inicio confirmada: 20/10/2026. La música solo comienza cuando se pulsa su botón.

Prueba abriendo `index.html` en tu navegador.
