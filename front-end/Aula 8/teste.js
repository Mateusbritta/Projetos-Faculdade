console.log ("Hello World");

const titulo = document.querySelector("h1");
document.querySelector("h1").textContent = "Olá Mundo!";

titulo.addEventListener("click", () => {
    titulo.textContent = "Esperou o contato e o contato veio";
    titulo.style.color = "crimson";
});

setTimeout(() => {
    document.getElementById("mensagem").textContent = "E ele marca penalti";
}, 2000);