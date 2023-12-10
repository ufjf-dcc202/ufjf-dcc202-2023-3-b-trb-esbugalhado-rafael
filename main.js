let pontosC1 = 0;
let pontosC2 = 0;
let pontosC3 = 0;
let pontosCO1 = 0;
let pontosCO2 = 0;
let pontosCO3 = 0;
let pontosJogador = 0;
let pontosOponente = 0;

// Rodada do Jogador

let jogadorAtual = "jogador";


// Rolagem de Dado

let resultadoDado = 0;
alert ('Sua vez, role um dado');

function rolarDado(){
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log('Você rolou no dado:', resultadoDado);
    if (jogadorAtual === "jogador") {
        alert(`Você rolou um ${resultadoDado}. Escolha uma coluna para colocar o valor.`);

        document.getElementById('C1').addEventListener('click', function() {
            escolherColuna(1);
        });
        document.getElementById('C2').addEventListener('click', function() {
            escolherColuna(2);
        });
        document.getElementById('C3').addEventListener('click', function() {
            escolherColuna(3);
        });
    }  
}

function escolherColuna(coluna) {
    let colunaId = "C" + coluna;

    // Encontrar os dados na coluna
    let quadradosColuna = document.getElementById(colunaId).getElementsByClassName('quadrado');
    let dadosColuna = [];
    for (let i = 0; i < quadradosColuna.length; i++) {
        if (quadradosColuna[i].innerText.trim()) {
            dadosColuna.push(parseInt(quadradosColuna[i].innerText.trim()));
        }
    }

    // Calcula os pontos da coluna
    let pontos = 0;
    pontos = calcularPontosColuna(dadosColuna, pontos);

    // Armazena os pontos nas variáveis correspondentes
    if (jogadorAtual === "jogador") {
        if (coluna === 1) pontosC1 = pontos;
        else if (coluna === 2) pontosC2 = pontos;
        else if (coluna === 3) pontosC3 = pontos;

        // Atualiza os pontos totais do jogador
        pontosJogador = pontosC1 + pontosC2 + pontosC3;
    } else {
        if (coluna === 1) pontosCO1 = pontos;
        else if (coluna === 2) pontosCO2 = pontos;
        else if (coluna === 3) pontosCO3 = pontos;

        // Atualiza os pontos totais do oponente
        pontosOponente = pontosCO1 + pontosCO2 + pontosCO3;
    }

    // Remover os ouvintes de evento após escolher a coluna
    if (jogadorAtual === "jogador") {
        document.getElementById('C1').removeEventListener('click', function() {
            escolherColuna(1);
        });
        document.getElementById('C2').removeEventListener('click', function() {
            escolherColuna(2);
        });
        document.getElementById('C3').removeEventListener('click', function() {
            escolherColuna(3);
        });
    }
}


document.getElementById('rodarDado').addEventListener('click', rolarDado);

jogadorAtual = "oponente";

// Rodada do Oponente

if (jogadorAtual === "oponente"){
    alert('Vez do oponente!');
    let rolagemOponete = rolarDadoOpo()
    alert ('O oponente rolou no dado: ',rolagemOponete);
    let colunaOponente = Math.floor(Math.random() * 3) + 1;
    escolherColuna(colunaOponente);
    jogadorAtual = "jogador";
}

function rolarDadoOpo (){
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log('O oponente rolou no dado:', resultadoDado);
}

// Calculando Pontos

function calcularPontosColuna(coluna, pontos) {
    // Calcula os pontos da coluna com base nas regras fornecidas
    let ocorrencias = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < coluna.length; i++) {
        ocorrencias[coluna[i] - 1]++;
    }

    for (let i = 0; i < ocorrencias.length; i++) {
        pontos += ocorrencias[i] * (i + 1);
    }

    return pontos;
}