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
                explicacao: "Conjuntos finitos possuem quantidade limitada de elementos.",
                correta: 3
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual é o resultado da união entre A = {1, 2, 3} e B = {3, 4, 5}?",
                opcoes: ["{1,2,3,4,5}", "{1,2,4,5}", "{3}", "{1,2,3,3,4,5}"],
                respostaCorreta: "{1,2,3,4,5}",
                explicacao: "A união junta todos os elementos sem repetição.",
                correta: 0
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual é o resultado da interseção entre P (pares) e I (ímpares)?",
                opcoes: ["Conjunto Universo", "{0}", "Conjunto Vazio", "{1,2,3,4,...}"],
                respostaCorreta: "Conjunto Vazio",
                explicacao: "Nenhum número pode ser par e ímpar ao mesmo tempo.",
                correta: 2
            },

            {
                tema: "Conjuntos",
                pergunta: "O que a notação A ⊂ B representa?",
                opcoes: ["A interseção de A e B", "A é um subconjunto de B", "A é um elemento de B", "Complementar de A"],
                respostaCorreta: "A é um subconjunto de B",
                explicacao: "Todos os elementos de A pertencem a B.",
                correta: 1
            },

            {
                tema: "Conjuntos",
                pergunta: "Se A tem 3 elementos, quantos subconjuntos possui?",
                opcoes: ["3", "6", "8", "9"],
                respostaCorreta: "8",
                explicacao: "Subconjuntos = 2^n. Com n = 3: 8.",
                correta: 2
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual é a união de A={2,4,6} e B={4,6,8}?",
                opcoes: ["{2,4,6,8}", "{4,6}", "{2,8}", "{2,4}"],
                respostaCorreta: "{2,4,6,8}",
                explicacao: "União junta os elementos sem repetição.",
                correta: 0
            },

            {
                tema: "Conjuntos",
                pergunta: "Considere A={1,4,7} e B={1,3,4,5,7,8}. É correto afirmar que:",
                opcoes: ["A ⊃ B", "B ⊅ A", "B ∩ A", "A ⊂ B"],
                respostaCorreta: "A ⊂ B",
                explicacao: "Todos os elementos de A pertencem a B.",
                correta: 3
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual símbolo indica que 5 pertence a A={1,3,5,7}?",
                opcoes: ["A⊆5", "5⊂A", "A∩5", "5∈A"],
                respostaCorreta: "5∈A",
                explicacao: "O símbolo ∈ indica pertencimento.",
                correta: 3
            },

            {
                tema: "Conjuntos",
                pergunta: "Conjunto com positivos, negativos e zero, mas sem frações:",
                opcoes: ["N", "R", "Z", "Q"],
                respostaCorreta: "Z",
                explicacao: "Z representa o conjunto dos inteiros.",
                correta: 2
            },

            {
                tema: "Conjuntos",
                pergunta: "Forma correta de representar os números inteiros:",
                opcoes: ["N", "Z", "Q", "R"],
                respostaCorreta: "Z",
                explicacao: "Z representa os inteiros.",
                correta: 1
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual é o resultado de A ∩ A?",
                opcoes: ["∅", "Universo", "A", "A^c"],
                respostaCorreta: "A",
                explicacao: "Interseção com ele mesmo retorna o próprio conjunto.",
                correta: 2
            },

            {
                tema: "Conjuntos",
                pergunta: "O que significa x ∉ A?",
                opcoes: ["x é subconjunto", "x é vazio", "x não pertence a A", "x é complementar"],
                respostaCorreta: "x não pertence a A",
                explicacao: "O símbolo ∉ indica não pertencimento.",
                correta: 2
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual é o menor elemento do conjunto N?",
                opcoes: ["-1", "0", "1", "1/2"],
                respostaCorreta: "0",
                explicacao: "Definição comum: N={0,1,2,3,...}",
                correta: 1
            },

            {
                tema: "Conjuntos",
                pergunta: "O conjunto A={a,b} possui quantos subconjuntos próprios?",
                opcoes: ["4", "3", "2", "1"],
                respostaCorreta: "3",
                explicacao: "Total: 4. Próprios: 3.",
                correta: 1
            },

            {
                tema: "Conjuntos",
                pergunta: "A={10,20,3} e B={10,20,30,40,5}. Qual é A - B?",
                opcoes: ["{40,50}", "{10,20,30}", "{10,20,30,40,50}", "{3}"],
                respostaCorreta: "{3}",
                explicacao: "Somente 3 está em A e não está em B.",
                correta: 3
            },

            {
                tema: "Conjuntos",
                pergunta: "Q ∪ I é igual a qual conjunto numérico?",
                opcoes: ["N", "Z", "R", "C"],
                respostaCorreta: "R",
                explicacao: "Racionais + irracionais = Reais.",
                correta: 2
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual é a cardinalidade de D={c,a,s,a,c,a}?",
                opcoes: ["6", "5", "4", "3"],
                respostaCorreta: "3",
                explicacao: "Elementos distintos: c, a, s → 3.",
                correta: 3
            },

            {
                tema: "Conjuntos",
                pergunta: "N é subconjunto de qual conjunto?",
                opcoes: ["C", "I", "∅", "Z"],
                respostaCorreta: "Z",
                explicacao: "Z contém todos os naturais mais negativos.",
                correta: 3
            },

            {
                tema: "Conjuntos",
                pergunta: "Qual notação indica que A NÃO está contido em B?",
                opcoes: ["A ≠ B", "A ⊂ B", "A ⊄ B", "A ∉ B"],
                respostaCorreta: "A ⊄ B",
                explicacao: "⊄ significa que A não é subconjunto de B.",
                correta: 2
            },


            // FUNÇÕES (20 perguntas)

            {
                tema: "Funções",
                pergunta: "Em Matemática, qual é o nome dado a uma relação entre dois conjuntos em que para cada elemento do primeiro conjunto (domínio) corresponde um único elemento no segundo conjunto (contradomínio)?",
                opcoes: ["Função", "Sequência", "Equação", "Conjunto"],
                respostaCorreta: "Função",
                explicacao: "Uma função relaciona cada elemento do domínio a um único elemento do contradomínio.",
                correta: 0
            },

            {
                tema: "Funções",
                pergunta: "Na notação de função y=f(x), qual das variáveis é considerada a variável independente?",
                opcoes: ["x", "O coeficiente angular", "f(x)", "y"],
                respostaCorreta: "x",
                explicacao: "Em y=f(x), x é a variável independente, pois escolhemos seus valores livremente.",
                correta: 0
            },

            {
                tema: "Funções",
                pergunta: "O conjunto de todos os valores que podem ser atribuídos à variável independente (x) de uma função é chamado de...",
                opcoes: ["Imagem", "Contradomínio", "Domínio", "Raiz"],
                respostaCorreta: "Domínio",
                explicacao: "Domínio é o conjunto de todos os possíveis valores de x.",
                correta: 2
            },

            {
                tema: "Funções",
                pergunta: "O conjunto formado por todos os valores que a variável dependente (y ou f(x)) realmente assume ao aplicarmos o domínio é denominado...",
                opcoes: ["Função", "Imagem", "Variável livre", "Domínio"],
                respostaCorreta: "Imagem",
                explicacao: "A imagem é o conjunto dos valores efetivamente obtidos por f(x).",
                correta: 1
            },

            {
                tema: "Funções",
                pergunta: "Qual tipo de função é sempre representado graficamente no plano cartesiano por uma linha reta?",
                opcoes: ["Função Logarítmica", "Função Exponencial", "Função Quadrática", "Função Afim"],
                respostaCorreta: "Função Afim",
                explicacao: "A função afim (1º grau) possui taxa de variação constante, formando uma reta.",
                correta: 3
            },

            {
                tema: "Funções",
                pergunta: "Em uma função afim f(x) = ax + b, o coeficiente b é chamado de coeficiente linear e representa qual característica no gráfico?",
                opcoes: ["O valor de x para f(x)=0", "A inclinação da reta", "O valor que a reta cruza o eixo y", "A concavidade da parábola"],
                respostaCorreta: "O valor que a reta cruza o eixo y",
                explicacao: "b é o ponto (0,b), a interseção da reta com o eixo y.",
                correta: 2
            },

            {
                tema: "Funções",
                pergunta: "O valor de x para o qual o gráfico de uma função afim ou quadrática cruza o eixo x, ou seja, para o qual f(x)=0, é chamado de...",
                opcoes: ["Coeficiente linear", "Vértice", "Domínio", "Raiz ou zero da função"],
                respostaCorreta: "Raiz ou zero da função",
                explicacao: "É onde o gráfico toca o eixo x, ou seja, onde a função é nula.",
                correta: 3
            },

            {
                tema: "Funções",
                pergunta: "Qual é o nome da curva que representa o gráfico de uma função quadrática (f(x)=ax²+bx+c)?",
                opcoes: ["Reta", "Parábola", "Elipse", "Hipérbole"],
                respostaCorreta: "Parábola",
                explicacao: "O gráfico de qualquer função do 2º grau é uma parábola.",
                correta: 1
            },

            {
                tema: "Funções",
                pergunta: "Para uma função quadrática f(x)=ax²+bx+c, o que indica se a parábola tem concavidade voltada para cima ou para baixo?",
                opcoes: ["O valor do coeficiente a", "O valor de delta (Δ)", "A raiz da função", "O valor do coeficiente c"],
                respostaCorreta: "O valor do coeficiente a",
                explicacao: "a>0 concavidade para cima; a<0 concavidade para baixo.",
                correta: 0
            },

            {
                tema: "Funções",
                pergunta: "Qual o tipo de função em que, para qualquer valor de x, o valor de y é sempre o mesmo, como em f(x)=7?",
                opcoes: ["Função Identidade", "Função Linear", "Função Afim", "Função Constante"],
                respostaCorreta: "Função Constante",
                explicacao: "Na função constante, f(x)=c, o valor de y não muda.",
                correta: 3
            },

            {
                tema: "Funções",
                pergunta: "Uma função é classificada como injetora se...",
                opcoes: [
                    "Todo elemento do contradomínio é imagem de algum elemento do domínio.",
                    "Ela é injetora e sobrejetora simultaneamente.",
                    "Elementos diferentes no domínio correspondem a imagens diferentes.",
                    "O seu gráfico é uma reta que passa pela origem."
                ],
                respostaCorreta: "Elementos diferentes no domínio correspondem a imagens diferentes.",
                explicacao: "Injetividade ocorre quando não há repetição de valores de saída.",
                correta: 2
            },

            {
                tema: "Funções",
                pergunta: "Uma função é classificada como sobrejetora se...",
                opcoes: [
                    "Elementos diferentes no domínio têm imagens diferentes.",
                    "O conjunto Imagem é igual ao conjunto Contradomínio.",
                    "O gráfico é simétrico em relação ao eixo y.",
                    "Seu domínio é igual ao seu contradomínio."
                ],
                respostaCorreta: "O conjunto Imagem é igual ao conjunto Contradomínio.",
                explicacao: "Na sobrejetora, todos os valores do contradomínio são atingidos.",
                correta: 1
            },

            {
                tema: "Funções",
                pergunta: "O nome dado à função que é simultaneamente injetora e sobrejetora é...",
                opcoes: ["Função Constante", "Função Bijetora", "Função Composta", "Função Inversa"],
                respostaCorreta: "Função Bijetora",
                explicacao: "Bijetiva = injetora + sobrejetora.",
                correta: 1
            },

            {
                tema: "Funções",
                pergunta: "Uma função afim f(x)=ax+b é classificada como crescente se o coeficiente angular (a) for...",
                opcoes: ["Nulo (a=0)", "Negativo (a<0)", "Positivo (a>0)", "Menor que 1"],
                respostaCorreta: "Positivo (a>0)",
                explicacao: "Se a>0, conforme x aumenta, f(x) também aumenta.",
                correta: 2
            },

            {
                tema: "Funções",
                pergunta: "Uma função afim f(x)=ax+b é classificada como decrescente se o coeficiente angular (a) for...",
                opcoes: ["Positivo (a>0)", "Negativo (a<0)", "Um número par", "Igual a 1"],
                respostaCorreta: "Negativo (a<0)",
                explicacao: "Se a<0, a função diminui conforme x aumenta.",
                correta: 1
            },

            {
                tema: "Funções",
                pergunta: "Dada a função f(x)=3x−4. Qual é o valor de f(1)?",
                opcoes: ["1", "3", "7", "-1"],
                respostaCorreta: "-1",
                explicacao: "f(1)=3(1)-4=3-4=-1.",
                correta: 3
            },

            {
                tema: "Funções",
                pergunta: "Se g(x) = x² + 5, qual é o valor de g(0)?",
                opcoes: ["5", "1", "0", "25"],
                respostaCorreta: "5",
                explicacao: "g(0)=0²+5=5.",
                correta: 0
            },

            {
                tema: "Funções",
                pergunta: "Qual é o nome da função em que a variável independente x aparece no expoente da base, como em f(x)=2^x?",
                opcoes: ["Função Trigonométrica", "Função Potência", "Função Exponencial", "Função Logarítmica"],
                respostaCorreta: "Função Exponencial",
                explicacao: "Na função exponencial, x aparece no expoente.",
                correta: 2
            },

            {
                tema: "Funções",
                pergunta: "O nome da função definida por f(x)=log_a(x), onde a é a base, é...",
                opcoes: ["Função Afim", "Função Logarítmica", "Função Quadrática", "Função Radical"],
                respostaCorreta: "Função Logarítmica",
                explicacao: "O logaritmo é a operação inversa da exponenciação.",
                correta: 1
            },

            {
                tema: "Funções",
                pergunta: "Qual é a restrição principal do domínio da função Logarítmica f(x)=log_a(x)?",
                opcoes: ["x deve ser negativo (x<0)", "x deve ser diferente de 0", "x deve ser positivo (x>0)", "x deve ser inteiro"],
                respostaCorreta: "x deve ser positivo (x>0)",
                explicacao: "O logaritmando deve ser maior que zero.",
                correta: 2
            },


            // RELAÇÕES (20 perguntas)

            {
                tema: "Relações",
                pergunta: "Em uma relação de A para B, qual é o nome dado ao conjunto A?",
                opcoes: ["Contradomínio", "Domínio", "Imagem", "Produto Cartesiano"],
                respostaCorreta: "Domínio",
                explicacao: "O domínio é o conjunto dos primeiros elementos dos pares ordenados.",
                correta: 1
            },
            {
                tema: "Plano Cartesiano",
                pergunta: "O que representa o eixo das abscissas em um plano cartesiano?",
                opcoes: ["O eixo Y", "O eixo vertical", "O eixo da Imagem", "O eixo X"],
                respostaCorreta: "O eixo X",
                explicacao: "O eixo das abscissas é o eixo horizontal, conhecido como eixo X.",
                correta: 3
            },
            {
                tema: "Relações",
                pergunta: "O conjunto de todos os segundos elementos dos pares ordenados de uma relação é chamado de:",
                opcoes: ["Domínio", "Imagem", "Contradomínio", "Produto Simétrico"],
                respostaCorreta: "Imagem",
                explicacao: "A imagem contém todos os segundos elementos dos pares da relação.",
                correta: 1
            },
            {
                tema: "Par Ordenado",
                pergunta: "Para o par ordenado (10, 7), qual é a ordenada?",
                opcoes: ["10", "O Produto Cartesiano", "7", "O Domínio"],
                respostaCorreta: "7",
                explicacao: "A ordenada é o segundo elemento do par ordenado.",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "Uma relação R é um subconjunto de qual produto entre dois conjuntos?",
                opcoes: ["Produto Reflexivo", "Produto Simétrico", "Produto Cartesiano (A × B)", "Produto da Imagem"],
                respostaCorreta: "Produto Cartesiano (A × B)",
                explicacao: "Relação é qualquer subconjunto do produto cartesiano A × B.",
                correta: 2
            },
            {
                tema: "Propriedades",
                pergunta: "Qual propriedade exige que, para todo a do conjunto, o par (a,a) esteja presente na relação?",
                opcoes: ["Reflexiva", "Simétrica", "Transitiva", "Antissimétrica"],
                respostaCorreta: "Reflexiva",
                explicacao: "A reflexividade exige que cada elemento se relacione consigo mesmo.",
                correta: 0
            },
            {
                tema: "Propriedades",
                pergunta: "Se uma relação é Simétrica e (3,5) pertence a R, o que deve acontecer?",
                opcoes: ["Nada", "(3,5) não pode estar em R", "(3,3) deve estar", "(5,3) deve estar"],
                respostaCorreta: "(5,3) deve estar",
                explicacao: "Na simetria, se (a,b) está em R, então (b,a) também deve estar.",
                correta: 3
            },
            {
                tema: "Propriedades",
                pergunta: "A propriedade Antissimétrica permite que (a,b) e (b,a) existam apenas se:",
                opcoes: ["a e b", "A relação for Reflexiva", "a=b", "Forem primos"],
                respostaCorreta: "a=b",
                explicacao: "Na antissimétrica, ambos os pares só podem coexistir se forem iguais.",
                correta: 2
            },
            {
                tema: "Propriedades",
                pergunta: "Qual propriedade garante que se (a,b) e (b,c) pertencem a R, então (a,c) pertence também?",
                opcoes: ["Transitiva", "Reflexiva", "Antissimétrica", "Simétrica"],
                respostaCorreta: "Transitiva",
                explicacao: "A transitividade liga os elementos de forma indireta.",
                correta: 0
            },
            {
                tema: "Propriedades",
                pergunta: "Para R ser Reflexiva em A={1,2,3}, quais pares não podem faltar?",
                opcoes: ["Apenas (1,1)", "(2,1)", "(1,2)", "(1,1), (2,2) e (3,3)"],
                respostaCorreta: "(1,1), (2,2) e (3,3)",
                explicacao: "Todos os elementos devem se relacionar consigo mesmos.",
                correta: 3
            },
            {
                tema: "Propriedades",
                pergunta: "Qual propriedade é violada se R contém (a,b) e (b,a) com a≠b?",
                opcoes: ["Reflexiva", "Antissimétrica", "Transitiva", "Simétrica"],
                respostaCorreta: "Antissimétrica",
                explicacao: "A antissimetria proíbe pares invertidos a menos que a=b.",
                correta: 1
            },
            {
                tema: "Propriedades",
                pergunta: "Se R = {(1,2),(2,3)}, qual par deve ser adicionado para ser Transitiva?",
                opcoes: ["(1,3)", "(2,1)", "(3,2)", "(1,1)"],
                respostaCorreta: "(1,3)",
                explicacao: "Pela transitividade, (1,3) deve existir.",
                correta: 0
            },
            {
                tema: "Propriedades",
                pergunta: "Uma relação Simétrica é necessariamente Reflexiva?",
                opcoes: ["Sim", "Não"],
                respostaCorreta: "Não",
                explicacao: "A simetria não obriga a existência de (a,a).",
                correta: 1
            },
            {
                tema: "Propriedades",
                pergunta: "Qual propriedade é satisfeita pela relação vazia (∅)?",
                opcoes: ["Todas", "Apenas Reflexiva", "Transitiva e Simétrica, mas não Reflexiva", "Apenas Simétrica e Antissimétrica"],
                respostaCorreta: "Transitiva e Simétrica, mas não Reflexiva",
                explicacao: "A reflexiva exige pares (a,a), que não existem no conjunto vazio.",
                correta: 2
            },
            {
                tema: "Imagem",
                pergunta: "Para R = {(2,4),(4,8),(6,12)}, qual é a Imagem?",
                opcoes: ["{2,4,6}", "{4,8,12}", "{2,8,12}", "{4,6,8}"],
                respostaCorreta: "{4,8,12}",
                explicacao: "A imagem é o conjunto dos segundos elementos.",
                correta: 1
            },
            {
                tema: "Par Ordenado",
                pergunta: "Em um par ordenado, a ordem importa?",
                opcoes: ["Não importa", "Depende se for simétrica", "Sim, (a,b) ≠ (b,a)", "Apenas se a=b"],
                respostaCorreta: "Sim, (a,b) ≠ (b,a)",
                explicacao: "A ordem é fundamental em pares ordenados.",
                correta: 2
            },
            {
                tema: "Par Ordenado",
                pergunta: "O que forma um par ordenado (x, y)?",
                opcoes: ["Imagem da função", "Domínio", "Subconjunto de A", "Dois elementos com ordem definida"],
                respostaCorreta: "Dois elementos com ordem definida",
                explicacao: "Um par ordenado expressa dois valores em posição específica.",
                correta: 3
            },
            {
                tema: "Plano Cartesiano",
                pergunta: "O ponto (2,8) indica que o valor de X e Y são:",
                opcoes: ["A=8, B=2", "A=2, B=8", "A=10, B=10", "A=4, B=4"],
                respostaCorreta: "A=2, B=8",
                explicacao: "O primeiro elemento é X e o segundo é Y.",
                correta: 1
            },
            {
                tema: "Produto Cartesiano",
                pergunta: "Se A={a,b}, qual é um par válido no produto A×A?",
                opcoes: ["{a,b}", "a + b", "(b,a)", "(a)"],
                respostaCorreta: "(b,a)",
                explicacao: "Pares ordenados têm dois elementos e pertencem ao produto cartesiano.",
                correta: 2
            },
            {
                tema: "Relações",
                pergunta: "Na relação definida por 'y é o dobro de x', qual par pertence à relação?",
                opcoes: ["(1,1)", "(4,2)", "(3,6)", "(5,5)"],
                respostaCorreta: "(3,6)",
                explicacao: "6 é o dobro de 3, logo (3,6) pertence.",
                correta: 2
            }

        ];
    }
}

export default Perguntas; // <-- EXPORTAÇÃO CORRETA