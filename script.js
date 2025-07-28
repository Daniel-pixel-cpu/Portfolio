document.addEventListener("DOMContentLoaded", () => {
  aplicarTemaSalvo();
  configurarBotaoTema();
  configurarBotaoTopo();
  // Se tiver mais botões ou interações, pode adicionar aqui
});

// 🌙 Aplica o tema salvo no localStorage
function aplicarTemaSalvo() {
  const html = document.documentElement;
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "claro") {
    html.classList.add("light");
    console.log("🎨 Tema claro aplicado (salvo).");
  } else {
    html.classList.remove("light");
    console.log("🎨 Tema escuro aplicado (ou nenhum salvo).");
  }
}

// 🌗 Botão de troca de tema
function configurarBotaoTema() {
  const html = document.documentElement;
  const botaoTema = document.getElementById("botaoTema");

  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      html.classList.toggle("light");
      const temaAtual = html.classList.contains("light") ? "claro" : "escuro";
      localStorage.setItem("tema", temaAtual);
      console.log(`🎯 Tema alterado para: ${temaAtual}`);
    });
  } else {
    console.warn("⚠️ botaoTema não encontrado.");
  }
}

// 🔝 Botão de voltar ao topo
function configurarBotaoTopo() {
  const voltarTopo = document.getElementById("voltarTopo");

  if (voltarTopo) {
    voltarTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.warn("⚠️ voltarTopo não encontrado.");
  }
}
