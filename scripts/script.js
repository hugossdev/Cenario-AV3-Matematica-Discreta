const audioComecar = document.getElementById('audioComecar');

const botaoStart = document.getElementById('botaoStart');

const botaoCreditos = document.getElementById('botaoCreditos');

const FLASH_DURATION = 450;
const NAVIGATION_DELAY = 3000;

function iniciarJogoEAudio(event) {
    event.preventDefault();

    if (botaoStart) {
        botaoStart.style.pointerEvents = 'none';

        botaoStart.classList.add('is-flashing');

        setTimeout(() => {
            botaoStart.classList.remove('is-flashing');
        }, FLASH_DURATION);

        botaoStart.innerHTML = 'Carregando...';
    }

    if (audioComecar) {
        const playPromise = audioComecar.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log("Áudio de transição iniciado.");
            }).catch(error => {
                console.error("Erro ao tentar reproduzir áudio:", error);
            });
        }
    }

    setTimeout(() => {
        window.location.href = "pages/game.html";
    }, NAVIGATION_DELAY);
}


if (botaoStart) {
    botaoStart.addEventListener('click', iniciarJogoEAudio);
}

if (botaoCreditos) {
    botaoCreditos.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = "../pages/creditos.html";
    });
}