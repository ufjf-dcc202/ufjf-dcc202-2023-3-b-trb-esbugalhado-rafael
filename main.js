const jogador{
};

const oponente{
};

// Definição de jogador

const jogadorAtual = jogador;

// Rolagem de Dado

let resultadoDado = 0;

function rolarDado(){
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log(jogadorAtual+' rolou no dado:', resultadoDado);
}
document.getElementById('rodarDado').addEventListener('click', rolarDado);