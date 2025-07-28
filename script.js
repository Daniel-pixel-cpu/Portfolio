document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("botaoTema");
  const voltarTopo = document.getElementById("voltarTopo");
  const html = document.documentElement;

  // Aplica o tema salvo
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    html.classList.add("light");
  }

  // Alterna o tema
  botaoTema.addEventListener("click", () => {
    html.classList.toggle("light");
    const temaAtual = html.classList.contains("light") ? "claro" : "escuro";
    localStorage.setItem("tema", temaAtual);
  });

  // Botão voltar ao topo
  voltarTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
