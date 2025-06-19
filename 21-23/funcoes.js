//21
document.getElementById("inputTecla").addEventListener("keydown", function(e) {
    document.getElementById("teclaPressionada").textContent = e.key;
});
  
//22
document.getElementById("paragrafo").addEventListener("dblclick", function () {
    this.style.display = "none";
});
  
//23
document.getElementById("checkPermissao").addEventListener("change", function () {
    const botao = document.getElementById("btnEnviar");
    botao.disabled = !this.checked;
});  