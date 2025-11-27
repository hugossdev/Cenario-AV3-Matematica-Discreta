import PerguntasClass from "./perguntas.js";

const componentesDoPc = [
    "Gabinete",
    "Fonte",
    "SSD",
    "Memória RAM",
    "Placa-Mãe",
    "Processador",
    "Cooler",
    "Monitor",
    "Teclado e Mouse",
    "Placa de Vídeo"
];


const audioFundoGame = document.getElementById('audioFundoGame');
const audioSelecao = document.getElementById('audioSelecao');
const audioHeartbeat = document.getElementById('audioHeartbeat');
const audioCerta = document.getElementById('audioCerta');
const audioAplausos = document.getElementById('audioAplausos');
const audioErrada = document.getElementById('audioErrada');

function iniciarMusicaFundo() {
    if (audioFundoGame) {
        const playPromise = audioFundoGame.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
            }).catch(error => {
                console.warn("A reprodução de áudio de fundo foi bloqueada: ", error);
            });
        }
    }
}

function tocarAudioSelecao() {
    if (audioSelecao) {
        audioSelecao.currentTime = 0;
        audioSelecao.play().catch(error => {
            console.warn("Falha ao tocar áudio de seleção: ", error);
        });
    }
}

function tocarAudioHeartbeat() {
    if (audioHeartbeat) {
        audioHeartbeat.currentTime = 0;
        audioHeartbeat.loop = true;
        audioHeartbeat.play().catch(error => {
            console.warn("Falha ao tocar áudio Heartbeat: ", error);
        });
    }
}

function pararAudioHeartbeat() {
    if (audioHeartbeat) {
        audioHeartbeat.pause();
        audioHeartbeat.currentTime = 0;
        audioHeartbeat.loop = false;
    }
}

function tocarAudioCerta() {
    if (audioCerta) {
        audioCerta.currentTime = 0;
        audioCerta.play().catch(error => {
            console.warn("Falha ao tocar áudio de resposta Certa: ", error);
        });
    }
}

function tocarAudioAplausos() {
    if (audioAplausos) {
        audioAplausos.currentTime = 0;
        audioAplausos.play().catch(error => {
            console.warn("Falha ao tocar áudio de Aplausos: ", error);
        });
    }
}

function tocarAudioErrada() {
    if (audioErrada) {
        audioErrada.currentTime = 0;
        audioErrada.play().catch(error => {
            console.warn("Falha ao tocar áudio de resposta Errada: ", error);
        });
    }
}

const questionText = document.querySelector(".question-text");
const answerButtons = document.querySelectorAll(".answer-btn");
const questionBox = document.querySelector(".question-box");
const answersList = document.querySelector(".answers-list");

const feedbackModal = document.getElementById("feedback-modal");
const userChoiceText = document.getElementById("user-choice");
const correctChoiceText = document.getElementById("correct-choice");
const explanationText = document.getElementById("explanation-text");
const startNewGameBtn = document.getElementById("start-new-game-btn");

const confirmarBtn = document.querySelectorAll(".confirm-btn");
const actionsDiv = document.querySelector(".actions");

const btnSkip = document.querySelector(".btn-skip");

const skipConfirmModal = document.getElementById("skip-confirm-modal");
const confirmSkipBtn = document.getElementById("confirm-skip-btn");
const cancelSkipBtn = document.getElementById("cancel-skip-btn");


let atual = 0;
const MAX_PERGUNTAS = 10;
let acertosTotais = 0;
let selectedIndex = null;
let isSkipUsed = false;


let cartasUsadas = false;
const modalCartas = document.getElementById('modal-cartas');
const sortearBtn = document.getElementById('sortear-btn');
const btnCartas = document.querySelector('.btn-cards');
const cardElements = document.querySelectorAll('.card-option');
const closeCardsModalBtn = document.getElementById('close-cards-modal');


let intervaloAnimacao;
const resultadosSorteio = [0, 1, 2, 3];


