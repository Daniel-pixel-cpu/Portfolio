// Referência aos botões
const botaoTema = document.getElementById("botaoTema");
const voltarTopo = document.getElementById("voltarTopo");

// Aplica o tema salvo ou inicia no escuro por padrão
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
});

// Alterna o tema e salva no localStorage
botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const temaAtual = document.body.classList.contains("light") ? "claro" : "escuro";
  localStorage.setItem("tema", temaAtual);
});

// Voltar ao topo suavemente
voltarTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('.clicavel').forEach(section => {
  section.addEventListener('click', () => {
    const link = section.getAttribute('data-link');
    if (link) window.location.href = link;
  });
});
