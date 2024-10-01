// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)

//O resultado é 35

// Crie duas expressões que retornem NaN

var horas = +'20h', divisao = '3'/'dois';
console.log(horas,divisao)

// Somar a string '200' com o número 50 e retornar 250

var soma = +'200' + 50;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado

var incremento1 = 5 ;
console.log(incremento1++);
console.log(incremento1);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2 ; // NaN (Not a Number)
console.log(pesoPorDois, unidade)