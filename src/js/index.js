const BotaoAlterarTema = document.getElementById("botao-alterar-tema");

const imagemBotaotrocadetema = document.querySelector(".imagem-botao")
const body = document.querySelector("body");

BotaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");
    if (modoEscuroEstaAtivo) {
        imagemBotaotrocadetema.setAttribute("src", "./src/imagens/sun.png")
    }

    else {
        imagemBotaotrocadetema.setAttribute("src", "./src/imagens/moon.png")
    }
});