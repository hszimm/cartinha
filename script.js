function checkPassword() {
  const senha = document.getElementById("passwordInput").value;
  if (senha === "160423") {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Senha incorreta.");
  }
}