function atualizarPremio() {
    const imgPremio = document.getElementById("premio-img");
    const textoPremio = document.getElementById("premio-texto");

    if (!imgPremio || !textoPremio) return;

    const proximoPremio = acertosTotais + 1;
    const numeroPremio = Math.min(proximoPremio, componentesDoPc.length);

    setTimeout(() => {

        imgPremio.style.opacity = "0";
        textoPremio.style.opacity = "0";

        setTimeout(() => {

            imgPremio.src = `../images/premio${numeroPremio}.png`;

            const nomeComponente = componentesDoPc[numeroPremio - 1];

            textoPremio.textContent = `Pergunta ${numeroPremio}: Valendo ${nomeComponente}!`;

            imgPremio.style.opacity = "1";
            textoPremio.style.opacity = "1";

        }, 1000);

    }, 8000);
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const perguntas = PerguntasClass.todasAsPerguntas;
embaralharArray(perguntas);

startNewGameBtn.addEventListener('click', () => {
    window.location.href = "../index.html";
});


function handleSelection(clickedButton) {
    selectedIndex = parseInt(clickedButton.dataset.indice);
    tocarAudioSelecao();
}


function handleConfirmation() {
    if (selectedIndex !== null) {
        audioFundoGame.pause();
        tocarAudioHeartbeat();
        verificarResposta(selectedIndex);
    }
}

function skipQuestionPrompt() {
    if (isSkipUsed) {
        alert("Você só pode pular uma pergunta por jogo!");
        return;
    }

    if (skipConfirmModal) {
        skipConfirmModal.style.display = 'flex';
        actionsDiv.style.pointerEvents = 'none';
    }
}


function executeSkip() {
    if (skipConfirmModal) {
        skipConfirmModal.style.display = 'none';
        actionsDiv.style.pointerEvents = 'auto';
    }

    isSkipUsed = true;

    if (btnSkip) {
        btnSkip.disabled = true;
        btnSkip.classList.add('used');
    }

    atual++;

    carregarPergunta();
}

function cancelSkip() {
    if (skipConfirmModal) {
        skipConfirmModal.style.display = 'none';
        actionsDiv.style.pointerEvents = 'auto';
    }
}


function exibirFeedbackErro(pergunta, indiceUsuario, indiceCorreto) {
    userChoiceText.innerHTML = pergunta.opcoes[indiceUsuario];
    correctChoiceText.innerHTML = pergunta.opcoes[indiceCorreto];
    explanationText.innerHTML = pergunta.explicacao;
    feedbackModal.style.display = 'flex';
}


function abrirModalCartas() {
    if (cartasUsadas || btnCartas.disabled) return;

    if (intervaloAnimacao) {
        clearInterval(intervaloAnimacao);
    }

    cardElements.forEach(card => card.classList.remove('selected-card'));

    sortearBtn.disabled = false;
    sortearBtn.textContent = 'Sortear';

    modalCartas.style.display = 'flex';
    actionsDiv.style.pointerEvents = 'none';
}

function fecharModalCartas() {
    modalCartas.style.display = 'none';
    actionsDiv.style.pointerEvents = 'auto';

    if (intervaloAnimacao) {
        clearInterval(intervaloAnimacao);
    }
}


function aplicarEliminacao(numEliminacoes) {
    const perguntaAtual = perguntas[atual];
    const correta = perguntaAtual.correta;

    let incorretas = [0, 1, 2, 3].filter(i => i !== correta);

    embaralharArray(incorretas);

    const aEliminar = incorretas.slice(0, numEliminacoes);

    aEliminar.forEach(indice => {
        const btn = document.querySelector(`.answer-btn[data-indice="${indice}"]`);
        if (btn) {
            btn.classList.add('eliminada');
            btn.disabled = true;
        }
    });
}

function sortearCarta() {
    sortearBtn.disabled = true;
    sortearBtn.textContent = 'Sorteando...';
    btnCartas.disabled = true;
    btnCartas.classList.add('usada');
    cartasUsadas = true;

    cardElements.forEach(c => c.classList.remove('selected-card'));

    let currentIndex = 0;
    const tempoDeGiro = 100;

    intervaloAnimacao = setInterval(() => {
        cardElements[currentIndex].classList.remove('selected-card');

        currentIndex = (currentIndex + 1) % cardElements.length;

        cardElements[currentIndex].classList.add('selected-card');

    }, tempoDeGiro);

    setTimeout(() => {
        clearInterval(intervaloAnimacao);

        const indiceSorteado = Math.floor(Math.random() * resultadosSorteio.length);
        const numEliminacoes = resultadosSorteio[indiceSorteado];

        cardElements.forEach(c => c.classList.remove('selected-card'));
        cardElements[indiceSorteado].classList.add('selected-card');

        sortearBtn.textContent = `Você eliminou ${numEliminacoes} opções!`;

        setTimeout(() => {
            aplicarEliminacao(numEliminacoes);
            fecharModalCartas();
        }, 1500);

    }, 3000);
}

function verificarResposta(indiceUsuario) {
    const perguntaAtual = perguntas[atual];
    const correta = perguntaAtual.correta;

    const clickedButton = document.querySelector(`.answer-btn[data-indice="${indiceUsuario}"]`);

    if (clickedButton) {
        clickedButton.classList.add('selected');
        clickedButton.classList.add('flash-processing');
    }

    actionsDiv.style.pointerEvents = 'none';
    answerButtons.forEach(btn => btn.disabled = true);
    if (btnSkip) btnSkip.disabled = true;

    setTimeout(() => {
        pararAudioHeartbeat();

        if (clickedButton) {
            clickedButton.classList.remove('flash-processing');
            clickedButton.classList.remove('selected');
        }

        const btnCorreto = document.querySelector(`.answer-btn[data-indice="${correta}"]`);


        if (indiceUsuario === correta) {

            if (clickedButton) clickedButton.classList.add("correct");

            acertosTotais++;

            atualizarPremio();

            tocarAudioCerta();

            audioCerta.onended = () => {
                tocarAudioAplausos();
                audioAplausos.onended = () => {
                    setTimeout(() => {
                        if (acertosTotais >= MAX_PERGUNTAS) {
                            audioFundoGame.pause();
                            window.location.href = "../pages/endgame.html";
                        } else {
                            atual++;
                            carregarPergunta();
                        }
                        audioCerta.onended = null;
                        audioAplausos.onended = null;
                    }, 1000);
                };
            };

        }

        else {

            if (clickedButton) clickedButton.classList.add("incorrect");
            if (btnCorreto) btnCorreto.classList.add("correct");

            tocarAudioErrada();

            setTimeout(() => {
                exibirFeedbackErro(perguntaAtual, indiceUsuario, correta);
            }, 3500);
        }

    }, 2000);

    selectedIndex = null;
}


function aplicarAnimacaoPergunta() {
    questionBox.classList.remove('animate-in');
    answersList.classList.remove('animate-in');
    answerButtons.forEach(btn => btn.classList.remove('animate-in'));

    void questionBox.offsetWidth;
    answerButtons.forEach(btn => void btn.offsetWidth);

    questionBox.classList.remove('hide-text');

    requestAnimationFrame(() => {
        questionBox.classList.add('animate-in');
        answersList.classList.add('animate-in');
        answerButtons.forEach(btn => btn.classList.add('animate-in'));
    });
}


function carregarPergunta() {
    if (atual >= perguntas.length) {
        audioFundoGame.pause();
        window.location.href = "../pages/endgame.html";
        return;
    }

    const q = perguntas[atual];

    feedbackModal.style.display = 'none';
    actionsDiv.style.pointerEvents = 'auto';

    if (cartasUsadas) {
        btnCartas.disabled = true;
        btnCartas.classList.add('usada');
    } else {
        btnCartas.disabled = false;
        btnCartas.classList.remove('usada');
    }

    if (btnSkip) {
        if (isSkipUsed) {
            btnSkip.disabled = true;
            btnSkip.classList.add('used');
        } else {
            btnSkip.disabled = false;
            btnSkip.classList.remove('used');
            btnSkip.querySelector('span').textContent = '🏃 PULAR';
        }
    }


    answerButtons.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove("selected", "correct", "incorrect", "eliminada");
    });
    selectedIndex = null;


    audioFundoGame.play();

    questionBox.classList.add('hide-text');

    setTimeout(() => {
        questionText.innerHTML = q.pergunta;

        answerButtons.forEach((btn, index) => {
            btn.querySelector(".text").innerHTML = q.opcoes[index];
            btn.dataset.indice = index;
        });

        aplicarAnimacaoPergunta();

    }, 200);
}


