// Variaveis jogador
let colunasDoJogador = [
    [0, 0, 0],
    [0, 0, 0]
    [0, 0, 0]
];
let somaColunasJogador = [0, 0, 0];
let somaTotalJogador = 0;
let tabuleiroDoJogador;
let somaTxtJogador;
let pontuacaoFileiraJogador;
let somaTotalTxtJogador;

// Funções do jogador

function defTabuleiroDoJogador(tabuleiro){
    tabuleiroDoJogador = tabuleiro;
}

function defSomaTxtJogador(texto){
    somaTxtJogador = texto;
}

function defPontuacaoFileiraJogador (pontuacao){
    pontuacaoFileiraJogador = pontuacao;
}

function defSomaTotalTxtJogador(texto){
    somaTotalTxtJogador = texto;
}




// Variaveis Oponente
let colunasDoOponente = [
    [0, 0, 0],
    [0, 0, 0]
    [0, 0, 0]
];
let somaColunasOponente = [0, 0, 0];
let somaTotalOponente = 0;
let tabuleiroDoOponente;
let somaTxtOponente;
let pontuacaoFileiraOponente;
let somaTotalTxtOponente;

// Funções do Oponente

function defTabuleiroDoOponente(tabuleiro){
    tabuleiroDoOponente = tabuleiro;
}

function defSomaTxtOponente(texto){
    somaTxtOponente = texto;
}

function defPontuacaoFileiraOponente (pontuacao){
    pontuacaoFileiraOponente = pontuacao;
}

function defSomaTotalTxtOponente(texto){
    somaTotalTxtOponente = texto;
}


// Variaveis do Jogo

let valorDoDado = 0;
let valorDoDadoOpo = 0;
let gameOver = false;
let botoes;


// Funções do Jogo

function defBotoes(botoes){
    botoes = btns;
}

function rolarDado(){
    return Math.floor(Math.random()*6)+1;
}

function armazenarDado(){
    valorDoDado = rolarDado();
}

function imprimirTabuleiro(tabuleiro, casas){
    for (let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            let t = i * 3 + j;
            if(casas[i][j] == 0){
                tabuleiro[t].src= "";
            } else {
                tabuleiro[t].src= valorDoDado;
            }
        }
    }
}

function imprimirNoTabuleiro (tabuleiro, coluna, valor, casa){
    if(coluna < 0 || coluna > 2){
        console.log("Coluna inválida");
        return false;
    }
    let linha = 0;
    console.log(coluna);
    while(tabuleiro[coluna][linha] !== 0 && linha < 3){
        linha++;
    }
    if(linha <=2 && linha >=0){
        tabuleiro[coluna][linha] = valor;
        casa[coluna*3+linha].classList.add("posicionar");
        setTimeout(() => reiniciaPosicionar(casa[coluna*3+linha]), 500);
        return true;
    }
    console.log("Coluna cheia");
    return false;
}

function reiniciaPosicionar(casa){
    casa.classList.remove("posicionar");
}

function confereRepeticao(coluna, valor){
    let repeticoes = 0;
    for(let i=0; i<3; i++){
        if(coluna[i] == valor){
            repeticoes++;
        }
    }
    return repeticoes;
}

function somaDaColuna(coluna){
    let soma = 0;
    for(let i = 0; i < 3; i++){
        soma += coluna[i] * confereRepeticao(coluna, coluna[i]);
    }
    return soma;
}

function atualizaSomaTxt(indice, somaTxt, colunas, valorSoma){
    let soma = somaDaColuna(colunas[indice]);
    valorSoma[indice] = soma;
    somaTxt[indice].textContent = soma;
}


export {}