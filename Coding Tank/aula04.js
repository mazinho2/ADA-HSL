// for => é um laço de número de repetições finitas e definidas
// () => vai ser onde as condições de repetição vão ser definidas
// (inicialização; condição de parada; tamanho do passo)

// let i=0 => inicialização da variável para repetição
// i < 10 => condiação de parada
// i++ => tamanho do passo

// for (let i=0; i <10; i++) {
//     console.log(i);
// }

// // 5 primeiros múltiplos de 3
// for (let a=1; a<6; a++) {
//     console.log(a*3);
// }

// // números de 10 a 0
// for (let b = 10; b >=0; b--) {
//     console.log(b);
// }

// //números pares até 20
// for (let c = 10; c <=20; c += 2) {
//     console.log(c);
// }

// Vetor (=Array)
// é uma variável com comportamento singula, pois ela armazena diversos valores

const vetor = ['João', 'Alan', 'Andressa', 'Beatriz', 'Bianca', 'Bruno'];

// console.log(vetor);

// for (i=0; i<4; i++) {
//     console.log('vetor', i, 'é igual a', vetor[i]);
// }

// // length => é a propriedade que indica quantos itens existem no meu vetor
// console.log(vetor.length)

// for (i=0; i < vetor.length; i++) {
//     console.log('vetor', i, 'é igual a', vetor[i]);
// }


// For-in : percorrer todos os indíces da array
// for => indica que é um laço do tipo for
// () => parâmetros da repetição
// index => nome da variável que vai representar o índice
// in => indica que vai percorrer índices
// vetor => variável que armazena o vetor a ser percorrido
for (index in vetor) {
    console.log(index)
    console.log(vetor[index])
}

// For-of : percorre todos os valores do vetor
// Absolutamente igual ao for-in exceto que a substituição de 'in'
// of => indica que vai percorrer valores 
for (value of vetor) {
    console.log(value);
}


// // Exercício da escola!!!

// const escola = prompt("informe sua escola").toLocaleUpperCase();
// const notas =[];
// let somatoria = 0;
// const aprovado = 'APROVADO'
// const reprovado = 'REPROVADO'
// let menorQue10 = false;

// for (let i=0; i < 4; i++) {
//     notas[i] = parseFloat(prompt("Informe sua nota referente ao módulo " + (i+1)));
//     somatoria += notas[i];

//     if (notas[i] <= 10) {
//         menorQue10 = true;
//     }
// }

// switch (escola) {
//     case 'A':
//         if (somatoria > 60) {
//             console.log(aprovado);
//         } else {
//             console.log(reprovado);
//         }
//         break;
//     case 'B':
//         if (somatoria > 70) {
//             console.log(aprovado);
//         } else{
//             console.log(reprovado);
//         }
//         break;
//     case 'C':
//         if (somatoria > 60 && !menorQue10) {
//             console.log(aprovado);
//         } else {
//             console.log(reprovado);
//         }
//         break;
//     default:
//         console.log('A escola não foi encontrada');
//         break;
// }


// Sequência de Fibonacci (imprimindo os 10 primeiros valores)

let fibo = []

for (let i=0; i < 10; i++) {
    if (fibo.length < 2) {
        fibo[i] = 1
    } else {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    console.log(fibo[i])
}
console.log(fibo)

// Matriz (em JavaScript) nada mais é que um vetor de vetores 
const matriz = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

console.log(matriz[1][1])