// Classe conta bancária
class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    // metodo Get 
    get saldo(){
        return this._saldo;
    }

    // metodo Set
    set saldo(valor){
        this._saldo = valor;
    }

    // Função de sacar um valor
    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    
    // Função de deposistar um valor
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

}




// Classe que cria uma conta corrente filha da classe de conta bancária. A classe filha herda as propiadades da classe pai
class ContaCorrente extends ContaBancaria {

    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
            this.tipo = 'corrente';
            this._cartaoCredito = cartaoCredito;
    }

    // Get
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    // Set
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}


// Classe filha de conta bancária. A classe filha herda as propiadades da classe pai
class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
            this.tipo = 'Poupanca';
    }
}


// Classe filha de conta bancária. A classe filha herda as propiadades da classe pai
class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
            this.tipo = 'Universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação negada';
        }
        // O _saldo pode ser acessado na classe filha, a propriedade está no pai
        this._saldo = this._saldo - valor;
    }
}