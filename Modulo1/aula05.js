// Funções de Alta Ordem
// É uma função que retorna outra funçõa ou 
// uma função que receb outra como parâmetro

// São funções que vem com qualquer "Objeto" do tipo Array
const notas = [4.5, 6.7, 8.9, 2.3, 2.6];
notas.sort((a, b) => b - a); //sorting decrescent order

console.log(notas);



//function em outro function
function print_conditional(numero, callback = () =>{}) { // garante que callback é uma função
    if (numero > 4)
        callback();
    else
        console.log("Não entrou na condição!");
}

//ex
for (let i=0; i<6; i++){
    console.log(i)
    print_conditional(i, () => console.log("Entrou na condição!"));

}


//
function desejar_feliz_aniversario(data, parabens) {
    // se chegou na data do aniversário
    // chama o parabens (é uma função)  
}


// foreach
notas.forEach((value, index) => {
    console.log(index, value)
})

// Exemplo de implementação do foreach "por tras dos panso"
const forEach2 = function(func) {
    for(let i = 0; i < notas.length; i++) {
        func(notas[i], i, notas)
    }
}



//Como faríamos sem objetos
const alunos = [
    ["Luís", 11111, 7.1, 1231231235],
    ["Caroline", 22222, 8.2, 1231231236],
    ["Andressa", 33333, 8.3, 1231231237]
];

const array_obj_alunos = [
    {
        "nome": "Luís",
        "matricula": 11111,
        "coef_rend": 7.1,
        cpf: 1231231235,     // pode ter ' ' ou não
        notas: [3, 5, 6]
    },
    {
        "nome": "Caroline",
        "matricula": 22222,
        "coef_rend": 8.2,
        cpf: 1231231236,
        notas: [3, 5, 6, 7]   
    },
    {
        "nome": "Andressa",
        "matricula": 33333,
        "coef_rend": 8.3,
        cpf: 1231231237,
        notas: [8, 9, 9.4, 8.3] 
    }
]


function solicita_informacoes(alunos) {
    const nome= prompt("Digite o seu nome");
    const matricula= prompt("Digite a sua matricula");
    const coef_rend= prompt("Digite o seu coeficiente e rendimento");
    const cpf= prompt("Digite o seu cpt");

    alunos.push({
        "nome": nome,
        matricula: matricula,
        "coef_rend": coef_rend,
        cpf: cpf
    })
}


console.log(array_obj_alunos);
solicita_informacoes(array_obj_alunos);
console.log(array_obj_alunos);


//find-> encontra o primeiro elemento do array que respeita a condição passada

//retorna o primeiro objeto encontrado cujo nome vem antes de F
console.log(array_obj_alunos.find((obj) => { // serve para verificar se existe o 'value'
    return obj.nome < "F";
}))

//retorna o primeiro objeto encontrado cuja média da nota é maior que 6
console.log(array_obj_alunos.find((obj) => {
    let soma = 0;
    for (let nota of obj.notas) {
        soma += nota;
    }

    const media = soma/obj.notas.length;
    return media > 6
}))

//retorna index do primeiro objeto encontrado
console.log(array_obj_alunos.findIndex((obj) => {
    let soma = 0;
    for (let nota of obj.notas) {
        soma += nota;
    }

    const media = soma/obj.notas.length;
    return media > 6
}))



// every() -> retorna true se todos elementos do array respeitam a condição

console.log(array_obj_alunos.every((obj) => obj.nome < 'F')); 
console.log(array_obj_alunos.every((obj) => obj.nome < 'M')); 
        // já que colocou numa linha só não precisa usar 'return'

// some()   -> retorna true se pelo menos 1 elemento do array respeta a condição
console.log(array_obj_alunos.some((obj) => obj.nome < 'F')); 


// includes() -> retorna true se um elemento existe dentro de um array
const palavra = 'abacaxi';

console.log(palavra.includes("a"));

const letra = "a".toUpperCase();

console.log(palavra.includes(letra));


// split() -> converter string para array
console.log(palavra.split());


// para converter string para array -> necessário quando se quer alterar a string
// Devemos convertê-la para array, atualizá-la e trazê-la de volta como sgring
let string_inicial ='';
for (let i in palavra) {
    palavra[i] = '_';
    string_inicial += "_";
} 

console.log(palavra) //-> a palavra permanece 'abacaxi' 

console.log(string_inicial); //-> retorna '_______'

const array_string = string_inicial.split("");
console.log(array_string); 


// trocar _ em todas as posições em que existir a letra digitada na minha palavra original
if (palavra.includes(letra)) {
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i] == letra) {
            array_string[i] = letra;
        }
    }
    console.log("Acertou!");;
}
else {
    console.log("Errou!");
}

console.log(array_string);

// Converter um array em uma string. .. 
console.log(array_string.join(''));
console.log(array_string.join());