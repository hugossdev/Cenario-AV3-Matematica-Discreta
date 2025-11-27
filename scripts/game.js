// Importa a classe de perguntas
import PerguntasClass from "./perguntas.js";

// -------------------------------------------------------------------
// 🎧 LÓGICA DE ÁUDIO
// -------------------------------------------------------------------

const componentesDoPc = [
    "Gabinete",         // 1
    "Fonte",            // 2
    "SSD",              // 3
    "Memória RAM",      // 4
    "Placa-Mãe",        // 5
    "Processador",      // 6
    "Cooler",           // 7
    "Monitor",          // 8
    "Teclado e Mouse",  // 9
    "Placa de Vídeo"    // 10
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

// 🏃 Referência ao botão PULAR
const btnSkip = document.querySelector(".btn-skip"); 

// Variáveis de controle
let atual = 0;
const MAX_PERGUNTAS = 10;
let acertosTotais = 0;
let selectedIndex = null;
let isSkipUsed = false; // 🏃 Variável de controle para o pulo (Uso único)


// -----------------------------------------------------------
// 🃏 LÓGICA DE CARTAS (NOVO)
// -----------------------------------------------------------

let cartasUsadas = false; // Controla se a ajuda já foi usada
const modalCartas = document.getElementById('modal-cartas'); // ID do modal
const sortearBtn = document.getElementById('sortear-btn'); // ID do botão Sortear
const btnCartas = document.querySelector('.btn-cards'); // Botão 🃏 CARTAS
const cardElements = document.querySelectorAll('.card-option'); // As 4 cartas dentro do modal

// Variável para controlar o loop da animação de sorteio
let intervaloAnimacao; 
const resultadosSorteio = [0, 1, 2, 3]; // O resultado de eliminações em cada carta


// -----------------------------------------------------------
// 🔮 FUNÇÃO DO PRÊMIO (10 imagens)
// -----------------------------------------------------------

function atualizarPremio() {
    const imgPremio = document.getElementById("premio-img");
    const textoPremio = document.getElementById("premio-texto"); 

    if (!imgPremio || !textoPremio) return;

    // 1. Calcular o número do PRÓXIMO prêmio a ser disputado
    const proximoPremio = acertosTotais + 1;
    const numeroPremio = Math.min(proximoPremio, componentesDoPc.length); 

    // 1. ESPERA INICIAL (8000ms): O prêmio ganho fica visível
    setTimeout(() => {
        
        // 2. INICIA O FADE-OUT (Imagem e Texto)
        imgPremio.style.opacity = "0";
        textoPremio.style.opacity = "0"; 
        
        // 3. AGUARDA O FADE-OUT (1000ms) antes de trocar a imagem e o texto
        setTimeout(() => {
            
            // 4. TROCA DE IMAGEM E TEXTO
            imgPremio.src = `../images/premio${numeroPremio}.png`; 
            
            // Busca o nome do componente (Índice = número do prêmio - 1)
            const nomeComponente = componentesDoPc[numeroPremio - 1]; 
            
            // Atualiza o conteúdo do texto
            textoPremio.textContent = `Pergunta ${numeroPremio}: Valendo ${nomeComponente}!`;

            // 5. INICIA O FADE-IN (Imagem e Texto)
            imgPremio.style.opacity = "1";
            textoPremio.style.opacity = "1";
            
        }, 1000); // 1000ms: Tempo para o fade-out acontecer
        
    }, 8000); // 8000ms: Tempo de exibição do prêmio ganho (duração do áudio + visualização)
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

// -------------------------------------------------------------------
// 🏃 LÓGICA DO PULAR (SKIP)
// -------------------------------------------------------------------

function skipQuestion() {
    // 1. Verifica se o pulo já foi usado
    if (isSkipUsed) {
        alert("Você só pode pular uma pergunta por jogo!");
        return;
    }

    // 2. Marca o pulo como usado
    isSkipUsed = true;
    
    // 3. Desabilita visualmente o botão de pular e marca a classe como usada
    btnSkip.disabled = true;
    btnSkip.classList.add('used'); 
    // O TEXTO É MANTIDO AQUI CONFORME SOLICITADO
    
    // 4. Avança para a próxima pergunta
    atual++; 
    
    // Recarrega o quiz com a próxima pergunta, garantindo que o áudio de fundo volte
    carregarPergunta(); 
}


// Modal erro
function exibirFeedbackErro(pergunta, indiceUsuario, indiceCorreto) {
    userChoiceText.innerHTML = pergunta.opcoes[indiceUsuario];
    correctChoiceText.innerHTML = pergunta.opcoes[indiceCorreto];
    explanationText.innerHTML = pergunta.explicacao;
    feedbackModal.style.display = 'flex';
}


// -------------------------------------------------------------------
// 🃏 LÓGICA DAS CARTAS
// -------------------------------------------------------------------

function abrirModalCartas() {
    // Só pode abrir se não foi usada e se o botão não está desabilitado por outro motivo
    if (cartasUsadas || btnCartas.disabled) return; 

    // Garante que qualquer animação anterior seja parada ao abrir o modal
    if (intervaloAnimacao) {
        clearInterval(intervaloAnimacao);
    }

    // Reseta a aparência das cartas para o estado inicial
    cardElements.forEach(card => card.classList.remove('selected-card'));
    
    // Reabilita e reseta o texto do botão Sortear
    sortearBtn.disabled = false;
    sortearBtn.textContent = 'Sortear';
    
    modalCartas.style.display = 'flex';
    actionsDiv.style.pointerEvents = 'none'; // Desabilita outras ações
}

function fecharModalCartas() {
    modalCartas.style.display = 'none';
    actionsDiv.style.pointerEvents = 'auto'; // Reabilita a seleção de resposta
    
    // Garante que o loop de animação pare ao fechar
    if (intervaloAnimacao) {
        clearInterval(intervaloAnimacao);
    }
}


function aplicarEliminacao(numEliminacoes) {
    const perguntaAtual = perguntas[atual];
    const correta = perguntaAtual.correta; // Índice da resposta correta (0 a 3)

    // Coleta os índices das respostas INCORRETAS
    let incorretas = [0, 1, 2, 3].filter(i => i !== correta);

    // Embaralha as incorretas para que a eliminação seja aleatória
    embaralharArray(incorretas); 

    // Seleciona as primeiras 'numEliminacoes' respostas a serem eliminadas
    const aEliminar = incorretas.slice(0, numEliminacoes); 
    
    aEliminar.forEach(indice => {
        const btn = document.querySelector(`.answer-btn[data-indice="${indice}"]`);
        if (btn) {
            // Aplica o estilo visual de eliminação (deve ser definido no CSS)
            btn.classList.add('eliminada');
            btn.disabled = true; // Desabilita o botão eliminado
        }
    });
}

function sortearCarta() {
    // 1. Desabilita o sorteio e marca a ajuda como usada
    sortearBtn.disabled = true;
    sortearBtn.textContent = 'Sorteando...';
    btnCartas.disabled = true;
    btnCartas.classList.add('usada');
    cartasUsadas = true;
    
    // 2. Remove qualquer destaque de seleção anterior de todas as cartas
    cardElements.forEach(c => c.classList.remove('selected-card'));

    let currentIndex = 0;
    const tempoDeGiro = 100; // Velocidade do destaque em ms (para animação)
    
    // 3. Inicia o "Giro" rápido (destaque sequencial)
    intervaloAnimacao = setInterval(() => {
        // Remove destaque da carta anterior
        cardElements[currentIndex].classList.remove('selected-card');
        
        // Vai para a próxima (circular)
        currentIndex = (currentIndex + 1) % cardElements.length; 
        
        // Adiciona destaque na carta atual
        cardElements[currentIndex].classList.add('selected-card');

    }, tempoDeGiro);

    // 4. Para o giro após 3 segundos e aplica o resultado
    setTimeout(() => {
        clearInterval(intervaloAnimacao); // Para o giro
        
        // Sorteia um índice aleatório (0 a 3)
        const indiceSorteado = Math.floor(Math.random() * resultadosSorteio.length);
        const numEliminacoes = resultadosSorteio[indiceSorteado];
        
        // 5. Aplica o destaque final na carta sorteada
        cardElements.forEach(c => c.classList.remove('selected-card')); // Remove todos os destaques
        cardElements[indiceSorteado].classList.add('selected-card'); // Destaca apenas a final

        sortearBtn.textContent = `Você eliminou ${numEliminacoes} opções!`;

        // 6. Aplica a eliminação no jogo após um breve momento
        setTimeout(() => {
            aplicarEliminacao(numEliminacoes); 
            fecharModalCartas();
        }, 1500); 

    }, 3000); // Gira por 3 segundos
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
    // 🏃 Desabilita PULAR temporariamente
    if (btnSkip) btnSkip.disabled = true; 

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

    // 🃏 Lógica do botão CARTAS
    if (cartasUsadas) {
        btnCartas.disabled = true;
        btnCartas.classList.add('usada'); 
    } else {
        btnCartas.disabled = false;
        btnCartas.classList.remove('usada');
    }
    
    // 🏃 Lógica do botão PULAR
    if (btnSkip) {
        if (isSkipUsed) {
            btnSkip.disabled = true;
            btnSkip.classList.add('used');
            // O TEXTO É MANTIDO (não alterado)
        } else {
            // Reabilita o botão PULAR se não foi usado
            btnSkip.disabled = false;
            btnSkip.classList.remove('used'); 
            btnSkip.querySelector('span').textContent = '🏃 PULAR'; // Garante o texto original
        }
    }


    // Remove o estilo de eliminado e reabilita botões para a nova pergunta
    answerButtons.forEach(btn => {
        btn.disabled = false; // Reabilita todos antes de remover classes
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


// -----------------------------------------------------------
// EVENTOS DOS BOTÕES
// -----------------------------------------------------------

// Evento para abrir o modal de cartas
btnCartas.addEventListener('click', abrirModalCartas);
// Evento para sortear a carta
sortearBtn.addEventListener('click', sortearCarta);
// 🏃 Evento para o botão de pular
if (btnSkip) {
    btnSkip.addEventListener('click', skipQuestion);
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


// -----------------------------------------------------------
// START
// -----------------------------------------------------------
carregarPergunta(); 
iniciarMusicaFundo();