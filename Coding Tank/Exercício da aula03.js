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


//Resolução da Aula
let num = 0;

while(num <= 100) {
    if (num % 3 === 0 && num % 5 ===0) {
        console.log('FizzBuzz');
    } else if (num % 3 ===0) {
        console.log('Fizz');
    } else if (num % 5 ===0) {
        console.log('Buzz');
    } else {
        console.log(num);
    }
    num = num + 1;
}

//Resolução Nayara
let numero2 = 0

while (numero2 < 100){
    switch (numero2 !==0){
        case (numero2%15===0):
            console.log('FizzBuzz');
            break
        case (numero2%3===0):
            console.log('Fizz');
            break
        case (numero2%5===0):
            console.log('Buzz');
            break    
        default:
            console.log(numero2);
            break;
    }
    
    numero2 = numero2 + 1
}