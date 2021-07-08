import { cliente } from './Cliente.js';
import { ContaCorrente } from './Contacorrente.js';

const cliente1 = new cliente('Ricardo', 11122233309);

const cliente2 = new cliente('Alice', 88899977701);

console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);



console.log(contaCorrenteRicardo);

contaCorrenteRicardo.transferir(200, conta2);
console.log(ContaCorrente.numeroDeContas);