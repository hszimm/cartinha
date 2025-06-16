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