btnCartas.addEventListener('click', abrirModalCartas);
sortearBtn.addEventListener('click', sortearCarta);

if (closeCardsModalBtn) {
    closeCardsModalBtn.addEventListener('click', fecharModalCartas);
}

if (modalCartas) {
    modalCartas.addEventListener('click', (event) => {
        if (event.target === modalCartas) {
            fecharModalCartas();
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalCartas.style.display !== 'none') {
        fecharModalCartas();
    }
});


if (btnSkip) {
    btnSkip.addEventListener('click', skipQuestionPrompt);
}

if (confirmSkipBtn) {
    confirmSkipBtn.addEventListener('click', executeSkip);
}
if (cancelSkipBtn) {
    cancelSkipBtn.addEventListener('click', cancelSkip);
}

if (skipConfirmModal) {
    skipConfirmModal.addEventListener('click', (event) => {
        if (event.target === skipConfirmModal) {
            cancelSkip();
        }
    });
}


answerButtons.forEach(btn => {

    btn.addEventListener('click', function (e) {

        if (!e.target.classList.contains('confirm-btn') && !btn.disabled) {

            answerButtons.forEach(button => button.classList.remove('selected'));

            this.classList.add('selected');

            handleSelection(this);
        }
    });

    const confirmButton = btn.querySelector('.confirm-btn');
    if (confirmButton) {
        confirmButton.addEventListener('click', handleConfirmation);
    }
});


carregarPergunta();
iniciarMusicaFundo();