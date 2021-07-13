export class Cliente {


  get cpf() {
    return this._cpf;
  }

  get nome() {
    return this._nome;
  }

  set cpf(_cpf) {
    _cpf = _cpf
  }

  set nome(nome) {
    _nome = nome;
  }

  constructor(nome, cpf) {
    this._nome = nome;
    this._cpf = cpf;
  }

}
