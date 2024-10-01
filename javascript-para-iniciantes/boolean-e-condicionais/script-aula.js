var possuiGraduação = false;
var possuiDoutorado = true;

if (possuiDoutorado) {
  console.log("possui Doutorado");
} else if (possuiGraduação) {
  console.log("é verdadeiro");
} else {
  console.log("é falso");
}

var nome = "";

if (nome) {
  console.log(nome);
} else {
  console.log("nome não encontrado");
}

if (!possuiGraduação) {
  console.log("Não possui");
}

var x = 10;

console.log(x !== 11);

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;

console.log(condicional2);

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para o sol.");
    break;
  case "Verde":
    console.log("Olhe para a Floresta.");
    break;
  default:
    console.log("Feche os olhos.");
}
