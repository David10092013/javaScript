
import { contaPoupanca } from '../Contapoupanca.js';
import { cliente } from './Cliente.js';
import { ContaCorrente } from './Contacorrente.js';

const cliente1 = new cliente('Ricardo', 11122233309);



const ContaPoupanca = new contaPoupanca(50,cliente1,1001);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar (100);

const contaPoupanca = new ContaPoupanca(50, cliente1,1001);
console.log(contaPoupanca);

console.log(contaCorrenteRicardo);

