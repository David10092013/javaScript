import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Lenovo', 5000, 12345678900);
diretor.cadastrarSenha('123456');

const gerente = new Gerente('Thay', 3000, 12345678901);
gerente.cadastrarSenha('123');


const cliente = new Cliente ("lais",78945612379,"456");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");

console.log(gerenteEstaLogado,diretorEstaLogado,clienteEstaLogado);


/*import { ContaPoupanca } from './Conta/ContaPoupanca.js';
import { ContaCorrente } from './Conta/Contacorrente.js';
import { ContaSalario } from './Conta/ContaSalario.js';

const clienteRicardo = new Cliente('Ricardo', 11122233309);

const contaPoupancaDoRicardo = new ContaPoupanca(50, clienteRicardo, 1001);

const contaCorrenteDoRicardo = new ContaCorrente(clienteRicardo, 1001);
contaCorrenteDoRicardo.depositar(500);
contaCorrenteDoRicardo.sacar(100);

const contaSalarioDoRicardo = new ContaSalario(clienteRicardo)
contaSalarioDoRicardo.depositar(100);
contaSalarioDoRicardo.sacar(50);

console.log('---------------- depois');
console.log('conta poupanca', JSON.stringify(contaPoupancaDoRicardo, null, 2));
console.log('conta corrente', JSON.stringify(contaCorrenteDoRicardo, null, 2));
console.log('cliente.nome', JSON.stringify(clienteRicardo, null, 2));
console.log('conta salario', JSON.stringify(contaSalarioDoRicardo, null, 2));*/
