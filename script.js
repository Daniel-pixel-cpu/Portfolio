document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const botaoTema = document.getElementById("botaoTema");
  const voltarTopo = document.getElementById("voltarTopo");

  console.log("✅ Script carregado e DOM pronto.");
  console.log("🔍 botaoTema:", botaoTema);
  console.log("🔍 voltarTopo:", voltarTopo);

  // Aplica o tema salvo
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    html.classList.add("light");
    console.log("🎨 Tema salvo: claro (aplicado)");
  } else {
    html.classList.remove("light");
    console.log("🎨 Tema salvo: escuro (ou nenhum)");
  }

  // Troca de tema
  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      html.classList.toggle("light");
      const temaAtual = html.classList.contains("light") ? "claro" : "escuro";
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
