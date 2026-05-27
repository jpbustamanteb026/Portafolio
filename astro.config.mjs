import { defineConfig } from "astro/config";

// Vercel define automáticamente la variable GITHUB_ACTIONS como falsa o inexistente,
// mientras que GitHub Pages siempre corre bajo GitHub Actions.
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: "https://jpbustamanteb026.github.io",
  // Si está en GitHub Pages usa '/Portafolio', si está en Vercel usa la raíz '/'
  base: isGitHubPages ? "/Portafolio" : "/",
});
