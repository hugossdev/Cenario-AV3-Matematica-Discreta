class Perguntas {
    static get todasAsPerguntas() {
        return [

            // CONJUNTOS (20 perguntas)

            {
                tema: "Conjuntos",
                pergunta: "Qual é o símbolo universalmente utilizado para representar um Conjunto Vazio?",
                opcoes: ["∈", "⊂", "∅", "U"],
                respostaCorreta: "∅",
                explicacao: "O símbolo ∅ representa o conjunto vazio, ou seja, sem elementos.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual é o nome dado a um conjunto que possui um número finito de elementos?",
                opcoes: ["Conjunto Infinito", "Conjunto Unitário", "Conjunto Universo", "Conjunto Finito"],
                respostaCorreta: "Conjunto Finito",
                explicacao: "Conjunto finito é aquele que possui quantidade limitada de elementos.",
                correta: 3
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual é o resultado da união entre A={1,2,3} e B={3,4,5}?",
                opcoes: ["{1,2,3,4,5}", "{1,2,4,5}", "{3}", "{1,2,3,3,4,5}"],
                respostaCorreta: "{1,2,3,4,5}",
                explicacao: "A união combina elementos de ambos os conjuntos, sem repetição.",
                correta: 0
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual é o resultado da interseção entre pares P e ímpares I?",
                opcoes: ["Conjunto Universo", "{0}", "Conjunto Vazio", "{1,2,3,...}"],
                respostaCorreta: "Conjunto Vazio",
                explicacao: "Não existe número que seja par e ímpar simultaneamente.",
                // Você pode usar o trigger de imagem para a explicação:
                correta: 2 
            },
            {
                tema: "Conjuntos",
                pergunta: "O que significa A ⊂ B?",
                opcoes: ["Interseção", "A é subconjunto de B", "A pertence a B", "Complementar de A"],
                respostaCorreta: "A é subconjunto de B",
                explicacao: "Indica que todos elementos de A estão também em B.",
                correta: 1
            },
            {
                tema: "Conjuntos",
                pergunta: "Se A tem 3 elementos, quantos subconjuntos possui?",
                opcoes: ["3", "6", "8", "9"],
                respostaCorreta: "8",
                explicacao: "A fórmula é $2^n$. Com n=3, temos $2^3 = 8$ subconjuntos.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "O símbolo correto para indicar que 5 pertence a A={1,3,5,7} é:",
                opcoes: ["A⊆5", "5⊂A", "A∩5", "5∈A"],
                respostaCorreta: "5∈A",
                explicacao: "O símbolo ∈ indica pertencimento.",
                correta: 3
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual conjunto contém números inteiros positivos, negativos e zero, mas não frações?",
                opcoes: ["N", "R", "Z", "Q"],
                respostaCorreta: "Z",
                explicacao: "O conjunto Z representa os números inteiros.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "O resultado da operação A ∩ A é:",
                opcoes: ["∅", "Conjunto Universo", "A", "A^c"],
                respostaCorreta: "A",
                explicacao: "A interseção de um conjunto com ele mesmo gera o próprio conjunto.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "A={a,b}. Quantos subconjuntos próprios possui?",
                opcoes: ["4", "3", "2", "1"],
                respostaCorreta: "3",
                explicacao: "Subconjuntos próprios excluem o conjunto total. Total $2^2 = 4$, próprios = 3.",
                correta: 1
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual operação representa elementos que estão em A mas não estão em B?",
                opcoes: ["União", "Interseção", "Diferença", "Produto Cartesiano"],
                respostaCorreta: "Diferença",
                explicacao: "A diferença A−B contém elementos exclusivos de A.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "O conjunto U é chamado de:",
                opcoes: ["Subconjunto", "Complementar", "Universo", "Unitário"],
                respostaCorreta: "Universo",
                explicacao: "É o conjunto de referência que contém todos os elementos possíveis.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "O resultado de A ∪ ∅ é:",
                opcoes: ["∅", "A", "Conjunto Universo", "A^c"],
                respostaCorreta: "A",
                explicacao: "A união do conjunto vazio com A resulta em A.",
                correta: 1
            },
            {
                tema: "Conjuntos",
                pergunta: "O conjunto {x | x é par e menor que 10} é:",
                opcoes: ["{1,3,5,7,9}", "{2,4,6,8}", "{0,1,2}", "{2,3,4,5,6}"],
                respostaCorreta: "{2,4,6,8}",
                explicacao: "São os números pares maiores que zero e menores que 10.",
                correta: 1
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual é o cardinal de A={10,20,30,40}?",
                opcoes: ["3", "2", "4", "5"],
                respostaCorreta: "4",
                explicacao: "Cardinal é o número de elementos do conjunto.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "Se A e B são disjuntos, então:",
                opcoes: ["A ∩ B = ∅", "A ∪ B = ∅", "A ⊂ B", "B ⊂ A"],
                respostaCorreta: "A ∩ B = ∅",
                explicacao: "Conjuntos disjuntos não possuem elementos em comum.",
                correta: 0
            },
            {
                tema: "Conjuntos",
                pergunta: "Qual é o conjunto potência de A={1,2}?",
                opcoes: ["{1,2,3}", "{{1},{2}}", "{{},{1},{2},{1,2}}", "{{1,2}}"],
                respostaCorreta: "{{},{1},{2},{1,2}}",
                explicacao: "O conjunto potência contém todos os subconjuntos possíveis.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "Se A={1,2,3} e B={3,4,5}, qual é A−B?",
                opcoes: ["{1,2,3}", "{3,4,5}", "{1,2}", "{2,3,5}"],
                respostaCorreta: "{1,2}",
                explicacao: "Elementos de A que não estão em B.",
                correta: 2
            },
            {
                tema: "Conjuntos",
                pergunta: "O símbolo de união é:",
                opcoes: ["∩", "∪", "⊂", "∉"],
                respostaCorreta: "∪",
                explicacao: "Representa todos os elementos presentes em A ou em B.",
                correta: 1
            },
            {
                tema: "Conjuntos",
                pergunta: "O complementar de A é formado por:",
                opcoes: ["Elementos fora de A no universo", "Elementos de A", "Elementos comuns a A e B", "Elementos da diferença simétrica"],
                respostaCorreta: "Elementos fora de A no universo",
                explicacao: "É tudo que não pertence a A dentro do conjunto universo.",
                correta: 0
            },


            // FUNÇÕES (20 perguntas)

            {
                tema: "Funções",
                pergunta: "Uma relação onde cada elemento do domínio tem uma única imagem é chamada de:",
                opcoes: ["Sequência", "Conjunto", "Função", "Produto"],
                respostaCorreta: "Função",
                explicacao: "Função associa cada entrada a apenas uma saída.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "Em y=f(x), qual variável é independente?",
                opcoes: ["x", "y", "f", "a"],
                respostaCorreta: "x",
                explicacao: "x é o valor que entra na função.",
                correta: 0
            },
            {
                tema: "Funções",
                pergunta: "O conjunto dos valores possíveis de x é chamado de:",
                opcoes: ["Imagem", "Domínio", "Raiz", "Contradomínio"],
                respostaCorreta: "Domínio",
                explicacao: "É o conjunto dos valores de entrada da função.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "Qual tipo de função gera uma linha reta?",
                opcoes: ["Quadrática", "Exponencial", "Afim", "Modular"],
                respostaCorreta: "Afim",
                explicacao: "Funções do 1º grau (ex: $f(x)=ax+b$) têm gráfico linear.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "No modelo $f(x)=ax+b$, o termo b representa:",
                opcoes: ["Inclinação", "Raiz", "Intercepto no eixo y", "Delta"],
                respostaCorreta: "Intercepto no eixo y",
                explicacao: "b é o valor de $f(0)$, onde a reta cruza o eixo Y.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "O valor de x para o qual f(x)=0 é chamado de:",
                opcoes: ["Domínio", "Vértice", "Raiz", "Coeficiente"],
                respostaCorreta: "Raiz",
                explicacao: "É onde o gráfico cruza o eixo x.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "A curva de uma função quadrática é chamada de:",
                opcoes: ["Reta", "Parábola", "Hipérbole", "Elipse"],
                respostaCorreta: "Parábola",
                explicacao: "Toda função do 2º grau ($f(x)=ax^2+bx+c$) gera uma parábola.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "A concavidade da função quadrática depende de:",
                opcoes: ["b", "c", "a", "x"],
                respostaCorreta: "a",
                explicacao: "Se $a>0$ abre para cima, se $a<0$ abre para baixo.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "Uma função é injetora quando:",
                opcoes: ["Possui vértice", "Possui domínio finito", "Valores diferentes têm imagens diferentes", "É quadrática"],
                respostaCorreta: "Valores diferentes têm imagens diferentes",
                explicacao: "Não existem dois x diferentes que geram o mesmo y.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "Uma função injetora e sobrejetora simultaneamente é:",
                opcoes: ["Constante", "Bijetora", "Par", "Ímpar"],
                respostaCorreta: "Bijetora",
                explicacao: "Bijetiva significa que a função é um para um e sobre.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "Se $f(x)=3x−4$, então $f(1)$ é:",
                opcoes: ["1", "3", "7", "-1"],
                respostaCorreta: "-1",
                explicacao: "Substituindo $x=1$, temos $3(1)−4 = 3−4 = -1$.",
                correta: 3
            },
            {
                tema: "Funções",
                pergunta: "Se $g(x)=x²+5$, então $g(0)$ é:",
                opcoes: ["5", "0", "1", "25"],
                respostaCorreta: "5",
                explicacao: "$0² + 5 = 5$.",
                correta: 0
            },
            {
                tema: "Funções",
                pergunta: "A imagem de uma função é:",
                opcoes: ["Conjunto dos valores de x", "Conjunto dos valores de y gerados", "Contradomínio", "Delta"],
                respostaCorreta: "Conjunto dos valores de y gerados",
                explicacao: "Imagem são os valores efetivamente produzidos por $f(x)$.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "Qual é o domínio da função $f(x)=1/x$?",
                opcoes: ["Todos os reais", "Todos exceto 0", "Somente positivos", "Somente negativos"],
                respostaCorreta: "Todos exceto 0",
                explicacao: "Em Matemática, a divisão por zero é indefinida, então $x \neq 0$.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "A função constante possui gráfico semelhante a:",
                opcoes: ["Vertical", "Horizontal", "Curvado", "Crescente"],
                respostaCorreta: "Horizontal",
                explicacao: "$f(x)=k$ produz uma linha paralela ao eixo x.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "$f(x)=−2x+8$ é:",
                opcoes: ["Crescente", "Decrescente", "Constante", "Quadrática"],
                respostaCorreta: "Decrescente",
                explicacao: "O coeficiente angular $a=-2$ é menor que zero.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "Em $f(x)=|x|$, o valor sempre será:",
                opcoes: ["Negativo", "Zero", "Não negativo", "Inteiro"],
                respostaCorreta: "Não negativo",
                explicacao: "Valor absoluto nunca é negativo (ou seja, é zero ou positivo).",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "O vértice da parábola representa:",
                opcoes: ["A raiz", "O ponto máximo ou mínimo", "A inclinação", "O domínio"],
                respostaCorreta: "O ponto máximo ou mínimo",
                explicacao: "É o ponto mais alto (concavidade para baixo) ou mais baixo (concavidade para cima) da curva.",
                correta: 1
            },
            {
                tema: "Funções",
                pergunta: "A função exponencial possui base:",
                opcoes: ["Negativa", "Imaginária", "Positiva e diferente de 1", "Zero"],
                respostaCorreta: "Positiva e diferente de 1",
                explicacao: "Funções do tipo $a^x$ exigem base $a > 0$ e $a \neq 1$.",
                correta: 2
            },
            {
                tema: "Funções",
                pergunta: "A composição $f(g(x))$ é chamada de:",
                opcoes: ["Decomposição", "Função inversa", "Função composta", "Função linear"],
                respostaCorreta: "Função Composta",
                explicacao: "Aplicação sucessiva de duas funções.",
                correta: 2
            },


            // RELAÇÕES (20 perguntas)

            {
                tema: "Relações",
                pergunta: "Em uma relação de A para B, o conjunto A é chamado de:",
                opcoes: ["Imagem", "Contradomínio", "Domínio", "Resultado"],
                respostaCorreta: "Domínio",
                explicacao: "É de onde vêm os primeiros elementos dos pares ordenados.",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "O eixo das abscissas representa:",
                opcoes: ["Eixo Y", "Imagem", "Eixo X", "Quadrante"],
                respostaCorreta: "Eixo X",
                explicacao: "Abscissa corresponde ao eixo horizontal.",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "No par (10,7), a ordenada é:",
                opcoes: ["10", "7", "3", "0"],
                respostaCorreta: "7",
                explicacao: "Ordenada é o segundo valor do par (coordenada Y).",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Uma relação reflexiva exige que:",
                opcoes: ["(a,b) sempre exista", "(a,a) exista para todos a", "(b,a) exista sempre", "(a,c) exista"],
                respostaCorreta: "(a,a) exista para todos a",
                explicacao: "Todo elemento se relaciona consigo mesmo.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Uma relação simétrica exige que se (a,b) pertence a R então:",
                opcoes: ["(b,a) também pertence", "(b,a) não pertence", "(a,a) pertence", "(c,a) pertence"],
                respostaCorreta: "(b,a) também pertence",
                explicacao: "Simetria é o espelhamento da relação.",
                correta: 0
            },
            {
                tema: "Relações",
                pergunta: "A propriedade que forma uma 'ponte' é:",
                opcoes: ["Reflexiva", "Simétrica", "Transitiva", "Antissimétrica"],
                respostaCorreta: "Transitiva",
                explicacao: "Se $(a,b)$ e $(b,c)$ estão na relação, então $(a,c)$ deve estar (propriedade de ponte).",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "Para ser reflexiva em A={1,2,3}, a relação deve conter:",
                opcoes: ["(1,1) apenas", "(2,1)", "(1,2)", "Todos os pares (x,x)"],
                respostaCorreta: "Todos os pares (x,x)",
                explicacao: "Reflexiva exige a presença de (1,1), (2,2) e (3,3).",
                correta: 3
            },
            {
                tema: "Relações",
                pergunta: "Se R contém (a,b) e (b,a) com $a \neq b$, qual propriedade é violada?",
                opcoes: ["Simétrica", "Reflexiva", "Transitiva", "Antissimétrica"],
                respostaCorreta: "Antissimétrica",
                explicacao: "Antissimétrica só permite (a,b) e (b,a) se $a$ for igual a $b$.",
                correta: 3
            },
            {
                tema: "Relações",
                pergunta: "A imagem de $R=\{(2,4),(4,8),(6,12)\}$ é:",
                opcoes: ["{2,4,6}", "{4,8,12}", "{2,8,12}", "{4,6,8}"],
                respostaCorreta: "{4,8,12}",
                explicacao: "A imagem é formada pelos segundos elementos (coordenadas Y) dos pares.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Em um par ordenado, a ordem importa?",
                opcoes: ["Não", "Depende", "Sim", "Apenas se a=b"],
                respostaCorreta: "Sim",
                explicacao: "Por definição, $(a,b)$ é diferente de $(b,a)$ quando $a \neq b$.",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "O produto cartesiano A×B forma:",
                opcoes: ["Um número", "Um conjunto de pares ordenados", "Um subconjunto", "Um intervalo"],
                respostaCorreta: "Um conjunto de pares ordenados",
                explicacao: "A×B contém todos pares possíveis $(a,b)$ onde $a \in A$ e $b \in B$.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Se A={1,2} e B={3}, A×B é:",
                opcoes: ["{1,2,3}", "{(1,3),(2,3)}", "{(3,1),(3,2)}", "∅"],
                respostaCorreta: "{(1,3),(2,3)}",
                explicacao: "Formam-se pares $(a,b)$ com $a \in A$ e $b \in B$.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Uma relação é uma função somente se:",
                opcoes: ["Todos do contradomínio são atingidos", "Cada elemento do domínio possui uma imagem única", "É simétrica", "É reflexiva"],
                respostaCorreta: "Cada elemento do domínio possui uma imagem única",
                explicacao: "Função é uma relação especial que exige uma única saída para cada entrada.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Uma relação que é reflexiva, simétrica e transitiva é chamada de:",
                opcoes: ["Função", "Relação de equivalência", "Relação bijetora", "Relação inversa"],
                respostaCorreta: "Relação de equivalência",
                explicacao: "As três propriedades (reflexiva, simétrica e transitiva) caracterizam uma relação de equivalência.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "Uma relação antissimétrica pode conter:",
                opcoes: ["(a,b) e (b,a) com $a \neq b$", "Somente pares iguais", "Nenhum par", "Pares de elementos diferentes"],
                respostaCorreta: "Pares de elementos diferentes",
                explicacao: "Uma relação antissimétrica pode conter pares $(a,b)$ contanto que $(b,a)$ não esteja nela (a menos que $a=b$).",
                correta: 3
            },
            {
                tema: "Relações",
                pergunta: "A relação identidade contém:",
                opcoes: ["Todos os pares possíveis", "Apenas pares (x,x)", "Nenhum par", "Pares diferentes"],
                respostaCorreta: "Apenas pares (x,x)",
                explicacao: "Identidade relaciona cada elemento consigo mesmo: $Id = \{(x,x) | x \in A\}$.",
                correta: 1
            },
            {
                tema: "Relações",
                pergunta: "A relação inversa de R contém:",
                opcoes: ["Os pares trocando suas posições", "Os mesmos pares", "Elementos do contradomínio", "Apenas pares simétricos"],
                respostaCorreta: "Os pares trocando suas posições",
                explicacao: "Se $(a,b) \in R$, então $(b,a) \in R^{-1}$.",
                correta: 0
            },
            {
                tema: "Relações",
                pergunta: "A cardinalidade de A×B se A tem 4 e B tem 3 elementos é:",
                opcoes: ["4", "3", "12", "7"],
                respostaCorreta: "12",
                explicacao: "A cardinalidade é o produto: $|A \times B| = |A| \cdot |B| = 4 \cdot 3 = 12$.",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "Se uma relação contém apenas um par ordenado, ela ainda é uma relação?",
                opcoes: ["Sim", "Não", "Depende", "Só se for reflexiva"],
                respostaCorreta: "Sim",
                explicacao: "Uma relação é definida como qualquer subconjunto (incluindo subconjuntos com um só elemento) do produto cartesiano.",
                correta: 0
            },
            {
                tema: "Relações",
                pergunta: "Se A={1,2} e a relação R é {(1,2)}, então o domínio de R é:",
                opcoes: ["{1}", "{2}", "{1,2}", "∅"],
                respostaCorreta: "{1}",
                explicacao: "O domínio contém apenas os primeiros elementos de cada par, neste caso, apenas 1.",
                correta: 0
            }

        ];
    }
}

export default Perguntas; // <-- EXPORTAÇÃO CORRETA