document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;

  // Aplica o tema salvo (claro ou escuro)
  const temaSalvo = localStorage.getItem("tema");
  if (temaSalvo === "claro") {
    html.classList.add("light");
    console.log("🎨 Tema claro aplicado (salvo).");
  } else {
    html.classList.remove("light");
    console.log("🎨 Tema escuro aplicado (salvo).");
  }

  // Botão trocar tema
  const botaoTema = document.getElementById("botaoTema");
  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      const temaClaro = html.classList.toggle("light");
      localStorage.setItem("tema", temaClaro ? "claro" : "escuro");
      console.log(`🎯 Tema alterado para: ${temaClaro ? "claro" : "escuro"}`);
    });
  }

  // Botão voltar ao topo
  const voltarTopo = document.getElementById("voltarTopo");
  if (voltarTopo) {
    voltarTopo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Animação da imagem print-jogo
  const imagem = document.querySelector(".animar-entrada");
  if (imagem) {
    setTimeout(() => {
      imagem.classList.add("ativo");
    }, 300);
  }

  // Envio do formulário contato com redirecionamento
  const form = document.getElementById("formContato");
  const sucessoMsg = document.getElementById("mensagemSucesso");
  const erroMsg = document.getElementById("mensagemErro");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      sucessoMsg.style.display = "none";
      erroMsg.style.display = "none";

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          headers: { 'Accept': 'application/json' },
          body: data
        });

        if (response.ok) {
          // Redireciona para obrigado.html
          window.location.href = "obrigado.html";
        } else {
          erroMsg.style.display = "block";
        }
      } catch {
        erroMsg.style.display = "block";
      }
    });
  }
});
