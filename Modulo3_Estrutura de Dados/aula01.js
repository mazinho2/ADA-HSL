// Primeira estrutura de dados -> o array
const array = [15, 12, 21, 24, 17, 18];

// A manipulação abaixo é uma manipulação considerado 
// está estrutura como um PILHA de dados

const pilha = [...array];

// Adicionando um novo elemento à pilha
pilha.push(45);

// Retirar um elemento do topo da pilha
let elem = pilha.pop();
console.log(`Elemento removido: ${elem}`);
console.log(pilha);

elem = pilha.pop();

console.log(`Elemento removido: ${elem}`);
console.log(pilha);

//Intuição do conceito de pilha -> pilha de excução

function mostraPalavraRecursiva(palavra){
    if (palavra =='') return;
    console.log(palavra); // Empilhando chamada
    mostraPalavraRecursiva(palavra.substring(1));
}

function mostraPalavraRecursiva2(palavra){
    if (palavra =='') return;
    mostraPalavraRecursiva(palavra.substring(1));
    console.log(palavra); // Desempilhando chamada
}

console.log('Veja a diferença dos dois:')
mostraPalavraRecursiva("Lucas");
console.log('------------')
mostraPalavraRecursiva2("Lucas");

// fatorial 

function fatorial(num){
    result = 0;
    if (num == 0 || num == 1){
        return 1;
    }
    else{ 
        return n*fatorial(num-1);
    }
}

// Descobrir a soma de todos os elementos do array abaixo
const nums = [1, 3, [2, 3, 5], [12, [[45, 6, 23]], 2, 7, 8, [1, 3, 9]]]

function somaArrayRecursiva(array){
    let soma = 0;
    for (let elem of array) {
        if (typeof elem =='number') {
            soma += elem;
        } else {
            soma += somaArrayRecursiva(elem);
        }
    }

    return soma;
}

console.log(`A soma do array nums é: ${somaArrayRecursiva(nums)}`);


// Criar uma classe pilha
class Pilha {
    constructor(maximo = 10){
        this.array = [];
        this.total_elementos = 0;
        this.maximo_elementos = maximo;
    }

    empilhar(num){
        if(this.total_elementos >= this.maximo_elementos) {
            console.error('Pilha está cheia! Não é possível adicionar masi elementos.')
        }

        this.array.push(num);
        this.total_elementos += 1;
    }

    desempilhar() {
        if (this.total_elementos == 0) {
            console.error("Pilha está vazia! não é possível retirra mais elementos dela.")
            return;
        }

        const removido = this.array.pop();
        console.log(`O elemento removido foi: ${removido}`);
        this.total_elementos -= 1;
    }
}

const array_inicial = [4, 5, 6, 7, 8];
const pilhaObj = new Pilha(5); 

for (let num of array_inicial) {
    pilhaObj.empilhar(num);
    console.log(pilhaObj.array)
}

pilhaObj.empilhar(6)


// A manipulação abaixo é uma manipulaçã oconsiderando
// esta estrutura como um PILHA de dados

const alunos = ['Marcia', 'Karen', 'Gwang', 'Mateus', 'Beatriz'];

const fila = [...alunos];

//Adicionando um novo elemento à fila:
fila.push('Gustavo');
console.log(fila);

// Retirar um elemento do início da fila;
elem = fila.shift();
console.log(`Aluno atendido: ${elem}`)
console.log(fila);

//
class Fila{
    constructor(maximo = 10) {
        this.array = [];
        this.total_elementos = 0;
        this.maximo_elementos = maximo;
    }

    adicionar(pessoa){
        if(this.total_elementos >= this.maximo_elementos) {
            console.error('Fila está cheia! Não é possível atender mais pessoas.')
        }

        this.array.push(pessoa);
        this.total_elementos += 1;
    }

    atender() {
        if (this.total_elementos == 0) {
            console.error("Fila está vazia! Não tem mais pessoas para atender.")
            return;
        }

        const atendido = this.array.shift();
        console.log(`A pessoa atendida é: ${atendido}`);
        this.total_elementos -= 1;
    }
}

const pessoas = ['Marcia', 'Karen', 'Gwang', 'Mateus', 'Beatriz'];

const row = new Fila()

for (let pes of pessoas){
    row.adicionar(pes);
    console.log(row.array);
}

for (let i=0; i < 11; i++){
    row.atender()
    console.log(row.total_elementos)
}

