document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("noticiasContainer");
  const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

  noticias.forEach(noticia => {
    const card = document.createElement("div");
    card.className = "col-md-4";
    card.innerHTML = `
      <a href="${noticia.fuente}" class="noticias d-block" target="_blank">
        <h3><b>${noticia.titulo}</b></h3>
        <p>${noticia.resumen}</p>
      </a>
    `;
    container.appendChild(card);
  });
});