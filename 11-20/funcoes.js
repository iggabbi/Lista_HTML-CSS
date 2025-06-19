//11
function calculadora(operation) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    let resultado;
  
    if (isNaN(n1) || isNaN(n2)) {
      resultado = "Por favor, insira números válidos.";
    } else {
      switch (operation) {
        case "+":
          resultado = n1 + n2;
          break;
        case "-":
          resultado = n1 - n2;
          break;
        case "*":
          resultado = n1 * n2;
          break;
        case "/":
          resultado = n2 !== 0 ? n1 / n2 : "Erro: divisão por zero!";
          break;
        default:
          resultado = "Operação inválida.";
      }
    }
  
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

//12
function checarResposta() {
    const options = document.getElementsByName("quiz");
    let selecionado = null;
  
    for (const option of options) {
      if (option.checked) {
        selecionado = option.value;
        break;
      }
    }
  
    const resultText = document.getElementById("quizResultado");
  
    if (!selecionado) {
      resultText.textContent = "Por favor, selecione uma resposta.";
      resultText.style.color = "orange";
    } else if (selecionado === "C") {
      resultText.textContent = "Correto! Brasília é a capital.";
      resultText.style.color = "green";
    } else {
      resultText.textContent = "Incorreto. A resposta correta é Brasília.";
      resultText.style.color = "red";
    }
}

//13
function converterParaC() {
    const tempF = parseFloat(document.getElementById("tempInput").value);
    const resultado = document.getElementById("tempResultado");
  
    if (isNaN(tempF)) {
      resultado.textContent = "Por favor, insira um valor numérico válido.";
      resultado.style.color = "orange";
      return;
    }
  
    const celsius = (tempF - 32) * 5 / 9;
    resultado.textContent = `Resultado: ${celsius.toFixed(2)} °C`;
    resultado.style.color = "black";
}
  
 function converterParaF() {
    const tempC = parseFloat(document.getElementById("tempInput").value);
    const resultado = document.getElementById("tempResultado");
  
    if (isNaN(tempC)) {
      resultado.textContent = "Por favor, insira um valor numérico válido.";
      resultado.style.color = "orange";
      return;
    }
  
    const fahrenheit = (tempC * 9 / 5) + 32;
    resultado.textContent = `Resultado: ${fahrenheit.toFixed(2)} °F`;
    resultado.style.color = "black";
}

//14
function mostrarSaudacao() {
    const nome = document.getElementById("nomeUsuario").value.trim();
  
    if (nome === "") {
      alert("Por favor, digite seu nome.");
    } else {
      alert(`Olá ${nome}. Seja bem-vindo(a)!`);
    }
}

//15
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function formatarNumero(n) {
  return n < 10 ? "0" + n : n;
}

function atualizarDisplay() {
  const tempo = `${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}`;
  document.getElementById("tempo").textContent = tempo;
}

function iniciarCronometro() {
  if (intervalo) return; // impede múltiplos intervalos

  intervalo = setInterval(() => {
    segundos++;
    if (segundos === 60) {
      segundos = 0;
      minutos++;
    }
    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
    atualizarDisplay();
  }, 1000);
}

function pausarCronometro() {
  clearInterval(intervalo);
  intervalo = null;
}

function zerarCronometro() {
  clearInterval(intervalo);
  intervalo = null;
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarDisplay();
}

//16
document.addEventListener("DOMContentLoaded", () => {
    const radios = document.getElementsByName("cor");
  
    for (const radio of radios) {
      radio.addEventListener("change", () => {
        document.body.style.backgroundColor = radio.value;
      });
    }
});

//17
function corrigirQuizMatematica() {
    const respostasCorretas = {
      q1: "C", // 7 + 5 = 12
      q2: "B", // 9 x 6 = 54
      q3: "B"  // √81 = 9
    };
  
    let acertos = 0;
  
    for (const questao in respostasCorretas) {
      const radios = document.getElementsByName(questao);
      for (const radio of radios) {
        if (radio.checked && radio.value === respostasCorretas[questao]) {
          acertos++;
          break;
        }
      }
    }
  
    const resultado = document.getElementById("resultadoQuizMatematica");
    resultado.textContent = `Você acertou ${acertos} de 3 questões.`;
  
    resultado.style.color = acertos === 3 ? "green" : acertos > 0 ? "orange" : "red";
}

//18
document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnCor");
  
    botao.addEventListener("click", () => {
      const cores = ["red", "green", "blue", "orange", "purple", "teal", "pink", "gold"];
      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
      botao.style.backgroundColor = corAleatoria;
    });
});
  
//19
let cliques = 0;

document.addEventListener("DOMContentLoaded", () => {
  const botaoContador = document.getElementById("btnContador");
  const spanContador = document.getElementById("contador");

  botaoContador.addEventListener("click", () => {
    cliques++;
    spanContador.textContent = cliques;
  });
});

//20
document.addEventListener("DOMContentLoaded", () => {
    const texto = document.getElementById("textoHover");
    const textoOriginal = texto.textContent;
  
    texto.addEventListener("mouseover", () => {
      texto.textContent = "Você passou o mouse por aqui!";
      texto.style.color = "blue";
    });
  
    texto.addEventListener("mouseout", () => {
      texto.textContent = textoOriginal;
      texto.style.color = "#333";
    });
});  