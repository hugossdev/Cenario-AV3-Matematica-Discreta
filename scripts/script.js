// Referência ao elemento de áudio
const audioComecar = document.getElementById('audioComecar');

// Referência ao botão
const botaoStart = document.getElementById('botaoStart');


// Função Principal que Inicia a Música e o Jogo
function iniciarJogoEAudio(event) {
    // Previne a navegação imediata do link <a>
    event.preventDefault(); 
    
    // Desabilita o botão para evitar cliques duplos durante a transição
    if (botaoStart) {
        botaoStart.style.pointerEvents = 'none';
        botaoStart.innerHTML = 'Carregando...'; // Feedback visual
    }

    // 1. LÓGICA DE ÁUDIO
    if (audioComecar) {
        // Tenta dar play no áudio
        const playPromise = audioComecar.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Áudio iniciado com sucesso
                console.log("Áudio de transição iniciado.");
            }).catch(error => {
                // Isso pode ocorrer se o áudio não puder ser carregado.
                console.error("Erro ao tentar reproduzir áudio:", error);
            });
        }
    }
    
    // 2. LÓGICA DE NAVEGAÇÃO
    // Aguarda um pequeno período (ex: 1000ms) para que o som seja ouvido antes de mudar a página.
    setTimeout(() => {
        window.location.href = "pages/game.html";
    }, 3000); // <-- Tempo que o áudio vai tocar (1 segundo)
}


// --- INICIALIZAÇÃO E LISTENERS ---

if (botaoStart) {
    // Adiciona o listener único ao botão "Começar"
    // Note que agora usamos a função iniciarJogoEAudio com preventDefault
    botaoStart.addEventListener('click', iniciarJogoEAudio); 
}

// ... (Resto do seu código JS, se houver) ...