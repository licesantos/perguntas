const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você está experimentando uma nova receita, o que prefere fazer primeiro?",
        alternativas: [
            {
                texto: "Ler todas as instruções cuidadosamente",
    
            },
            {
                texto: "Improvisar e adaptar a receita conforme necessário",
            
            }
        ]
    },
    {
        enunciado: "Se você estiver em um buffet livre, como você aborda a seleção de alimentos?",
        alternativas: [
            {
                texto: "Experimento um pouco de tudo",

            },
            {
                texto: "Escolho apenas os meus pratos favoritos",
                
            }
        ]
    },
    {
        enunciado: "Se você estiver com vontade de experimentar um prato exótico, o que faria?",
        alternativas: [
            {
                texto: "Pesquisar restaurantes especializados nessa culinária na sua cidade.",
                
            },
            {
                texto: " Tentar reproduzir a receita em casa, procurando ingredientes alternativos",
                
            }
        ]
    },
    {
        enunciado: "Se você está se exercitando, que tipo de música você prefere ouvir para acompanhar o ritmo da atividade?",
        alternativas: [
            {
                texto: "Escolho músicas com batidas rápidas e empolgantes para me energizar durante o treino.",
               
            },
            {
                texto: "Opto por músicas mais suaves e relaxantes para me ajudar a manter um ritmo constante e controlado.",
               
            }
        ]
    },
    {
        enunciado: " Quando você está dirigindo sozinho em uma viagem longa, o que você costuma fazer enquanto ouve musica no carro?",
        alternativas: [
            {
                texto: "Canto junto com as músicas e aproveito o momento para relaxar e descontrair",
               
            },
            {
                texto: " Utilizo o tempo para refletir sobre questões pessoais ou planejar atividades futuras enquanto a música me acompanha.",
              
            }
        ]
    },
];
{
     enunciado; "Se você está em um momento de relaxamento em casa, que atividade você geralmente realiza enquanto ouve música?",
    alternativas [
        {
            texto: "Cozinho ou realizo tarefas domésticas enquanto escuto minha playlist favorita para tornar o ambiente mais agradável.",
         
        },
        {
            texto: "Escolho músicas tranquilas e relaxantes para ler um livro ou simplesmente descansar e aproveitar o momento.",
        
        }
    ]
}


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
