

class Pessoa {

    constructor(nome, anoDeNascimento, estadoCivil, horoscopo){
        this.nome = nome;
        this.idade = 2022 - anoDeNascimento;
        this.anoDeNascimento = anoDeNascimento;
        this.estadoCivil = estadoCivil;
        this.horoscopo = horoscopo;
    }

    info() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, nasci em ${this.anoDeNascimento}, sou ${this.estadoCivil}, e sou ${this.horoscopo}.`)
    }

    adicionarPessoa() {
        pessoas.push(this);
    }

}

let ma = new Pessoa('ma', 1995, 'solteiro', 'peixe')
ma.info()

console.log(Object.keys(ma))

console.log(Object.values(ma))

for (let attrib in ma) {
    console.log(ma[attrib], attrib)
}



class Individuo {

    constructor(matricula, nome, nascimento, endereco, cpf) {
        this.matricula = matricula;
        this.nome = nome;
        this.nascimento = nascimento;
        this.endereco = endereco;
        this.cpf = cpf;
    }

    info() {
        console.log(this);
    }

    setNome(nome) { //function that changes nome 
        this.nome = nome;
    }

    setCPF(cpf) {
        this.cpf = cpf;
    }
}
