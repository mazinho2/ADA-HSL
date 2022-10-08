class Veterinario {

    nome:string;
    clinica:string;
    cpf:number;
    idade:number;
    sexo:string;
    protected crmv:number;

    constructor(crmv:number, nome:string, clinica:string, cpf:number, idade:number, sexo:string){
        this.nome = nome;
        this.clinica = clinica;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.crmv = crmv;
    }

    info(){
        console.log(`CRMV: ${this.crmv} \nNome: ${this.nome} \nClinica: ${this.clinica}`,
                    `\nIdade: ${this.idade} \nSexo: ${this.sexo} \nCPF: ${this.cpf}`)
    }
}
class Especialista extends Veterinario{

    especialidade:string;
    formacao:string;

    constructor(crmv:number, nome:string, clinica:string, cpf:number, idade: number, sexo:string,
                 especialidade:string, formacao:string){
        
        super(crmv, nome, clinica, cpf, idade, sexo);
        this.especialidade = especialidade;
        this.formacao = formacao;

    }

    info(){
        console.log(`CRMV: ${this.crmv} \nNome: ${this.nome} \nClinica: ${this.clinica} \nEspecialidade: ${this.especialidade}`,
                 `\nFormacao: ${this.formacao} \nIdade: ${this.idade} \nSexo: ${this.sexo} \nCPF: ${this.cpf}`);
    }
}

