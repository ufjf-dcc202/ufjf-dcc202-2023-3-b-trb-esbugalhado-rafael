// - - - Variaveis

let jogador;
let oponente;
let jogadorAtual = jogador;
let valorDado;
let valorDadoOponente;
let valorPosição;
let valorColuna;
let valorTotalJogador;
let valorTotalOponente;
let gameOver = false;
let colunaEscolhida;
let colunaCheia = false;


// - - - Jogo



// - - - Funções

function turnoJogador(){
    document.getElementById('rolar-dado').addEventListener('click', rodarDado);
    console.log('Valor do dado do jogador:' + valorDado);
    document.getElementsById('coluna-jogador').addEventListener('click', encontrarEspaço);

    jogadorAtual = oponente;
}

function turnoOponente(){ 
    valorDadoOponente = Math.floor(Math.random()*6)+1;
    console.log('Valor do dado do oponente:' + valorDadoOponente)
    var numeroAleatorio = Math.floor(Math.random()*3);
    var colunaSelecionada = document.getElementsById('coluna-oponente')[numeroAleatorio];
    encontrarEspaço(colunaSelecionada);

    jogadorAtual = jogador;
}

function rodarDado(){
    let resultado = Math.floor(Math.random()*6)+1;
    document.getElementById('valor-dado').innerText = resultado;
    valorDado = resultado;
    return resultado;
}

function encontrarEspaço(coluna){
    var elementos = coluna.getElementById('div');
    while (colunaCheia === false) {
        for (var i = 0; i < elementos.length; i++) {
            if (elementos[i].innerText.trim() === ""){
                elementos[i].innerText = valorDado;
                console.log("Resultado armazenado na coluna: " + coluna.innerText);
                return;
            }     
        }
        console.log("Nenhum elemento vazio encontrado na coluna");
        alert("Coluna cheia, escolha outra");
        colunaCheia = true;
    }
    colunaCheia = false;
}

function checarGameOver(){
    if (jogadorAtual === jogador) {
        var colunas = document.getElementById('coluna-jogador');

        for (var i = 0; i < colunas.length; i++) {
            var elementos = colunas[i].getElementsByTagName('div');

            for (var j = 0; j < elementos.length; j++) {
                if (elementos[j].innerText.trim() === ""){
                    console.log("A coluna " + (i+1) + " não está cheia.");
                    return false;
                }
            }
        }
        console.log("Todas as colunas do " + jogadorAtual + " estão cheias.");
        return true;
    } else {
        var colunas = document.getElementById('coluna-oponente');

        for (var i = 0; i < colunas.length; i++) {
            var elementos = colunas[i].getElementsByTagName('div');

            for (var j = 0; j < elementos.length; j++) {
                if (elementos[j].innerText.trim() === ""){
                    console.log("A coluna " + (i+1) + " do oponente não está cheia.");
                    return false;
                }
            }
        }
        console.log("Todas as colunas do " + jogadorAtual + " estão cheias.");
        return true;
    }
}