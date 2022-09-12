// A média de altura
// A média de peso
// O IMC de cada uma das pessoas
// O nome da pessoa mais alta e sua altura
// O nome da pessoa mais baixa e sua altura
// O nome da pessoa mais pesada e seu peso
// O nome da pessoa mais leve e seu peso
// O nome da pessoa com o maior IMC e seu valor
// O nome da pessoa com o menor IMC e seu valor

let soma_alt = 0;
let soma_peso = 0;
let imc = [];
let mais_alt = 0
let menos_alt = 0
let maior_peso = 0
let menor_peso = 0
let maior_imc = 0
let menor_imc = 0

const dadosPessoas = [
    ['Ana', 'Paulo', 'Márcia', 'Pedro', 'Beatriz'],
    [1.70, 1.72, 1.62, 1.90, 1.53],
    [80, 90, 61, 84, 49]
]

const dado_len = dadosPessoas[0].length

//cálculo de IMC
for (let i = 0; i < dado_len; i++) {
    imc[i] = dadosPessoas[2][i]/ (dadosPessoas[1][i]*dadosPessoas[1][i]);
    console.log('O IMC do/a', dadosPessoas[0][i], 'é', imc[i]);
}

dadosPessoas[3] = imc;


for (let i = 0; i < dado_len; i++) {
    soma_alt += dadosPessoas[1][i];
    soma_peso += dadosPessoas[2][i];
    
    if (i === 0) {
        mais_alt = i;
        menos_alt = i;
        maior_peso = i;
        menor_peso = i;
        maior_imc = i;
        menor_imc = i;
    } else {
        //mais_alt
        if (dadosPessoas[1][mais_alt] < dadosPessoas[1][i]) {
            mais_alt = i;
        }

        //menos_alt
        if (dadosPessoas[1][menos_alt] > dadosPessoas[1][i]) {
            menos_alt = i;
        }

        //maior_peso
        if (dadosPessoas[2][maior_peso] < dadosPessoas[2][i]) {
            maior_peso = i;
        }

        //menor_peso
        if (dadosPessoas[2][menor_peso] > dadosPessoas[2][i]) {
            menor_peso = i;
        }

        //maior_imc
        if (dadosPessoas[3][maior_imc] < dadosPessoas[3][i]) {
            maior_imc = i;
        }

        //menor_imc
        if (dadosPessoas[3][menor_imc] > dadosPessoas[3][i]) {
            menor_imc = i;
        }
    }
    
}

console.log('A média de altura é', soma_alt/dado_len);
console.log('A média de peso é', soma_peso/dado_len);
console.log(dadosPessoas[0][mais_alt], 'é a pessoa mais alta e sua altura é', dadosPessoas[1][mais_alt]);
console.log(dadosPessoas[0][menos_alt], 'é a pessoa mais baixa e sua altura é', dadosPessoas[1][menos_alt]);
console.log(dadosPessoas[0][maior_peso], 'tem o maior peso e seu peso é', dadosPessoas[2][maior_peso]);
console.log(dadosPessoas[0][menor_peso], 'tem o menor peso e seu peso é', dadosPessoas[2][menor_peso]);
console.log(dadosPessoas[0][maior_imc], 'tem o maior imc e seu imc é', dadosPessoas[3][maior_imc]);
console.log(dadosPessoas[0][menor_imc], 'tem o menor imc e seu imc é', dadosPessoas[3][menor_imc]);