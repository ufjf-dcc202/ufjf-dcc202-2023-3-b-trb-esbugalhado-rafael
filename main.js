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
let colunaEscolhida;

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
    valorDado = resultado;
    return resultado;
}

function encontrarEspaço(coluna){
    var elementos = coluna.getElementById('div');

    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].innerText.trim() === ""){
            elementos[i].innerText = valorDado;
            console.log("Resultado armazenado na coluna: " + coluna.innerText);
            return;
        } else {
            console.log("Nenhum elemento vazio encontrado na coluna");
            alert("Coluna cheia, escolha outra");
        }
    }

}