export class Cliente {

  get cpf() {
    return this._cpf;
  }

  get nome() {
    return this.nome;
  }
 set cpf(_cpf){

  _cpf = _cpf
 }

 set nome(nome){

  nome = nome
 }



  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
