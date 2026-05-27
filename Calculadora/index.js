let anoInput = document.getElementById("anoInput");

let botaoAno = document.getElementById("botaoAno");

let resultadoAno = document.getElementById("resultadoAno");

botaoAno.onclick = function(){

    let data = new Date();

    let anoAtual = data.getFullYear();

    let idade = anoAtual - anoInput.value;

    resultadoAno.innerHTML = "Você tem " + idade + " anos";
}



let dia = document.getElementById("dia");

let mes = document.getElementById("mes");

let ano = document.getElementById("ano");

let botao = document.getElementById("botao");

let resultado = document.getElementById("resultado");

for(let i = 1; i <= 31; i++){

    dia.innerHTML += "<option>" + i + "</option>";
}

for(let i = 1; i <= 12; i++){

    mes.innerHTML += "<option>" + i + "</option>";
}

for(let i = 2026; i >= 1900; i--){

    ano.innerHTML += "<option>" + i + "</option>";
}

botao.onclick = function(){

    let data = new Date();

    let anoAtual = data.getFullYear();

    let idade = anoAtual - ano.value;

    resultado.innerHTML = "Você tem " + idade + " anos";
}