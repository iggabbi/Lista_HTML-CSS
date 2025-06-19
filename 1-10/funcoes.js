//1
function numero() {
    const n = parseFloat(document.getElementById("n").value)
    if (isNaN(n)) {
        alert("Por favor, insira um número válido.")
        return;
    }
    if (n % 2 === 0) {
        alert('Seu número é par');
    } else {
        alert('Seu número é ímpar');
    }
}


//2
function gerarTabuada() {
    const n1 = parseInt(document.getElementById("n1").value);
    const resultado = document.getElementById("resultado");
    
    if (isNaN(n1)) {
        resultado.textContent = "Por favor, digite um número inteiro válido.";
        return;
    }
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        tabuada += `${n1} x ${i} = ${n1 * i}\n`;
    }
    resultado.textContent = tabuada;
}

//3
let contador = 0;
function atualizarValor() {
    document.getElementById("valor").textContent = contador;
}
function aumentar() {
    contador++;
    atualizarValor();
}
function diminuir() {
    contador--;
    atualizarValor();
}

//4
let nSorteado = Math.floor(Math.random() * 10) + 1;
function verificar() {
    const n2 = document.getElementById("n2").value;
    const resultado1 = document.getElementById("resultado1");
    const nSorteadoElement = document.getElementById("nSorteado");

    if (n2 == "") {
        resultado1.textContent = "Por favor, digite um número.";
        return;
    }
    if (n2 == nSorteado) {
        resultado1.textContent = "Parabéns! Você acertou!";
    } else {
        resultado1.textContent = "Tente novamente! O número não é esse.";
    }
}

//5
function media() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado2").textContent = "Por favor, insira todas as notas corretamente.";
        return;
    }

    const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    if (media >= 6) {
        document.getElementById("resultado2").textContent = `Aprovado! Sua média é ${media}.`;
    } else {
        document.getElementById("resultado2").textContent = `Reprovado! Sua média é ${media}.`;
    }
}

//8
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const assunto = document.getElementById("assunto");
        const mensagem = document.getElementById("mensagem");

        if (
            nome.value.trim() === "" ||
            email.value.trim() === "" ||
            assunto.value.trim() === "" ||
            mensagem.value.trim() === ""
        ) {
            e.preventDefault();
            alert("Por favor, preencha todos os campos antes de enviar.");
        }
    });
});

//9
const botaoCor = document.getElementById("mudar-cor");
botaoCor.addEventListener("click", function () {
    const cores = ["#f4f4f4", "#dbeafe", "#ffe4e6", "#fef9c3", "#dcfce7"];
    const corAtual = document.body.style.backgroundColor;
    let novaCor;

    do {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    } while (novaCor === corAtual);

    document.body.style.backgroundColor = novaCor;
});

//10
// Cálculo de IMC
const botaoIMC = document.getElementById("calcular-imc");

botaoIMC.addEventListener("click", function () {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado-imc");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos de peso e altura.";
        resultado.style.color = "red";
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau 1";
    else if (imc < 39.9) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3 (mórbida)";

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
    resultado.style.color = "green";
});
