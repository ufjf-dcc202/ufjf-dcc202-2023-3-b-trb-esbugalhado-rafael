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

function encontrarEspaco (tabuleiro, escolherColuna){
    for (let i = escolherColuna; i < tabuleiro.lenght; i+=3){
        if (tabuleiro[i] === null){
            return i;
        }
    }
    return -1;
}

function posicionarDado (valorDoDado, jogador) {
    let escolherColuna;

    do {
        escolherColuna = prompt('Seu valor é ' +valorDoDado+ '. Escolha uma coluna (1-3):') -1;
        
        if (escolherColuna >= 0 && escolherColuna <=2 && jogador.tabuleiro[escolherColuna] === null){
            break;
        } else {
            alert('Escolha inválida ou coluna já preenchida. Escolha outra.');
        }   
    } while (true);

    const espacoVazio = encontrarEspaco(jogador.tabuleiro, escolherColuna);

    if (espacoVazio === -1){
        alert('Coluna já preenchida. Escolha outra.');
        return;
    }

    jogador.tabuleiro[espacoVazio] = valorDoDado;

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


/*const escolherColuna = prompt('Seu valor é ' +valorDoDado +'. Escolha uma coluna (1-3):') - 1;

    if (jogador.tabuleiro[escolherColuna] === null){
        jogador.tabuleiro[escolherColuna] = valorDoDado;

        // Remover dado do adversario

        oponente.tabuleiro = oponente.tabuleiro.map(valor => (valor === valorDoDado ? null : valor));

        // Atualizando pontos
        jogador.pontosTotais += calcularPontos(jogador.tabuleiro, escolherColuna);
        atualizarInterface();
    } else {
        alert('Essa coluna já foi preenchida. Escolha outra.');
    }*/



// -Bot oponente

function acaoDoOponente(){
    const valorDoDado = rolarDado();
    console.log('O oponente rodou no dado: '+valorDoDado);

    const colunasPossiveis = oponente.tabuleiro.reduce((colunas,valor,indice) => {
        if (valor === null) {
            colunas.push(indice);
        }
        return colunas;
    }, []);

    if (colunasPossiveis.lenght === 0){

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


