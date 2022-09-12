//Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.

//Resolução 1
console.log('Resolução 1 \n');

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

console.log('\n')

//Resolução 2
console.log('Resolução 2 \n');
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
