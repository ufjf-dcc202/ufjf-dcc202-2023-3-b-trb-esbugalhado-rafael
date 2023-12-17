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

}

function turnoOponente(){ 
    valorDadoOponente = Math.floor(Math.random()*6)+1;
}

function rodarDado(){
    let resultado = Math.floor(Math.random()*6)+1;
    document.getElementById('valor-dado').innerText = resultado;
    return resultado;
}