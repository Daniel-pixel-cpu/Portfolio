document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  // Aplicar tema salvo (dark/clear)
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    html.classList.add("dark");
  } else if (temaSalvo === "claro") {
    html.classList.remove("dark");
  }

  // Botão trocar tema
  const botaoTema = document.getElementById("botaoTema") || document.getElementById("trocar-tema");
  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      const darkAtivo = html.classList.toggle("dark");
      localStorage.setItem("tema", darkAtivo ? "escuro" : "claro");
    });
  }

  // Botão voltar ao topo
  const btnTopo = document.getElementById("voltarTopo");
  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
