// Importa a classe de perguntas
import PerguntasClass from "./perguntas.js";

// -------------------------------------------------------------------
// 🎧 LÓGICA DE ÁUDIO
// -------------------------------------------------------------------

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
        // Tenta dar play no áudio
        const playPromise = audioFundoGame.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Sucesso: Música iniciada
            }).catch(error => {
                console.warn("A reprodução de áudio de fundo foi bloqueada: ", error);
            });
        }
    }
}

// Função auxiliar para tocar o áudio de seleção
function tocarAudioSelecao() {
    if (audioSelecao) {
        // Reinicia o áudio para garantir que ele toque, mesmo em cliques rápidos
        audioSelecao.currentTime = 0; 
        audioSelecao.play().catch(error => {
            console.warn("Falha ao tocar áudio de seleção: ", error);
        });
    }
}

function tocarAudioHeartbeat() {
    if (audioHeartbeat) {
        audioHeartbeat.currentTime = 0;
        audioHeartbeat.loop = true; // Garante que toque durante os 3 segundos
        audioHeartbeat.play().catch(error => {
            console.warn("Falha ao tocar áudio Heartbeat: ", error);
        });
    }
}

// Função para parar o Heartbeat e resetar
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

// Função para tocar audioAplausos
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
// 🚩 Referência para a lista de respostas
const answersList = document.querySelector(".answers-list"); 

// Modal de feedback
const feedbackModal = document.getElementById("feedback-modal");
const userChoiceText = document.getElementById("user-choice");
const correctChoiceText = document.getElementById("correct-choice");
const explanationText = document.getElementById("explanation-text");
const startNewGameBtn = document.getElementById("start-new-game-btn");

// Botões de Ação (Para implementar a lógica de confirmação)
const confirmarBtn = document.querySelectorAll(".confirm-btn"); 
const actionsDiv = document.querySelector(".actions"); 

// Variáveis de controle
let atual = 0;
const MAX_PERGUNTAS = 20;
let acertosTotais = 0;
let selectedIndex = null; 

// ... (Função embaralharArray) ...
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Carrega perguntas embaralhadas
const perguntas = PerguntasClass.todasAsPerguntas;
embaralharArray(perguntas);

// Botão "Novo jogo"
startNewGameBtn.addEventListener('click', () => {
    window.location.href = "../index.html";
});


// 1. FUNÇÃO DE SELEÇÃO
function handleSelection(clickedButton) {
    // 3. Guarda o índice selecionado no estado do jogo
    selectedIndex = parseInt(clickedButton.dataset.indice);
    
    // 4. 🔊 TOCA O ÁUDIO DE SELEÇÃO
    tocarAudioSelecao();
}


// 2. FUNÇÃO QUE CHAMA A LÓGICA DO JOGO
function handleConfirmation() {
    // Verifica se alguma opção foi selecionada
    if (selectedIndex !== null) {
        // PAUSA A MÚSICA DE FUNDO E INICIA O HEARTBEAT
        audioFundoGame.pause(); 
        tocarAudioHeartbeat();
        verificarResposta(selectedIndex);
    }
}


// Exibe modal de erro
function exibirFeedbackErro(pergunta, indiceUsuario, indiceCorreto) {
    // A música de fundo já deve estar pausada
    userChoiceText.innerHTML = pergunta.opcoes[indiceUsuario];
    correctChoiceText.innerHTML = pergunta.opcoes[indiceCorreto];
    explanationText.innerHTML = pergunta.explicacao;
    feedbackModal.style.display = 'flex';
}

// -----------------------------------------------------------
// VERIFICA RESPOSTA (Lógica do jogo) - CORRIGIDA!
// -----------------------------------------------------------
function verificarResposta(indiceUsuario) {
    const perguntaAtual = perguntas[atual];
    const correta = perguntaAtual.correta;

    const clickedButton = document.querySelector(`.answer-btn[data-indice="${indiceUsuario}"]`);

    // A. ATIVA O EFEITO FLASH NO BOTÃO SELECIONADO
    if (clickedButton) {
        clickedButton.classList.add('selected'); 
        clickedButton.classList.add('flash-processing'); 
    }

    actionsDiv.style.pointerEvents = 'none';

    answerButtons.forEach(btn => {
        btn.disabled = true;
    });

    setTimeout(() => {
        pararAudioHeartbeat();

        if (clickedButton) {
            clickedButton.classList.remove('flash-processing');
            clickedButton.classList.remove('selected'); 
        }

        // NOVO COMPORTAMENTO:
        // Após o flash, a alternativa clicada fica *verde* antes de processar correta/errada
        if (clickedButton) {
            clickedButton.classList.add("correct");
        }

        if (indiceUsuario === correta) {

            // Se for correta, mantém o verde normal (já está .correct)
            acertosTotais++;

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

        } else {

            tocarAudioErrada(); 
            
            // ERRADA: Tira o verde e aplica vermelho
            clickedButton.classList.remove("correct");
            clickedButton.classList.add("incorrect");

            // Botão correto continua verde
            const btnCorreto = document.querySelector(`.answer-btn[data-indice="${correta}"]`);
            btnCorreto.classList.add("correct");

            exibirFeedbackErro(perguntaAtual, indiceUsuario, correta);
        }

    }, 3000); // Tempo do flash

    selectedIndex = null; 
}


