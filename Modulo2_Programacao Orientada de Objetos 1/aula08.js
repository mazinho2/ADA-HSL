// Window é a representação do escopo global (ou seja, da minha janela do meu brows)

console.log('Este é o valor do this no escopo global:', this);

function soma(a,b) {
    console.log('Este é o valor do this no escopo de uma função:', this)
    return a + b;
}

soma(5,6);

// Funções dentro de objetos
const aluno_do_luis = {
    nome: "Vinicius JAques",
    total_presenca: 5, 
    total_pontual: 2,
    total_xp_pp() {
        return this.total_presenca*40 + this.total_pontual*30;
    }
}


function Aluno(nome, total_pr = 0, total_)

console.log("O total de XP de presneça do Vinicius é", aluno_do_luis.total_xp_pp())

const aluno_do_luis2 = cria_aluno("Mateus Miquelino", 7);