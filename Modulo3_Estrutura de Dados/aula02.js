class No{
    constructor(numero) {
        this.info = numero;
        this.prox = undefined;
    }
}

class ListaEncadeada {  // representa lista de NOs
    constructor() {
        this.cabeca = undefined;
        this.total_elementos = 0;
    }

    inserir(numero) {
        const novo = new No(numero);

        novo.prox = this.cabeca;
        this.cabeca = novo;
        this.total_elementos++;
    }

    mostra() {
        let no_aux = this.cabeca; // inicialização
        let string = ''
        while (no_aux != undefined) { // comparação
            string += `${no_aux.info} ->`
            no_aux = no_aux.prox; // atualização
        }
        string += ' null'
        console.log(string)
    }

    remove(numero) {
        let no_aux;
        let no_ant = undefined;
        if (this.cabeca.info == numero) {  // quando é o primeio número da lista
            this.cabeca = this.cabeca.prox;
            return;
        }
        else { //quando não é o primeiro número da lista
            for (no_aux = this.cabeca; no_aux != undefined; no_aux = no_aux.prox) {
                if (no_aux.info == numero) {
                    no_ant.prox = no_aux.prox;
                    return no_aux;  //
                }
                else {no_ant = no_aux;}
            }

        }
        
        // quando não está na lista
        console.log("O número não está na lista");
        return;
    }
}

const lista = new ListaEncadeada();
lista.mostra();
lista.inserir(6);
lista.mostra();
lista.inserir(9);
lista.mostra();
lista.inserir(8);
lista.mostra();
lista.inserir(7);
lista.mostra();
lista.inserir(10);
lista.mostra();
