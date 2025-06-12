document.getElementById("formNoticia").addEventListener("submit", function (e) {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const resumen = document.getElementById("resumen").value.trim();
  const fuente = document.getElementById("fuente").value.trim();

  const nuevaNoticia = {
    titulo,
    resumen,
    fuente
  };

  const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

  noticias.push(nuevaNoticia);

  localStorage.setItem("noticias", JSON.stringify(noticias));

  window.location.href = "Noticias.html";
});