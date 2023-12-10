const jogador = {
    tabuleiro: Array(9).fill(null), 
    pontosTotais: 0
};

const oponente = {
    tabuleiro: Array(9).fill(null), 
    pontosTotais: 0
};

let jogadorAtual = jogador;


// Rolagem de Dados

document.getElementById('rodarDado').addEventListener('click', () => {
    const valorDoDado = rolarDado();
    console.log('Você rolou no dado: ' + valorDoDado);

    posicionarDado(valorDoDado, jogador);

    if (checarGameOver(jogadorAtual)){
        checarGameOver(oponente);
        checarVencedor(jogador, oponente);
        resetarJogo();
    } else {
        jogadorAtual = oponente;
        acaoDoOponente();
    }
});

// Funções 

// - Rolar o dado

function rolarDado(){
    return Math.floor(Math.random()*6)+1;
}

// -Colocar Dados nas Colunas


function posicionarDado (valorDoDado, jogador) {
    const escolherColuna = prompt('Seu valor é ' +valorDoDado+ '. Escolha uma coluna (1-3):');
        if (escolherColuna === 1) {
            if (jogador.tabuleiro[0] === null) {
                jogador.tabuleiro[0] = valorDoDado;
            } else if (jogador.tabuleiro[3] === null) {
                jogador.tabuleiro[3] = valorDoDado;    
            } else if (jogador.tabuleiro[6] === null) {
                jogador.tabuleiro[6] = valorDoDado;   
            } else {
                alert('Coluna já preenchida, escolha outra');
            }
        } else if (escolherColuna === 2) {
            if (jogador.tabuleiro[1] === null) {
                jogador.tabuleiro[1] = valorDoDado;    
            } else if (jogador.tabuleiro[4] === null) {
                jogador.tabuleiro[4] = valorDoDado;    
            } else if (jogador.tabuleiro[7] === null) {
                jogador.tabuleiro[7] = valorDoDado;   
            } else {
                alert('Coluna já preenchida, escolha outra');
            }
        } else if (escolherColuna === 3) {
            if (jogador.tabuleiro[2] === null) {
                jogador.tabuleiro[2] = valorDoDado;    
            } else if (jogador.tabuleiro[5] === null) {
                jogador.tabuleiro[5] = valorDoDado;    
            } else if (jogador.tabuleiro[8] === null) {
                jogador.tabuleiro[8] = valorDoDado;   
            } else {
                alert('Coluna já preenchida, escolha outra');
            }
        } else if (escolherColuna <= 0 && escolherColuna >=2) {
            alert('Escolha inválida ou coluna já preenchida. Escolha outra.');
        }


    oponente.tabuleiro = oponente.tabuleiro.map((valor,index) => (valor === valorDoDado && index % 3 === escolherColuna ? null : valor));
    
    jogador.pontosTotais += calcularPontos(jogador.tabuleiro, escolherColuna);
    atualizarInterface();

    if (checarGameOver(jogador)) {
        checarGameOver(oponente);
        checarVencedor(jogador, oponente);
        resetarJogo();
    } else {
        jogadorAtual = jogador === jogador ? oponente : jogador; 
    }
}



// -Bot oponente

function acaoDoOponente(){
    const valorDoDado = rolarDado();
    console.log('O oponente rodou no dado: '+valorDoDado);

    const escolherColuna2 = Math.floor(Math.random()*3)+1;
    
    if (escolherColuna2 === 1) {
        if (oponente.tabuleiro[0] === null) {
            oponente.tabuleiro[0] = valorDoDado;
        } else if (oponente.tabuleiro[3] === null) {
            oponente.tabuleiro[3] = valorDoDado;    
        } else if (oponente.tabuleiro[6] === null) {
            oponente.tabuleiro[6] = valorDoDado;   
        } else {
            alert('Coluna já preenchida, escolha outra');
    }
    } else if (escolherColuna2 === 2) {
        if (oponente.tabuleiro[1] === null) {
            oponente.tabuleiro[1] = valorDoDado;    
        } else if (oponente.tabuleiro[4] === null) {
            oponente.tabuleiro[4] = valorDoDado;    
        } else if (oponente.tabuleiro[7] === null) {
            oponente.tabuleiro[7] = valorDoDado;   
        } else {
            alert('Coluna já preenchida, escolha outra');
        }
    } else if (escolherColuna2 === 3) {
        if (oponente.tabuleiro[2] === null) {
            oponente.tabuleiro[2] = valorDoDado;    
        } else if (oponente.tabuleiro[5] === null) {
            oponente.tabuleiro[5] = valorDoDado;    
        } else if (oponente.tabuleiro[8] === null) {
            oponente.tabuleiro[8] = valorDoDado;   
        } else {
            alert('Coluna já preenchida, escolha outra');
        }
    }

    if (checarGameOver(oponente)){
        checarGameOver(jogador);
        checarVencedor(jogador, oponente);
        resetarJogo();
    } else {
        jogadorAtual = jogador;
    }
}

// -Calcular Pontos

function calcularPontos (tabuleiro, escolherColuna) {
    const valorDaColuna = [tabuleiro[escolherColuna], tabuleiro[escolherColuna + 3], tabuleiro[escolherColuna + 6]];
    const mapeamento = valorDaColuna.reduce((map, valor) => {
        if (valor !== null) {
            map[valor] = (map[valor]||0) +1;
        }
        return map;
    }, {});

    let pontos = 0;

    Object.keys(mapeamento).forEach(valor => {
        const contagem = mapeamento[valor];

        if (contagem === 1){
            pontos += parseInt(valor);
        } else if (contagem === 2){
            pontos += parseInt(valor) * 2;
        } else if (contagem === 3){
            pontos += parseInt(valor) * 3;
        }
    });

    return pontos;
}

// -Atualizando Interface

function atualizarInterface(){
    atualizarTabuleiro(jogador);
    atualizarTabuleiro(oponente);
}

function atualizarTabuleiro(jogador){
    const tab = document.getElementById(jogador === jogador ? 'tabuleiro' : 'tabOponente');
    tab.innerHTML = '';

    jogador.tabuleiro.forEach((valor, index) =>{
        const celula = document.createElement('div');
        celula.textContent = valor !== null ? valor : '';
        tab.appendChild(celula);
    });
}


// -Fim de Jogo e Reset

function checarGameOver(jogador){
    return jogador.tabuleiro.every(valor => valor !==null);
}

function checarVencedor(jogador, oponente){
    if (jogador.pontosTotais > oponente.pontosTotais){
        alert('Você venceu com '+jogadorAtual.pontosTotais+' pontos.'); 
    } else if (jogador.pontosTotais < oponente.pontosTotais){
        alert('O oponente venceu com '+jogadorAtual.pontosTotais+' pontos.');
    } else {
        alert('Empate!');
    }
}

function resetarJogo(){
    jogador.tabuleiro = Array(9).fill(null);
    jogador.pontosTotais = 0;
    oponente.tabuleiro = Array(9).fill(null);
    oponente.pontosTotais = 0;
    jogadorAtual = jogador;
    atualizarInterface();
}

