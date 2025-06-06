function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "160423") {
    document.getElementById("senha-container").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}
