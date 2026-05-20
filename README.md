# Juan Pablo Bustamante — Portafolio

Sitio web personal con información de presentación, portafolio, hoja de vida y sección sobre mí. Construido con Astro.

## Demo en vivo

[jpbustamanteb026.github.io/...](https://jpbustamanteb026.github.io/Portafolio/)

## Páginas

- **Inicio** — presentación con nombre, título y redes sociales
- **Portafolio** — proyectos con tecnologías usadas (Angular, Astro, Figma)
- **Sobre mí** — habilidades personales, stack técnico, educación e idiomas
- **Resume** — experiencia laboral (CIAT — Campus Map)

## Tecnologías

- [Astro](https://astro.build/) v6
- HTML5 semántico + CSS3 (variables, custom properties)
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
git clone git@github.com:jpbustamanteb026/pagina.git
cd pagina
pnpm install
pnpm dev
```

> Requiere Node.js >= 22.12.0 y pnpm
