import { ContaPoupanca } from './ContaPoupanca.js';
import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const clienteRicardo = new Cliente('Ricardo', 11122233309);
const contaPoupancaDoRicardo = new ContaPoupanca(50, clienteRicardo, 1001);
const contaCorrenteDoRicardo = new ContaCorrente(1001, clienteRicardo);


// deposita 500
contaCorrenteDoRicardo.depositar(500);

// saca 100
contaCorrenteDoRicardo.sacar(100);


console.log(clienteRicardo.nome)
console.log(contaPoupancaDoRicardo)