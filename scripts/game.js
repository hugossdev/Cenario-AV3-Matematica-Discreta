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

// Variáveis de controle
let atual = 0;
const MAX_PERGUNTAS = 1; // Condição de vitória: 10 perguntas
let acertosTotais = 0; // Contador de acertos

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


// Exibe modal de erro
function exibirFeedbackErro(pergunta, indiceUsuario, indiceCorreto) {
    userChoiceText.innerHTML = pergunta.opcoes[indiceUsuario];
    correctChoiceText.innerHTML = pergunta.opcoes[indiceCorreto];
    explanationText.innerHTML = pergunta.explicacao;
    feedbackModal.style.display = 'flex';
}

// Verifica resposta (Função principal agora chamada no clique)
function verificarResposta(indiceUsuario) {
    const perguntaAtual = perguntas[atual];
    const correta = perguntaAtual.correta;

    // Desabilita todos os botões imediatamente
    answerButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("selected");
    });

    if (indiceUsuario === correta) {
        // Lógica de resposta correta
        const btnCorreto = document.querySelector(`.answer-btn[data-indice="${correta}"]`);
        btnCorreto.classList.add("correct");

        // INCREMENTA O CONTADOR DE ACERTOS
        acertosTotais++; 

        // VERIFICA CONDIÇÃO DE VITÓRIA (10 ACERTOS)
        if (acertosTotais >= MAX_PERGUNTAS) {
            setTimeout(() => {
                // REDIRECIONA PARA TELA FINAL
                window.location.href = "../pages/endgame.html";
            }, 1500);

        } else {
            // Continua para a próxima pergunta
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

        // FIM DO JOGO por erro (exibe modal)
        exibirFeedbackErro(perguntaAtual, indiceUsuario, correta);
    }
}

// Carrega pergunta
function carregarPergunta() {
    // Condição de segurança caso as perguntas acabem
    if (atual >= perguntas.length) {
        window.location.href = "../pages/endgame.html";
        return;
    }

    const q = perguntas[atual];

    feedbackModal.style.display = 'none';

    // RESET visual
    answerButtons.forEach(btn => {
        btn.classList.remove("correct", "incorrect", "selected");
        btn.disabled = false;
    });

    questionText.innerHTML = q.pergunta;

    answerButtons.forEach((btn, index) => {
        btn.querySelector(".text").innerHTML = q.opcoes[index];
        btn.dataset.indice = index;

        // O clique CHAMA diretamente a função de verificação
        btn.onclick = () => verificarResposta(index);
    });
}

// Inicializa o jogo
carregarPergunta();