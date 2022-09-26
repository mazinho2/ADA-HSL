// Variáveis

// var quantidade; -> A declaração é trazida aqui para cima pleo hoiting

console.log(quantidade); // Hoisting

// Tipo de Variáveis
var quantidade = 1; //Inteiro
var custo = 10.99; //Float (reais)
var fez_Exercicio = true; //Boolean
var mensagem = "Oi, tudo bem? Cadê o dinheiro que você tava me devendo?" //String

// Input / Output
var nota1 = parseFloat(prompt("Digite a sua primeira nota:"))
var nota2 = parseFloat(prompt("Digite a sua segunda nota:"))

console.log((nota1 + nota2)/2)

console.log(10 + '18' + 21); // prioriza a concatenação

// let/const
let score;
console.log(score)

// Funções
// f(x) = x^2 (definindo / declarando / criando)
// f(2) => 4 (chamada/invocação)

// Definition
function square(x) {
    return x**2;
}

// Chamada /Invocação
console.log(square(2));

let quadrado_de_dois = square(2);
console.log(quadrado_de_dois)


// Exemplo (função que soma dois números)
function soma_numeros(n1, n2) {
    return n1 + n2;
}

console.log(soma_numeros(5, 3))
console.log(soma_numeros(2, 7))


// Exemplo (função sem retorno)
function solicita_confirmacao() {
    confirm("Você tem cereza qeu deseja realizar esta operação?");
}

solicita_confirmacao();

console.log("fucntion2")

function solicita_confirmacao(mensagem) {
    confirm(mensagem);
}

solicita_confirmacao("Luíz é o melhor professor do mundo?")

// Função serve para:
//  - Organizar o código
//  - Definir/Separar regras de negócio ou lógicas complexas do código normal
//  - Evitar repetição de código
//  - REalizar operações matemáticas e retorná-las

const print = console.log; //print é uma função agr

console.log(print);
print("ola, gente")

// Função anônima
let funcaoSemNome = function () {
    console.log("Não faço nada...")
}

funcaoSemNome();


// Arrow-function
let funcaoArrow = () => {
    console.log("Função funcaoArrow. . . ")
}

funcaoArrow();

