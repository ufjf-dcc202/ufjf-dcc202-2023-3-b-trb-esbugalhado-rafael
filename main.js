// Rodada do Jogador

let jogadorAtual = "jogador";

// Rolagem de Dado

let resultadoDado = 0;
alert ('Sua vez, role um dado');

function rolarDado(){
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log('Você rolou no dado:', resultadoDado);
    if (jogadorAtual === "jogador") {
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
            return;
        }
    }

    // Se a coluna estiver completa, mostra mensagem pedindo para escolher outra coluna
    alert('Coluna completa. Escolha outra coluna.');
}
document.getElementById('rodarDado').addEventListener('click', rolarDado);

// Rodada do Oponente

if (jogadorAtual === oponente){
    alert('Vez do oponente!');
    let rolagemOponete = rolarDadoOpo()
    alert ('O oponente rolou no dado: ',rolagemOponete);
    let colunaOponente = Math.floor(Math.random() * 3) + 1;
    escolherColuna(colunaOponente);
    jogadorAtual = "jogador";
}

function rolarDadoOpo {
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    console.log('O oponente rolou no dado:', resultadoDado);
}

