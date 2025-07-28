document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const botaoTema = document.getElementById("botaoTema");

  // Aplica tema salvo
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "escuro") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // Função para alternar tema
  function alternarTema() {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("tema", "claro");
      console.log("🎯 Tema alterado para claro");
    } else {
      html.classList.add("dark");
      localStorage.setItem("tema", "escuro");
      console.log("🎯 Tema alterado para escuro");
    }
  }

  // Evento no botão
  if (botaoTema) {
    botaoTema.addEventListener("click", alternarTema);
  } else {
    console.warn("Botão de tema não encontrado.");
  }
});
