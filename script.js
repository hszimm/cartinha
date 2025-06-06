
let cartaAtual = 1;
function mostrarCarta(num) {
    document.querySelectorAll('.carta').forEach((el, i) => {
        el.classList.remove('ativa');
        if (i === num - 1) el.classList.add('ativa');
    });
}
function proximaCarta() {
    cartaAtual = cartaAtual === 3 ? 1 : cartaAtual + 1;
    mostrarCarta(cartaAtual);
}
function anteriorCarta() {
    cartaAtual = cartaAtual === 1 ? 3 : cartaAtual - 1;
    mostrarCarta(cartaAtual);
}
document.addEventListener("DOMContentLoaded", () => {
    mostrarCarta(cartaAtual);
});

function entrarSite() {
    document.getElementById("entrada").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
    const audio = document.getElementById("musica");
    if (audio) {
        audio.play().catch(() => {});
    }
}
