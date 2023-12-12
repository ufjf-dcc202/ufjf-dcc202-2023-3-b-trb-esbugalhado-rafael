document.addEventListener('DOMContentLoaded', function () {
    const tabuleiroJogador = document.getElementById('tabuleiro-jogador');
    const tabuleiroOponente = document.getElementById('tabuleiro-oponente');
  
    function criarTabuleiro(tabuleiro) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const celula = document.createElement('div');
          celula.classList.add('celula');
          celula.setAttribute('data-linha', i);
          celula.setAttribute('data-coluna', j);
          tabuleiro.appendChild(celula);
        }
      }
    }
  
    criarTabuleiro(tabuleiroJogador);
    criarTabuleiro(tabuleiroOponente);
  });
  