console.log('\nTrabalhando com condicionais');
const listaDeDestinos = new Array('Salvador', 'Sao paulo', 'Rio de Janeiro');
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Salvador';

listaDeDestinos.push('Curitiba');

console.log('\n Destinos Possiveis');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
/*while(contador < 3){
    

    if(listaDeDestinos[contador] == destino){
        
        destinoExiste = true;
         break;
    };
        
    contador += 1;   
}*/

console.log('Destino existe:', destinoExiste);
if (podeComprar && destinoExiste) {
  console.log('Boa viagem!');
}

for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
  }
}
