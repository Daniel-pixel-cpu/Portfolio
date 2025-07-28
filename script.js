document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  // Pega tema salvo do localStorage
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    html.classList.add("dark");
    console.log("Tema escuro aplicado (salvo)");
  } else {
    html.classList.remove("dark");
    console.log("Tema claro aplicado (padrão ou salvo)");
  }

  // Função para alternar tema
  function alternarTema() {
    const temaEscuro = html.classList.toggle("dark");
    localStorage.setItem("tema", temaEscuro ? "escuro" : "claro");
    console.log(`Tema alterado para: ${temaEscuro ? "escuro" : "claro"}`);
  }

  // Botão para trocar tema
  const botaoTema = document.getElementById("botaoTema");
  if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
  } else {
    console.warn("Botão de tema não encontrado");
  }

  // Botão para voltar ao topo
  const voltarTopo = document.getElementById("voltarTopo");
  if (voltarTopo) {
    voltarTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.warn("Botão voltar ao topo não encontrado");
  }
});
