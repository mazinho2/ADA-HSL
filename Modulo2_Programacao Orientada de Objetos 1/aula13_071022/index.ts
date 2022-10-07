class Veterinario{

    nome:string='';
    especialidade:string='';
    idade:number=0;
    sexo:string='';
    formacao:string='';
    clinica:string='';

    private salario:number=0;
    private crmv:number=0;

    constructor(crmv:number, nome:string, clinica:string, especialidade:string, 
                formacao:string, idade: number, sexo:string, salario:number){
        this.crmv = crmv;
        this.nome = nome;
        this.clinica = clinica;
        this.especialidade = especialidade;
        this.formacao = formacao;
        this.idade = idade;
        this.sexo = sexo;
        this.salario = salario;

    }

    info(){
        console.log('CRMV: ${} \nNome: ${} \nClinica: ${} \nEspecialidade: ${}',
                 '\nFormacao: ${} \nIdade: ${} \nSexo: ${} \nSalário: ${}')
    }
}