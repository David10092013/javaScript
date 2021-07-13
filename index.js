import { ContaPoupanca } from './ContaPoupanca.js';
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const clienteRicardo = new Cliente('Ricardo', 11122233309);
const contaPoupancaDoRicardo = new ContaPoupanca(50, clienteRicardo, 1001);
const contaCorrenteDoRicardo = new ContaCorrente(1001, clienteRicardo);

console.log('---------------- antes')
console.log('conta poupanca', JSON.stringify(contaPoupancaDoRicardo, null, 2))
console.log('conta corrente', JSON.stringify(contaCorrenteDoRicardo, null, 2))

// deposita 500
contaCorrenteDoRicardo.depositar(500);

// saca 100
contaCorrenteDoRicardo.sacar(100);

console.log('---------------- depois')
console.log('conta poupanca', JSON.stringify(contaPoupancaDoRicardo, null, 2))
console.log('conta corrente', JSON.stringify(contaCorrenteDoRicardo, null, 2))


