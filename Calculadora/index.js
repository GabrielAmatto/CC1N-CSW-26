let ano = document.getElementById("ano");

let botao = document.getElementById("botao");

let resultado = document.getElementById("resultado");

botao.onclick = function(){

    let anoNascimento = Number(ano.value);

    let data = new Date();

    let anoAtual = data.getFullYear();

    let idade = anoAtual - anoNascimento;

    resultado.innerHTML = "Você tem " + idade + " anos";
}