<script>
  function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === "160423") {
      document.getElementById("senha-container").style.display = "none";
      document.getElementById("conteudo").style.display = "block";
    } else {
      alert("Senha incorreta.");
    }
  }
// Função do contador de tempo
function atualizarContador() {
  const dataConhecimento = new Date("2023-04-16T00:00:00");
  const agora = new Date();

  const diffMs = agora - dataConhecimento;

  const anos = agora.getFullYear() - dataConhecimento.getFullYear();
  const meses = agora.getMonth() - dataConhecimento.getMonth();
  const dias = agora.getDate() - dataConhecimento.getDate();

  let anosFinal = anos;
  let mesesFinal = meses;
  let diasFinal = dias;

  if (diasFinal < 0) {
    mesesFinal -= 1;
    const diasDoMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    diasFinal += diasDoMesAnterior;
  }

  if (mesesFinal < 0) {
    anosFinal -= 1;
    mesesFinal += 12;
  }

  document.getElementById("tempo-decorrido").textContent =
    `${anosFinal} ano(s), ${mesesFinal} mês(es) e ${diasFinal} dia(s) desde que nos conhecemos.`;
}

// Só inicia o contador se a senha for correta
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "160423") {
    document.getElementById("senha-container").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
    atualizarContador();
    setInterval(atualizarContador, 1000 * 60 * 60); // Atualiza a cada hora
  } else {
    alert("Senha incorreta.");
  }
}

  // --- INÍCIO DAS PROTEÇÕES ---

  // Bloquear teclas F12, Ctrl+Shift+I/J e Ctrl+U para evitar abrir devtools ou ver código fonte
  document.addEventListener('keydown', function(e) {
    if (
      e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      alert('Essa ação não é permitida!');
    }
  });

  // Bloquear clique com botão direito para evitar "Inspecionar elemento"
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Clique direito bloqueado!');
  });

  // Detectar se o devtools está aberto (método simples, não 100% confiável)
  setInterval(() => {
    if (
      window.outerWidth - window.innerWidth > 100 || 
      window.outerHeight - window.innerHeight > 100
    ) {
      alert('Ferramentas de desenvolvedor detectadas! Por favor, feche-as.');
      // Se quiser, pode redirecionar ou fechar a página aqui:
      // window.location.href = "about:blank";
    }
  }, 1000);

  // --- FIM DAS PROTEÇÕES ---
</script>
