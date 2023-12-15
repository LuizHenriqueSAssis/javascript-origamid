var pessoa = {
  nome: 'Luiz',
  idade: 21,
  
}
 console.log(pessoa);

 var quadrado = {
  lados:4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado) {
    return lado * this.lados ;
  }
 }

 console.log(quadrado.area(5));
 console.log(quadrado.perimetro(5));

 var menu ={
  width: 800,
  height: 50.,
  backgroundColor: '#84E',
 }
menu.backgroundColor = '#000';
menu.color ='blue';

menu.esconder =function(){
  console.log('Escondi');
}

 var bg = menu.backgroundColor;

 //Exercicios.

 // Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var nomeCompleto = {
  nome:'Luiz Henrique',
  sobrenome:'Silva de Assis',
};

// Crie um método no objeto anterior, que mostre o seu nome completo

var meuNome = nomeCompleto.nome +  ' ' + nomeCompleto.sobrenome;

/*dados.nomeCompleto = function(){
  return `${this.mome} ${this.sobrenome}
};
*/

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
  cor:'preto',
  idade: '10 amos',
  costume: 'late ao ver homems',
};

/*
  var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    latir() {
      if(pessoa === 'homem) {
        retur 'latir';
      }else {
        retur 'nada';
      }
    }
  }
*/



