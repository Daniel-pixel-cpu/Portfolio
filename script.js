// Detecta o tema salvo e aplica assim que a página carrega
(function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    document.documentElement.classList.add("dark");
    console.log("🎨 Tema escuro aplicado (salvo).");
  } else {
    document.documentElement.classList.remove("dark");
    console.log("🎨 Tema claro aplicado (salvo).");
  }
})();

// Função que alterna o tema quando clicado
function alternarTema() {
  const html = document.documentElement;
  const modoEscuroAtivo = html.classList.toggle("dark");
  const novoTema = modoEscuroAtivo ? "escuro" : "claro";
  localStorage.setItem("tema", novoTema);
  console.log("🎯 Tema alterado para:", novoTema);
}
