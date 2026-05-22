function setupScrollTop() {
  const btnScrollTop = document.getElementById("btnScrollTop");

  // Evento de click para subir suavemente
  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Esto hace que el scroll sea fluido y no un salto brusco
    });
  });
}

document.addEventListener("astro:page-load", setupScrollTop);
