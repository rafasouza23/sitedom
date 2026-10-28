const botaoTema = document.getElementById("btn-tema");
botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

const botaoCuriosidade = document.getElementById("btn-curiosidade");
const textoCuriosidade = document.getElementById("texto-curiosidade");
botaoCuriosidade.addEventListener("click", function () {
    if (textoCuriosidade.style.display === "block") {
        textoCuriosidade.style.display = "none";
        botaoCuriosidade.textContent = "Ver Curiosidade";
    } else {
        textoCuriosidade.style.display = "block";
        botaoCuriosidade.textContent = "Ocultar Curiosidade";
    }
});

const botaoCurtir = document.getElementById("btn-curtir");
const contador = document.getElementById("contador");
let totalCurtidas = 0;
botaoCurtir.addEventListener("click", function () {
    totalCurtidas++;
    contador.textContent = totalCurtidas + " curtidas";
});