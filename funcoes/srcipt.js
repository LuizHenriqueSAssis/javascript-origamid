function areaQuadrado(lado){
 return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi());

function imc(peso, altura ){
  var     imc = peso /(altura * altura);
  return imc;
}

console.log(imc(80, 1.71));

function corFavorita (cor) {
  if (cor === 'azul'){
    return 'Eu gosto do céu';
  }else if( cor === 'verde') {
    return 'Eu gosto de Mato'
  }else {
    return 'eu não gosto de cores'
  }
}

console.log(corFavorita('azul'));


function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number'){
    return 'Por favor prencha um numero'
  }else if(idade >= 60){
    console.log('É idososo');
    return true;
  }else {
    return false
  }
  console.log(idade)
}

console.log(terceiraIdade(70))
terceiraIdade(60);

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} paises`
}

console.log(faltaVisitar(13));


// Crie uma função para verificar se um valor é Truthy

function verificarTrue(n1){
  if(!!n1 === true){
  return true
  }else {
    return false
    //corrigindo return !!n1 seria mais pratico
  }
}

console.log(verificarTrue(1))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return `${lado * 4} `
}
console.log(perimetro(20))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome,sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Luiz Henrique', 'Silva de Assis'))

// Crie uma função que verifica se um número é par

function imparOuPar(n3){
  if(n3 % 2 == 0 ){
    return `${n3} é par`
  }else if(n3 == undefined){
    return 'Digite um numero para execultar a função'
  }else{
    return `${n3} é impar`
  }
}

console.log(imparOuPar(2))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
  return typeof dado;
}

console.log(tipoDeDado(true))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.


addEventListener('scroll', function(){console.log(nomeCompleto('Luiz Henrique', 'Silva de Assis'))})
  

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

