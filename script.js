// Função que exibe uma mensagem ao clicar no botão
document.getElementById("msgButton").addEventListener("click", function() {
  const msg = "Bem-vindo à minha página! Nunca pare de aprender! 🚀";
  document.getElementById("msgOutput").textContent = msg;
});
