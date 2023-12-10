// Rodada do Jogador

const jogadorAtual = jogador;

// Rolagem de Dado

let resultadoDado = 0;

function rolarDado(){
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log(jogadorAtual+' rolou no dado:', resultadoDado);

    alert(`Você rolou um ${resultadoDado}. Escolha uma coluna para colocar o valor.`);

    document.getElementById('C1').addEventListener('click', function() {
        escolherColuna(1);
    });
    document.getElementById('C2').addEventListener('click', function() {
        escolherColuna(2);
    });
    document.getElementById('C3').addEventListener('click', function() {
        escolherColuna(3);
    });
}

function escolherColuna(coluna) {
    let colunaId = "C" + coluna;

    // Encontrar o primeiro espaço vazio na coluna
    let quadradosColuna = document.getElementById(colunaId).getElementsByClassName('quadrado');
    for (let i = 0; i < quadradosColuna.length; i++) {
        if (!quadradosColuna[i].innerText.trim()) {
            // Encontrou um espaço vazio, armazenar o resultado do dado aqui
            quadradosColuna[i].innerText = resultadoDado;

            // Remover os ouvintes de evento após escolher a coluna
            document.getElementById('C1').removeEventListener('click', function() {
                escolherColuna(1);
            });
            document.getElementById('C2').removeEventListener('click', function() {
                escolherColuna(2);
            });
            document.getElementById('C3').removeEventListener('click', function() {
                escolherColuna(3);
            });

            // Troca para o oponente
            jogadorAtual = "oponente";
            return;
        }
    }

    // Se a coluna estiver completa, mostra mensagem pedindo para escolher outra coluna
    alert('Coluna completa. Escolha outra coluna.');
}
document.getElementById('rodarDado').addEventListener('click', rolarDado);

// Rodada do Oponente

