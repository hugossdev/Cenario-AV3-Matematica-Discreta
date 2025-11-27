// Importa a classe de perguntas
import PerguntasClass from "./perguntas.js";



// -------------------------------------------------------------------
// 🎧 LÓGICA DE ÁUDIO
// -------------------------------------------------------------------

const componentesDoPc = [
    "Gabinete",        // 1
    "Fonte",           // 2
    "SSD",             // 3
    "Memória RAM",     // 4
    "Placa-Mãe",       // 5
    "Processador",     // 6
    "Cooler",          // 7
    "Monitor",         // 8
    "Teclado e Mouse", // 9
    "Placa de Vídeo"   // 10
];


// Referências de Áudio (IDs do game.html)
const audioFundoGame = document.getElementById('audioFundoGame'); 
const audioSelecao = document.getElementById('audioSelecao'); 
const audioHeartbeat = document.getElementById('audioHeartbeat'); 
const audioCerta = document.getElementById('audioCerta');
// 🚩 Referência para audioAplausos
const audioAplausos = document.getElementById('audioAplausos');
const audioErrada = document.getElementById('audioErrada');

// Função para iniciar a música de fundo
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
// -------------------------------------------------------------------


// Referências do DOM
const questionText = document.querySelector(".question-text");
const answerButtons = document.querySelectorAll(".answer-btn");
const questionBox = document.querySelector(".question-box"); 
const answersList = document.querySelector(".answers-list"); 

// Modal de feedback
const feedbackModal = document.getElementById("feedback-modal");
const userChoiceText = document.getElementById("user-choice");
const correctChoiceText = document.getElementById("correct-choice");
const explanationText = document.getElementById("explanation-text");
const startNewGameBtn = document.getElementById("start-new-game-btn");

// Botões de Ação
const confirmarBtn = document.querySelectorAll(".confirm-btn"); 
const actionsDiv = document.querySelector(".actions"); 

// Variáveis de controle
let atual = 0;
const MAX_PERGUNTAS = 20;
let acertosTotais = 0;
let selectedIndex = null;


// -----------------------------------------------------------
// 🔮 FUNÇÃO DO PRÊMIO (10 imagens)
// -----------------------------------------------------------
// NO ARQUIVO: scripts/game.js (Substituir a função existente)

function atualizarPremio() {
    const imgPremio = document.getElementById("premio-img");
    const textoPremio = document.getElementById("premio-texto"); 

    if (!imgPremio || !textoPremio) return;

    // 1. Calcular o número do PRÓXIMO prêmio a ser disputado
    const proximoPremio = acertosTotais + 1;
    const numeroPremio = Math.min(proximoPremio, componentesDoPc.length); 

    // O prêmio ganho fica visível na tela durante o primeiro setTimeout (3 segundos)

    // 1. ESPERA INICIAL (3000ms): O prêmio ganho fica visível
    setTimeout(() => {
        
        // 2. INICIA O FADE-OUT (Imagem e Texto)
        imgPremio.style.opacity = "0";
        textoPremio.style.opacity = "0"; 
        
        // 3. AGUARDA O FADE-OUT (500ms) antes de trocar a imagem e o texto
        setTimeout(() => {
            
            // 4. TROCA DE IMAGEM E TEXTO
            imgPremio.src = `../images/premio${numeroPremio}.png`; 
            
            // Busca o nome do componente (Índice = número do prêmio - 1)
            const nomeComponente = componentesDoPc[numeroPremio - 1]; 
            
            // 🚨 Atualiza o conteúdo do texto
            textoPremio.textContent = `Pergunta ${numeroPremio}: Valendo ${nomeComponente}!`;

            // 5. INICIA O FADE-IN (Imagem e Texto)
            imgPremio.style.opacity = "1";
            textoPremio.style.opacity = "1";
            
        }, 1000); // 500ms: Tempo para o fade-out acontecer
        
    }, 8000); // 3000ms: Tempo de exibição do prêmio ganho
}
// Embaralhar
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Perguntas
const perguntas = PerguntasClass.todasAsPerguntas;
embaralharArray(perguntas);

// Botão novo jogo
startNewGameBtn.addEventListener('click', () => {
    window.location.href = "../index.html";
});


// -------------------------------------------------------------------
// 1. SELEÇÃO DO BOTÃO
// -------------------------------------------------------------------
function handleSelection(clickedButton) {
    selectedIndex = parseInt(clickedButton.dataset.indice);
    tocarAudioSelecao();
}


// -------------------------------------------------------------------
// 2. CONFIRMAR
// -------------------------------------------------------------------
function handleConfirmation() {
    if (selectedIndex !== null) {
        audioFundoGame.pause(); 
        tocarAudioHeartbeat();
        verificarResposta(selectedIndex);
    }
}


// Modal erro
function exibirFeedbackErro(pergunta, indiceUsuario, indiceCorreto) {
    userChoiceText.innerHTML = pergunta.opcoes[indiceUsuario];
    correctChoiceText.innerHTML = pergunta.opcoes[indiceCorreto];
    explanationText.innerHTML = pergunta.explicacao;
    feedbackModal.style.display = 'flex';
}


// -------------------------------------------------------------------
// VERIFICAR RESPOSTA
// -------------------------------------------------------------------
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

    setTimeout(() => {
        pararAudioHeartbeat();

        if (clickedButton) {
            clickedButton.classList.remove('flash-processing');
            clickedButton.classList.remove('selected'); 
        }

        const btnCorreto = document.querySelector(`.answer-btn[data-indice="${correta}"]`);

        // -------------------------
        // RESPOSTA CERTA
        // -------------------------
        if (indiceUsuario === correta) {

            if (clickedButton) clickedButton.classList.add("correct");

            acertosTotais++;

            atualizarPremio(); // 🔥 AQUI ENTRA O PRÊMIO

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
        
        // -------------------------
        // RESPOSTA ERRADA
        // -------------------------
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


// -----------------------------------------------------------
// RESET + ANIMAÇÃO
// -----------------------------------------------------------
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


// -----------------------------------------------------------
// CARREGAR PERGUNTA
// -----------------------------------------------------------
function carregarPergunta() {
    if (atual >= perguntas.length) {
        audioFundoGame.pause();
        window.location.href = "../pages/endgame.html";
        return;
    }

    const q = perguntas[atual];

    feedbackModal.style.display = 'none';
    actionsDiv.style.pointerEvents = 'auto';

    answerButtons.forEach(btn => btn.disabled = false);

    audioFundoGame.play();

    answerButtons.forEach(btn => {
        btn.classList.remove("selected", "correct", "incorrect");
    });
    selectedIndex = null;

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


// -----------------------------------------------------------
// EVENTOS DOS BOTÕES
// -----------------------------------------------------------
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


// -----------------------------------------------------------
// START
// -----------------------------------------------------------
carregarPergunta(); 
iniciarMusicaFundo();
