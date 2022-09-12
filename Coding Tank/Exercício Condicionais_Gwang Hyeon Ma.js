// Excercício => Condicionais:

// Este exercício dirá se um aluno foi aprovado ou não baseado em 4 notas e na escola que ele estuda.

// Regras do Exercício
// A escola A aprova alunos com nota total superior a 60
// A escola B aprova alunos com nota total superior a 70
// A escola C aprova alunos com nota total superior a 60 desde que não tenham recebido nenhuma nota inferior a 10

// Implementação
// Crie um programa que leia a escola para qual o aluno pertence, 
//e 4 notas e imprima APROVADO ou REPROVADO baseado nas regras do exercício. 
// Se o aluno não pertencer as escolas A, B ou C o programa deve imprimir uma mensagem indicando que a escola não foi encontrada.

const escola = prompt('Qual é a escola que frequenta?').toUpperCase();
const nota1 = parseFloat(prompt('Qual é a primeira nota?'));
const nota2 = parseFloat(prompt('Qual é a segunda nota?'));
const nota3 = parseFloat(prompt('Qual é a terceira nota?'));
const nota4 = parseFloat(prompt('Qual é a quarta nota?'));

T_nota = nota1 + nota2 + nota3 + nota4;

switch (escola) {
    case 'A':
        if (T_nota > 60) {
            console.log('APROVADO');
        } else {
            console.log('REPROVADO');
        }
        break;
    case 'B':
        if (T_nota > 70) {
            console.log('APROVADO');
        } else{
            console.log('REPROVADO');
        }
        break;
    case 'C':
        if (T_nota > 60 && nota1 >= 10 && nota2 >= 10 && nota3 >= 10 && nota4 >= 10) {
            console.log('APROVADO');
        } else {
            console.log('REPROVADO');
        }
        break;
    default:
        console.log('A escola não foi encontrada');
        break;
}