// -----------------------------------------------------------
// 🔑 FUNÇÃO para forçar a animação (CORREÇÃO DE RESET)
// -----------------------------------------------------------
function aplicarAnimacaoPergunta() {
    // 1. Remove a classe de animação de todos os elementos
    questionBox.classList.remove('animate-in');
    answersList.classList.remove('animate-in');
    answerButtons.forEach(btn => btn.classList.remove('animate-in'));

    // Força o navegador a recalcular o layout (reflow) para garantir o reset da animação
    void questionBox.offsetWidth;
    answerButtons.forEach(btn => void btn.offsetWidth); 
    

    // Remove a classe que esconde o texto
    questionBox.classList.remove('hide-text');

    // 2. Re-adiciona a classe de animação no próximo frame
    requestAnimationFrame(() => {
        questionBox.classList.add('animate-in');
        answersList.classList.add('animate-in');
        answerButtons.forEach(btn => btn.classList.add('animate-in'));
    });
}


// Carrega pergunta
function carregarPergunta() {
    if (atual >= perguntas.length) {
        audioFundoGame.pause(); // 🛑 PAUSA ANTES DE SAIR
        window.location.href = "../pages/endgame.html";
        return;
    }

    const q = perguntas[atual];

    feedbackModal.style.display = 'none';
    actionsDiv.style.pointerEvents = 'auto'; // Reabilita ações
    
    // 🚩 Re-habilita todos os botões
    answerButtons.forEach(btn => {
        btn.disabled = false;
    });

    audioFundoGame.play(); // ▶️ RETOMA O ÁUDIO DE FUNDO

    // RESET visual e de estado
    answerButtons.forEach(btn => {
        // Remove 'selected' (se por acaso permaneceu), 'correct' e 'incorrect'
        btn.classList.remove("selected", "correct", "incorrect");
    });
    selectedIndex = null;
    
    // 🚩 1. PASSO: OCULTA O TEXTO DA PERGUNTA ANTERIOR
    questionBox.classList.add('hide-text');

    // 2. PASSO: Espera 200ms (tempo da transição de opacidade do texto)
    setTimeout(() => {
        
        // 3. PASSO: Carrega o novo conteúdo
        questionText.innerHTML = q.pergunta;

        answerButtons.forEach((btn, index) => {
            btn.querySelector(".text").innerHTML = q.opcoes[index];
            btn.dataset.indice = index;
        });

        // 4. PASSO: Aplica a animação
        aplicarAnimacaoPergunta();
        
    }, 200); // 200 milissegundos é um bom tempo para transições rápidas
}


// --- INICIALIZAÇÃO DO JOGO E LISTENERS ---

// Adiciona o listener principal a todos os botões de resposta
answerButtons.forEach(btn => {
    
    btn.addEventListener('click', function (e) {
        // Garante que o clique não foi no botão de confirmar e que o botão não está desabilitado.
        if (!e.target.classList.contains('confirm-btn') && !btn.disabled) {
            
            // Remove a classe 'selected' de todos os outros botões (implementação da função selectAnswer)
            answerButtons.forEach(button => {
                button.classList.remove('selected');
            });

            // Adiciona a classe 'selected' apenas ao botão clicado
            this.classList.add('selected');
            
            handleSelection(this);
        }
    });
    
    // LÓGICA DO JOGO: O botão "Confirmar" é o que realmente submete
    const confirmButton = btn.querySelector('.confirm-btn');
    if (confirmButton) {
        confirmButton.addEventListener('click', handleConfirmation);
    }
});


// Inicializa o jogo E O ÁUDIO DE FUNDO!
carregarPergunta(); 
iniciarMusicaFundo();