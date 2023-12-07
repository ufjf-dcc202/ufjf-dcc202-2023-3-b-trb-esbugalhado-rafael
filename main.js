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


