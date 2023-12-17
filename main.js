// - - - Variaveis

let jogador;
let oponente;
let jogadorAtual;
let valorDado;
let valorDadoOponente;
let valorPosição;
let valorColuna;
let valorTotalJogador;
let valorTotalOponente;
let gameOver = false;

// - - - Jogo


// - - - Funções

function turnoJogador(){
    document.getElementById('rolar-dado').addEventListener('click', rodarDado);
    console.log('Valor do dado do jogador:' + valorDado);
}

function turnoOponente(){ 
    valorDadoOponente = Math.floor(Math.random()*6)+1;
    console.log('Valor do dado do oponente:' + valorDadoOponente)
}

function rodarDado(){
    let resultado = Math.floor(Math.random()*6)+1;
    document.getElementById('valor-dado').innerText = resultado;
    return resultado;
}