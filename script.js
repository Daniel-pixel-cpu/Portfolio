    // Função global para usar no onclick (se necessário)
    function alternarTema() {
      const html = document.documentElement;
      const temaClaro = html.classList.toggle("light");
      localStorage.setItem("tema", temaClaro ? "claro" : "escuro");
      console.log(🎯 Tema alterado para: ${temaClaro ? "claro" : "escuro"});
    }

    document.addEventListener("DOMContentLoaded", () => {
      const html = document.documentElement;

      // Aplica o tema salvo
      const temaSalvo = localStorage.getItem("tema");
      if (temaSalvo === "claro") {
        html.classList.add("light");
        console.log("🎨 Tema claro aplicado (salvo).");
      } else {
        html.classList.remove("light");
        console.log("🎨 Tema escuro aplicado (salvo).");
      }

      // Botão de tema
      const botaoTema = document.getElementById("botaoTema");
      if (botaoTema) {
        botaoTema.addEventListener("click", alternarTema);
      } else {
        console.warn("❗ Botão de tema não encontrado na página.");
      }

      // Botão de voltar ao topo
      const voltarTopo = document.getElementById("voltarTopo");
      if (voltarTopo) {
        voltarTopo.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      } else {
        console.warn("❗ Botão voltar ao topo não encontrado na página.");
      }
    });
