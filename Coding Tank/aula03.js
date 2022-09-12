// // Laço de Repetição (for)
// // Existem 3: while, do-while e for
// // While: vai testar se uma condição é antingida e continuar repetindo o bloco de instruções 
// //enquanto satisfazer a condição
// // do-while: vai executar um bloco de instruções e repetir até uma ocndição ser atingida
// // for: vai repetir um bloco de instrução por n vezes

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num = num + 1;
// }

// // while => indicar que é uma laço de repetição while
// // () => condições para o código repetir
// // {} => bloco de instruções que será repetido

// let escolaValida = false;
// const escola = prompt("Informe sua escola").toUpperCase();

// while (escolaValida === false) {
//     switch (escola){
//         case 'A':
//             console.log('Escola A');
//             escolaValida = true;
//             break;
//         case 'B':
//             console.log('Escola B');
//             escolaValida = true;
//             break;
//         case 'C':
//             console.log('Escola C');
//             escolaValida = true;
//             break;
//         default:
//            console.log('Escola não encontrada, por favor insira uma escola válida!');
//            escolaValida = true;
//     }   
// }


// let numero = 0;
// let somatoria = 0;

// do {
//     numero = parseFloat(prompt("Digite um número para ser somado, ou digite 0 para parar"));
//     somatoria = somatoria + numero;
// } while (numero !== 0 && somatoria < 20);

// // while (numero !== 0 && somatoria < 20) {
// //     numero = parseFloat("Digite um núero par aser somado, ou digite 0 para parar");
// //     somatoria = somatoria  numero;
// // }

// console.log('A somatoria é', somatoria);



//Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.


let i = 0;
while (i <= 100) {
    if (i == 0) {
        console.log(i);
        i = i + 1;
    }
    if (i % 3 == 0) {
        if (i % 5 == 0) {   //múltiplo de 3 e 5
            console.log('FizzBuzz');
        } else {    //múltiplo de somente 3
            console.log('Fizz');
        }
    } else if (i % 5 ==0) { //múltiplo de somente 5
        console.log('Buzz');
    } else {    //múltiplo nem de 3 nem de 5
        console.log(i);
    }
    i = i+1;
}

let a = 0
while (a <= 100) {
    if (a % 3 == 0 && a % 5 !== 0) {
        console.log ('Fizz');
    } else if (a % 3 !== 0 && a % 5 == 0) {
        console.log('Buzz');
    } else if (a % 3 == 0 && a % 5 == 0) {
        console.log('FizzBuzz');
    } else {
        console.log(a);
    }
    a = a + 1;
}
