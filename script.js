function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  if (input === "160423") {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Senha incorreta.");
  }
}
