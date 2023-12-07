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
    const valorDoDado = Math.floor(Math.random() * 6) + 1;
    console.log('Você rolou no dado: ${valorDoDado}');
});

// Funções 

// -Colocar Dados nas Colunas

function posicionarDado (valorDoDado, jogador) {
    const valorDaPosicao = prompt('Escolha uma coluna (1-3):') - 1;

    if (jogador.tabuleiro[valorDaPosicao] === null){
        jogador.tabuleiro[valorDaPosicao] = valorDoDado;

        // Remover dado do adversario

        oponente.tabuleiro = oponente.tabuleiro.map(valor => (valor === valorDoDado ? null : valor));

        // Atualizando pontos
        jogador.pontosTotais += calcularPontos(jogador.tabuleiro, valorDaPosicao);
        atualizarInterface();
    } else {
        alert('Essa coluna já foi preenchida. Escolha outra.');
    }
}

// -Calcular Pontos

function calcularPontos (tabuleiro, valorDaPosicao) {
    const valorDaColuna = [tabuleiro[valorDaPosicao], tabuleiro[valorDaPosicao + 3], tabuleiro[valorDaPosicao + 6]];
    const mapeamento = valorDaColuna.reduce((map, valor) => {
        if (valor !== null) {
            map[valor] = (map[valor]||0) +1;
        }
        return map;
    }, {});

    let pontos = 0;

    Object.keys(mapeamento).forEach(value => {
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


