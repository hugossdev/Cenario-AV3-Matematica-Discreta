// Referência ao elemento de áudio
const audioComecar = document.getElementById('audioComecar');

// Referência ao botão
const botaoStart = document.getElementById('botaoStart');

const botaoCreditos = document.getElementById('botaoCreditos');




// Função Principal que Inicia a Música e o Jogo
function iniciarJogoEAudio(event) {
    event.preventDefault();

    if (botaoStart) {
        botaoStart.style.pointerEvents = 'none';
        botaoStart.innerHTML = 'Carregando...';
    }

    if (audioComecar) {
        const playPromise = audioComecar.play();
        if (playPromise) {
            playPromise.catch(err => console.error(err));
        }
    }

    setTimeout(() => {
        window.location.href = "pages/game.html";
    }, 3000);
}

// Listener do botão Começar
if (botaoStart) {
    botaoStart.addEventListener('click', iniciarJogoEAudio);
}

// 👉 Listener do botão Créditos
if (botaoCreditos) {
    botaoCreditos.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "creditos.html";
    });
}


// --- INICIALIZAÇÃO E LISTENERS ---

if (botaoStart) {
    // Adiciona o listener único ao botão "Começar"
    // Note que agora usamos a função iniciarJogoEAudio com preventDefault
    botaoStart.addEventListener('click', iniciarJogoEAudio); 
}

// ... (Resto do seu código JS, se houver) ...