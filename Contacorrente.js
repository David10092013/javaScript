export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;

  set Cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }


  get Cliente() {
    return this._cliente;
  }
  _saldo = 0;

  get agencia() {
    return this.agencia;
  }

  get saldo() {
    return this._saldo;
  }

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this._cliente = cliente;
    ContaCorrente.numeroDeContas +=1;
  }
 
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
