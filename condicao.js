console.log('Trabalhando com condicionais');
const listaDeDestinos = new Array('Salvador', 'Sao paulo', 'Rio de Janeiro');
const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

listaDeDestinos.push('Curitiba');

console.log(listaDeDestinos[1]);

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log('Comprador maior de idade');
  listaDeDestinos.splice(1, 1);
} else {
  console.log('Comprador nao e maior de idade');
}
console.log('Embarque: \n\n ');
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log('Boa Viagem');
} else {
  console.log('Voce nao pode embracar');
}

console.log(listaDeDestinos);
