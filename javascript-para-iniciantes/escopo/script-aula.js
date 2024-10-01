"use strict";

var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro); // Erro, carro is not defined

if (false) {
  const mes = "dezembro";
  console.log(mes);
}

{
  var carro2 = "fusca2";
  const ano = 2018;
}
console.log(carro2);
//console.log(ano);

//for (let i = 0; i < 10; i++) {
//  console.log(`Numero ${i}`);
//};

const semana = "Sexta";
//semana = 'Quinta'

console.log(semana);

const data = {
  ano: 2018,
  mes: "Dezembro",
};
