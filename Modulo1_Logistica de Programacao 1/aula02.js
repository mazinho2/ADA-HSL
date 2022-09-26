// Condicionais

// Exemplo: Fa;a um programa que calcule o IMC com bas e na 
//    altura eno peso do usuário


function calculate_imc (peso, altura) {
    var imc = peso / (altura/100)**2;
    return imc;
}
    return peso/ (altua/100)**2

const peso = parseFloat(prompt('Digite seu peso em kg:'));
const altura = parseFloat(prompt('Digite sua altura em cm:'));
const imc = calculate_imc(peso, altura)


console.log("O seu imc é: ", imc);

// implementação de classificação 

function descobre_categoria(imc){
    if (imc < 18.5) {
        var state = 'Magreza'
    } else if( imc < 25) {      // if (imc >= 18.5 && imc < 25)
        state = 'Normal'
    } else if (imc < 30) {
        state = 'Sobrepeso'
    } else if (imc < 40) {
        state = 'Obesidade'
    } else {
        state = 'Obesidade grave'
    }

    return state
}

const result = 'Você é classificado como ' + descobre_categoria(imc);
console.log(result)
alert(result)

// EStruturas de repetição

let total_usuarios = prompt ("DIgite o total de usuários:");
let cont = 0;

while (cont <total_usuarios) {
    let altura = parseFloat(prompt("Digite a sua altura:"));
    let peso = parseFloat(prompt("Digite o seu peso:"));

    const imc = calculate_imc(peso, altura);

    console.log("O seu IMC é:", imc)

    console.log("Você é classificado como ", descobre_categoria(imc));

    cont++;  // cont += 1 ou cont = cont + 1
}

function resolucao_determianda_por_confirm {
    while(confirm("Deseja calcular o seu IMC?")){
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calculate_imc(peso, altura);

        console.log("O seu IMC é:", imc)

        console.log("Você é classificado como ", descobre_categoria(imc));
    }
}


// resolucao_com_break();

function repeticao_determinada_com_for() {
    for (let cont = 0; cont < 3; cont++){
        let altura = parseFloat(prompt("Digite a sua altura:"));
        let peso = parseFloat(prompt("Digite o seu peso:"));

        const imc = calculate_imc(peso, altura);

        console.log("O seu IMC é:", imc)

        console.log("Você é classificado como ", descobre_categoria(imc));
    }
}


// repeticao_determinada_com_for();

function repeticao_determinada_com_for_continue() {
    
}