// Importa a classe de perguntas
import PerguntasClass from "./perguntas.js";

// Referências do DOM
const questionText = document.querySelector(".question-text");
const answerButtons = document.querySelectorAll(".answer-btn");

// Modal de feedback
const feedbackModal = document.getElementById("feedback-modal");
const userChoiceText = document.getElementById("user-choice");
const correctChoiceText = document.getElementById("correct-choice");
const explanationText = document.getElementById("explanation-text");
const startNewGameBtn = document.getElementById("start-new-game-btn");

// Botões de Ação (Para implementar a lógica de confirmação)
const confirmarBtn = document.querySelectorAll(".confirm-btn"); // Novo
const actionsDiv = document.querySelector(".actions"); // Para desabilitar ações

// Variáveis de controle
let atual = 0;
const MAX_PERGUNTAS = 1;
let acertosTotais = 0;
let selectedIndex = null; // Guarda o índice da resposta selecionada

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


// 1. FUNÇÃO DE SELEÇÃO (ANIMAÇÃO)
function selectAnswer(clickedButton) {
    // 1. Remove a classe 'selected' de todos os botões
    answerButtons.forEach(button => {
        button.classList.remove('selected');
    });

    // 2. Adiciona a classe 'selected' apenas ao botão clicado
    clickedButton.classList.add('selected');

    // 3. Guarda o índice selecionado no estado do jogo
    selectedIndex = parseInt(clickedButton.dataset.indice);
}


// 2. FUNÇÃO QUE CHAMA A LÓGICA DO JOGO (CHAMADA APÓS A SELEÇÃO)
function handleConfirmation() {
    // Verifica se alguma opção foi selecionada
    if (selectedIndex !== null) {
        verificarResposta(selectedIndex);
    }
}


// Exibe modal de erro
function exibirFeedbackErro(pergunta, indiceUsuario, indiceCorreto) {
    userChoiceText.innerHTML = pergunta.opcoes[indiceUsuario];
    correctChoiceText.innerHTML = pergunta.opcoes[indiceCorreto];
    explanationText.innerHTML = pergunta.explicacao;
    feedbackModal.style.display = 'flex';
}

// Verifica resposta (Lógica do jogo)
function verificarResposta(indiceUsuario) {
    const perguntaAtual = perguntas[atual];
    const correta = perguntaAtual.correta;

    // Desabilita todos os botões imediatamente
    answerButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("selected");
    });

    // Reseta o estado de seleção
    selectedIndex = null;

    // Desabilita as ações do footer para evitar cliques duplicados
    actionsDiv.style.pointerEvents = 'none';

    if (indiceUsuario === correta) {
        // Lógica de resposta correta
        const btnCorreto = document.querySelector(`.answer-btn[data-indice="${correta}"]`);
        btnCorreto.classList.add("correct");

        acertosTotais++;

        if (acertosTotais >= MAX_PERGUNTAS) {
            setTimeout(() => {
                window.location.href = "../pages/endgame.html";
            }, 1500);
        } else {
            setTimeout(() => {
                atual++;
                carregarPergunta();
            }, 1500);
        }

    } else {
        // Lógica de resposta incorreta
        const btnErrado = document.querySelector(`.answer-btn[data-indice="${indiceUsuario}"]`);
        btnErrado.classList.add("incorrect");

        const btnCorreto = document.querySelector(`.answer-btn[data-indice="${correta}"]`);
        btnCorreto.classList.add("correct");

        exibirFeedbackErro(perguntaAtual, indiceUsuario, correta);
    }
}

// Carrega pergunta
function carregarPergunta() {
    if (atual >= perguntas.length) {
        window.location.href = "../pages/endgame.html";
        return;
    }

    const q = perguntas[atual];

    feedbackModal.style.display = 'none';
    actionsDiv.style.pointerEvents = 'auto'; // Reabilita ações

    // RESET visual e de estado
    answerButtons.forEach(btn => {
        btn.classList.remove("correct", "incorrect", "selected");
        btn.disabled = false;
        // Removendo o onclick antigo para evitar duplicação ou conflito
        btn.onclick = null;
    });
    selectedIndex = null;

    questionText.innerHTML = q.pergunta;

    answerButtons.forEach((btn, index) => {
        btn.querySelector(".text").innerHTML = q.opcoes[index];
        btn.dataset.indice = index;
    });
}


// --- INICIALIZAÇÃO DO JOGO E LISTENERS ---

// Adiciona o listener principal a todos os botões de resposta
answerButtons.forEach(btn => {
    // 1. ANIMAÇÃO: Ao clicar em qualquer parte do botão, ele seleciona (amarelo)
    btn.addEventListener('click', function (e) {
        // Ignora cliques no próprio botão de confirmar para evitar selecionar e desmarcar
        if (!e.target.classList.contains('confirm-btn')) {
            selectAnswer(this);
        }
    });

    // 2. LÓGICA DO JOGO: O botão "Confirmar" é o que realmente submete
    const confirmButton = btn.querySelector('.confirm-btn');
    if (confirmButton) {
        confirmButton.addEventListener('click', handleConfirmation);
    }
});


// Inicializa o jogo
carregarPergunta();