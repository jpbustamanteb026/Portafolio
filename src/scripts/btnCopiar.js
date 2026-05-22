// Este script se ejecuta únicamente en el cliente (navegador)
const boton = document.getElementById("copiar-correo-btn");
const aviso = document.getElementById("mensaje-copiado");

if (boton) {
  boton.addEventListener("click", async () => {
    const correo = boton.dataset.correo;

    if (correo && aviso) {
      try {
        await navigator.clipboard.writeText(correo);

        aviso.classList.add("copiado");

        setTimeout(() => {
          aviso.classList.remove("copiado");
        }, 2000);
      } catch (err) {
        console.error("Error al copiar al portapapeles:", err);
        alert("No se pudo copiar el correo");
      }
    }
  });
}
