// Função para aplicar tema baseado no localStorage ou padrão (escuro)
function aplicarTema() {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    document.body.classList.add("light");
  } else {
    // Padrão: modo escuro, sem classe "light"
    document.body.classList.remove("light");
  }
}

// Alterna o tema e salva a escolha
function alternarTema() {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    localStorage.setItem("tema", "escuro");
  } else {
    document.body.classList.add("light");
    localStorage.setItem("tema", "claro");
  }
}

// Evento botão "Trocar Tema"
const botaoTema = document.getElementById("botaoTema");
if (botaoTema) {
  botaoTema.addEventListener("click", alternarTema);
}

// Evento botão "Voltar ao Topo"
const voltarTopo = document.getElementById("voltarTopo");
if (voltarTopo) {
  voltarTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Aplica o tema ao carregar a página
window.addEventListener("DOMContentLoaded", aplicarTema);
