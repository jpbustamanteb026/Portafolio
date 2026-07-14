# Juan Pablo Bustamante — Portafolio

Sitio web personal con información de presentación, sobre mí, resume y proyectos. Construido con Astro.

## Páginas

- **Inicio** — presentación con nombre, título y redes sociales
- **Sobre mí** — habilidades personales, stack técnico, educación e idiomas
- **Resume** — experiencia laboral
- **Proyectos** — proyectos con tecnologías usadas

## Tecnologías

- [Astro](https://astro.build/) v6
- HTML + CSS
- JavaScript / TypeScript

## Estructura

```
src/
├── pages/          # index, portafolio, sobremi, resume
├── components/     # Un componente Astro por sección
├── layouts/        # Layout base
├── styles/         # CSS global, reset, resume
└── assets/         # Imágenes
public/
└── icons/          # SVGs del stack tecnológico
```

## Correr localmente

```bash
git clone git@github.com:jpbustamanteb026/portafolio.git
cd portafolio
pnpm install
pnpm dev
```

> Requiere Node.js >= 22.12.0 y pnpm
