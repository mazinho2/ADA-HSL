// // O comando que vamos utilizar para exibir coisas no nosso console será o "console.log"
// console.log('Olá mundo!');

// // Se eu quiser exibir uma alerta eu vou utilizar o comando "window.alert"
// window.alert("Olá todos!");

// // Soma
// console.log(13 + 8);
// //Subtração
// console.log(13 - 8);
// //Multiplicação
// console.log(13 * 8);
// //Divisão
// console.log(8 / 2);
// //Resto de divisão
// console.log(9 % 2);

// //Variáveis alocam um espaço de memória par representar algum valor.
// //1. var para definir que é uma variávael
// //2. dar nome da variável
// //3. sinal de igual(=) para indicar atribuição
// //Nota: textos devem sempre estar entre "" ou ''
// var olaMundo = 'Olá, mundo!';
// console.log(olaMundo);

// var soma = 5 + 2;
// console.log(soma);

// var subtra = soma - 3;
// console.log(subtra);

// // Os programas modernos vão definir as variáves com const e let.
// // const são dados constantes e que não podem ser modificados.
// // let são dados maleáveis e que permitem modificação.
// const num = 5;
// let texto = 'Texto aleatório';
// const ehVerdade = true;
// const numeroFalso = '5';
// const segundoNumero = 1;

// console.log(num);
// console.log(texto);

// texto = "Novo texto";
// console.log(texto);
// console.log(texto + num + ehVerdade);
// console.log(numeroFalso + segundoNumero);
// console.log(parseFloat(numeroFalso) + segundoNumero);

// const textoInserido = prompt('Insira um texto.');
// console.log(textoInserido);


// //Calculadora: o usuário vai inserir um número, depois outro número e 
// const primeiroNumero = prompt('Insira um número');
// const outroNumero = prompt('Insira outro número');
// const sum = primeiroNumero + outroNumero;
// const sum2= parseFloat(primeiroNumero) + parseFloat(outroNumero)

// console.log(sum);
// console.log(sum2);

// console.log(primeiroNumero, 'mais', outroNumero, 'é igual a', sum2);

//Tipos primitivos de variáveis:
// undefined: naõ tem tipo nem valor
// boolean: pode ser verdadeiro ou falso (true/false)
// string: texto
// number: número

// Tipos complexos de variáveis: 
// function: funções 
// object: objetos 

// string:
const str = 'texto';

console.log(typeof str);

// number
const num = 1;

console.log(typeof num, num)

//boolean:
const verdadeiro = true;
const falso = false;

console.log(typeof verdadeiro, verdadeiro);
console.log(typeof falso, falso);

//undefined:
let semValor;

console.log(typeof semValor, semValor);

// function: 
const funcao = function(){};
const outraFuncao = () => {};

console.log(typeof funcao, funcao);
console.log(typeof outraFuncao, outraFuncao);