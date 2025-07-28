// Ao carregar a página, aplica o tema salvo no localStorage, ou inicia no modo escuro
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    document.body.classList.add("light");
  } else {
    // Por padrão inicia escuro (sem class 'light')
    document.body.classList.remove("light");
  }

  const botaoTema = document.getElementById("botaoTema");
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (document.body.classList.contains("light")) {
      localStorage.setItem("tema", "claro");
    } else {
      localStorage.setItem("tema", "escuro");
    }
  });

  const voltarTopo = document.getElementById("voltarTopo");
  voltarTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
