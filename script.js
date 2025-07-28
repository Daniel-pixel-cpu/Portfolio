document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const botaoTema = document.getElementById("botaoTema");
  const voltarTopo = document.getElementById("voltarTopo");

  console.log("✅ Script carregado e DOM pronto.");
  console.log("🔍 botaoTema:", botaoTema);
  console.log("🔍 voltarTopo:", voltarTopo);

  // Aplica o tema salvo
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "dark") {
    html.classList.add("dark");
    console.log("🎨 Tema salvo: escuro (aplicado)");
  } else {
    html.classList.remove("dark");
    console.log("🎨 Tema salvo: claro (ou nenhum)");
  }

  // Troca de tema
  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      html.classList.toggle("dark");
      const temaAtual = html.classList.contains("dark") ? "dark" : "light";
      localStorage.setItem("tema", temaAtual);
      console.log(`🎯 Tema alterado para: ${temaAtual}`);
    });
  } else {
    console.error("❌ botaoTema não encontrado no DOM.");
  }

  // Voltar ao topo
  if (voltarTopo) {
    voltarTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    console.error("❌ voltarTopo não encontrado no DOM.");
  }
});
