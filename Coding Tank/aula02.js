// Estruturas condicionais 
// Define condições para algo acontecer

// Tenho a idade de uma pessoa
const idade = 21; 

//Quero checar se esta pessoa é maior de idade
// if => indica condicional
// () => dentro dos parêntes ficam as condições
// {} => dentro das chaves fia o bloco de instruções que serão executadas 
// caso as condições sejam cumpridas
if (idade >= 18) {
    console.log("É maior de idade.");
    console.log('A condicional passou.');
}

console.log('\n')
// operadores de comparação:
// > maior que 
// < menor que 
// = igual a (comparando valores)
// == igual a (comparando valores e tipos)
// >= maior ou igual a 
// <= menor ou igual a
// != diferente de (comparando valores)
// !== diferentes de (comparando valores e tipos)

const idade2 = prompt(`Informe sua idade`);
if (idade2 >= 18) {
    console.log("sua idade é", idade2, typeof idade)
    console.log("É maior de idade.")
    console.log("A condicinoal passou.")
} else{
    console.log("Idade é menor de 18")
}

console.log('\n')
if (idade2 == 18) {
    console.log('Idade é 18!')
} else if (idade2 > 18 ){
    console.log("É maior que 18")
} else {
    console.log('É menor que 18')
}

console.log('\n')

const idade3 = parseFloat(prompt("Insira sa idade"));
const pais = prompt('Insira seu país').toUpperCase().trim();
//toUpperCase() -> capital
//trim() -> apaga espaço
if(pais =='BRASIL') {
    if (idade3 >= 18) {
        console.log("É maior de idade.")
    } else {
        console.log("É menor de idade.")
    }
    console.log('É Brasil!!')
}else if(pais == 'EUA') {
    if (idade3 >= 21){
        console.log("É maior de idade.")
    } else if (idade3 >= 16) {
        console.log('É menor de idade, mas pode tirar carteira.')
    } else {
        console.log("É menor de idade")
    }
    console.log('É EUA!!!')
} else {
    console.log('Where the fuck are you from;')
}


// Operadores && e || (and e or)
// Cachorros com mais de 10 anos tem que tomar uma vacina e 
//gatos com mais de 8 anos também precisam de tomar vacina

const animal = prompt("Escreve se seu bicho é um cachorro ou gato").toUpperCase().trim();
const idade4 = parseFloat(prompt('Escreva a idade do seu bicho.'))
const mensagem = "Tem que tomar vacina."

if (animal == 'CACHORRO' && idade4 >= 10){
    console.log("Seu cachorro precisa tomar vacina.")
    console.log(mensagem)
} else if (animal == 'GATO' && idade4 >= 8) {
    console.log("Seu gato precisa tomar vacina.")
    console.log(mensagem)
} else if (animal == "CACHORRO" || animal == 'GATO') {
    console.log("Seu", animal.toLowerCase()     ,"não tem idade de tomar vacina.")
} else {
    console.log("Não temos info sobre a vacinação de", animal)
}


console.log("\n")
// Switch: cadeia explícita de condicionais que vai checar diversos casos que podem ser encontrados.
// switch => indica que é esta cadeia
// () => dentro dos parênteses teremos o dado que será analisado
// {} => dentro das chaves teremos o bloco de instruções 
// case <valor>: => indica um novo caso (valor não está escrito em tags)
// break => finaliza o bloco de instruções de um determinado caso

// logo abaixo da declaração de case, inicia-se o bloco de instruções que será executado caso entre naquela condição

const animal2 = prompt("Insira um animal");

switch (animal2) {
    case 'cachorro': 
        console.log('é um cachorro');
        console.log('latido');
        break;
    case 'gato':
        console.log('é um gato');
        console.log('miado');
        break;
    case 'vaca':
        console.log('é uma vaca');
        console.log('mugido')
        break;
    case 'cavalo':
        console.log('é um cavalo');
        console.log('relincho');
        break;
    default:
        console.log('Não conheço este animal');
        break;
}

const num = parseFloat(prompt('Digite um número'));

switch(num > 3) {
    case true:
        console.log('maior que 3');
        break;
    case false:
        console.log('menor ou igual a 3');
        break;
    default:
        console.log('nem tem como chegar aqui');
        break;
}